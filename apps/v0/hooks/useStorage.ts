import {
  Dispatch,
  SetStateAction,
  useCallback,
  useSyncExternalStore,
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

// 全局存储 StorageStore 实例
const globalStores: Record<StorageType, Record<string, StorageStore<any>>> = {
  local: {},
  session: {},
};

class StorageStore<T> {
  private key: string;
  private options: Options<T>;
  private listeners: Set<() => void> = new Set();
  private cachedValue: T | undefined; // Cache the last snapshot value

  constructor(key: string, options: Options<T>) {
    this.key = key;
    this.options = options;
    this.cachedValue = this.getValue(); // Initialize the cached value
  }

  public getStorage(): Storage | undefined {
    if (typeof window === "undefined") {
      return undefined;
    }
    return this.options.type === "session"
      ? window.sessionStorage
      : window.localStorage;
  }

  private getValue(): T | undefined {
    const storage = this.getStorage();
    const value = storage?.getItem(this.key);
    if (value === undefined || value === null) {
      return this.options.defaultValue;
    }
    try {
      const decryptedValue =
        "decrypt" in this.options ? this.options.decrypt(value) : value;
      const deserializedValue =
        "deserializer" in this.options
          ? this.options.deserializer(decryptedValue)
          : JSON.parse(decryptedValue);
      return deserializedValue;
    } catch (error) {
      console.error("Failed to parse value from storage: ", error);
      return this.options.defaultValue;
    }
  }

  private setValue(value: T | undefined) {
    const storage = this.getStorage();
    if (value === undefined || value === null) {
      storage?.removeItem(this.key);
    } else {
      const serializedValue =
        "serializer" in this.options
          ? this.options.serializer(value)
          : JSON.stringify(value);
      const encryptedValue =
        "encrypt" in this.options
          ? this.options.encrypt(serializedValue)
          : serializedValue;
      storage?.setItem(this.key, encryptedValue);
    }
    this.cachedValue = value;
    this.notifyListeners();
  }

  subscribe(listener: () => void): () => void {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === null) return;
      if (e.key === this.key && e.storageArea === this.getStorage()) {
        this.cachedValue = this.getValue();
        this.notifyListeners();
      }
    };
    this.listeners.add(listener);
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      this.listeners.delete(listener);
    };
  }

  getSnapshot(): T | undefined {
    return this.cachedValue;
  }

  getServerSnapshot(): T | undefined {
    return this.options.defaultValue;
  }

  notifyListeners() {
    this.listeners.forEach((listener) => listener());
  }

  setItem(value: SetStateAction<T | undefined>) {
    const newValue =
      typeof value === "function"
        ? (value as (prevState: T | undefined) => T | undefined)(
            this.getSnapshot()
          )
        : value;
    this.setValue(newValue);
  }
}

function getOrCreateStore<T>(
  key: string,
  options: Options<T>
): StorageStore<T> {
  const storeType = options.type || "local";
  let store = globalStores[storeType][key];
  if (!store) {
    store = globalStores[storeType][key] = new StorageStore(key, options);
  }
  return store;
}

type Return<T> = [T | undefined, Dispatch<SetStateAction<T | undefined>>];

function useStorage<T>(key: string, options?: Options<T>): Return<T> {
  const store = getOrCreateStore(key, options || {});

  const state: T | undefined = useSyncExternalStore(
    store.subscribe.bind(store),
    store.getSnapshot.bind(store),
    store.getServerSnapshot.bind(store)
  );

  const setItem = useCallback(
    (value: SetStateAction<T | undefined>) => {
      store.setItem(value);
    },
    [store]
  );

  return [state, setItem];
}

export default useStorage;
