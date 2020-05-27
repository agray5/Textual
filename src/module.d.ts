// Type definitions for Textual
// Definitions by: April Gray aprgray5@gmail.com

interface TextualType {
  update(): void
}

interface ManagersType {
  Entity: {

  }
}


type ModsType<T, F> = Spread<F> & Spread<T> 


// GENERAL

interface Newable<T> {
	new(): T;
}

type Dictionary<T> = Record<Key, T>

type Key = string | number | symbol;

type Spread<T> = {
  [P in keyof T]: T[P]
}

type Return<T> = {
  [P in keyof T]:
      T[P] extends (...args: any) => any ? ReturnType<T[P]>:
      T[P]
};