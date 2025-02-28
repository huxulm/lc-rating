import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";

type StorageType = "local" | "session";

interface EncryptionHandler {
  encrypt: (data: string) => string;
  decrypt: (data: string) => string;
}

const useStorage = <T = undefined>(
  key: string,
  options?: {
    type?: StorageType;
    defaultValue?: T;
    encryption?: EncryptionHandler;
  }
): [T, Dispatch<SetStateAction<T>>] => {
  const type = options?.type ?? "local";
  const defaultValue = options?.defaultValue;
  const encryption = options?.encryption;

  const storage = useMemo(() => {
    if (typeof window === "undefined") return null;
    return type === "session" ? window.sessionStorage : window.localStorage;
  }, [type]);

  const [storedValue, setStoredValue] = useState<T | undefined>(() => {
    if (!storage) return defaultValue;
    try {
      const rawValue = storage.getItem(key);
      if (rawValue === null) return defaultValue;

      const decryptedValue = encryption
        ? encryption.decrypt(rawValue)
        : rawValue;

      return JSON.parse(decryptedValue) as T;
    } catch (error) {
      console.error(`Error reading storage key "${key}":`, error);
      return defaultValue;
    }
  });

  const setValue: React.Dispatch<React.SetStateAction<T | undefined>> = (
    value
  ) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    setStoredValue(valueToStore);

    if (!storage) return;

    try {
      if (valueToStore === undefined) {
        storage.removeItem(key);
      } else {
        const serializedValue = JSON.stringify(valueToStore);
        const encryptedValue = encryption
          ? encryption.encrypt(serializedValue)
          : serializedValue;
        storage.setItem(key, encryptedValue);
      }
    } catch (error) {
      console.error(`Error setting storage key "${key}":`, error);
    }
  };

  useEffect(() => {
    if (type !== "local" || !storage) return;

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key && e.storageArea === storage) {
        try {
          if (e.newValue !== null) {
            const decryptedValue = encryption
              ? encryption.decrypt(e.newValue)
              : e.newValue;
            setStoredValue(JSON.parse(decryptedValue) as T);
          } else {
            setStoredValue(defaultValue);
          }
        } catch (error) {
          console.error(
            `Error handling storage change for key "${key}":`,
            error
          );
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => window.removeEventListener("storage", handleStorageChange);
  }, [key, type, storage, defaultValue, encryption]);

  return [storedValue, setValue];
};

export default useStorage;
