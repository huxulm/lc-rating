import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

type StorageType = "local" | "session";

type Encryption =
  | {
      encrypt: (data: string) => string;
      decrypt: (data: string) => string;
    }
  | {};

type Serialization<T> =
  | {
      serializer: (data: T) => string;
      deserializer: (data: string) => T;
    }
  | {};

type Options<T> = {
  type?: StorageType;
  defaultValue?: T;
} & Serialization<T> &
  Encryption;

type Return<T> = [
  T | undefined,
  Dispatch<SetStateAction<T | undefined>>,
  () => void
];

type Options_D<T> = {
  type?: StorageType;
  defaultValue: T;
} & Serialization<T> &
  Encryption;

type Return_D<T> = [T, Dispatch<SetStateAction<T>>, () => void];

function useStorage<T>(key: string, options: Options_D<T>): Return_D<T>;
function useStorage<T>(key: string, options?: Options<T>): Return<T>;
function useStorage<T>(key: string, options?: Options<T>): Return<T> {
  const defaultValue = options?.defaultValue;

  if (!key) {
    throw new Error("useLocalStorage key may not be falsy");
  }

  if (typeof window === "undefined") {
    return [defaultValue, () => {}, () => {}];
  }

  const type = options?.type ?? "local";
  const encryption =
    options && "encrypt" in options ? options.encrypt : (data: string) => data;
  const decryption =
    options && "decrypt" in options ? options.decrypt : (data: string) => data;
  const serializer =
    options && "serializer" in options ? options.serializer : JSON.stringify;
  const deserializer =
    options && "deserializer" in options ? options.deserializer : JSON.parse;

  const storage =
    type === "session" ? window.sessionStorage : window.localStorage;

  const initializer = useRef((key: string) => {
    try {
      const localStorageValue = storage.getItem(key);
      if (localStorageValue !== null) {
        return deserializer(decryption(localStorageValue));
      } else {
        defaultValue &&
          storage.setItem(key, encryption(serializer(defaultValue)));
        return defaultValue;
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(
          `Error handling storage getItem for key "${key}": ` +
            (error instanceof Error ? error.message : error)
        );
        return defaultValue;
      }
    }
  });

  const [state, setState] = useState<T | undefined>(() =>
    initializer.current(key)
  );

  useLayoutEffect(() => setState(initializer.current(key)), [key]);

  const setItem: Dispatch<SetStateAction<T | undefined>> = useCallback(
    (valOrFunc: SetStateAction<T | undefined>) => {
      try {
        const newState =
          valOrFunc instanceof Function
            ? valOrFunc(initializer.current(key))
            : valOrFunc;

        storage.setItem(key, encryption(serializer(newState)));
        setState(newState);
      } catch (error) {
        console.error(
          `Error handling storage setItem for key "${key}": ` +
            (error instanceof Error ? error.message : error)
        );
      }
    },
    [key, setState]
  );

  const removeItem = useCallback(() => {
    try {
      localStorage.removeItem(key);
      setState(undefined);
    } catch (error) {
      console.error(
        `Error handling storage removeItem for key "${key}": ` +
          (error instanceof Error ? error.message : error)
      );
    }
  }, [key, setState]);

  useEffect(() => {
    if (type !== "local" || !storage) return;

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key && e.storageArea === storage) {
        try {
          if (e.newValue !== null) {
            setState(deserializer(decryption(e.newValue)));
          } else {
            setState(defaultValue);
          }
        } catch (error) {
          console.error(
            `Error handling storage change for key "${key}": ` +
              (error instanceof Error ? error.message : error)
          );
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => window.removeEventListener("storage", handleStorageChange);
  }, [key, setState]);

  return [state, setItem, removeItem];
}

export default useStorage;
