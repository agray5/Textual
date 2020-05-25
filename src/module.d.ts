// Type definitions for Textual
// Definitions by: April Gray aprgray5@gmail.com



type Dictionary<T> = Record<Key, T>

type Key = string | number | symbol;

type Return<T> = {
  [P in keyof T]?:
      T[P] extends (...args: any) => any ? ReturnType<T[P]>:
      T[P]
};