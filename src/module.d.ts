// Type definitions for Textual
// Definitions by: April Gray aprgray5@gmail.com

interface TextualType {
  update(): void
  Managers: ManagersType
}

interface ManagersType {
  Entity?: Entity
}

interface Entity {
  create: (text: ID) => any
  isAlive: (id: number) => any
  destroy: (id: number) => any
}

type ID = number | string 



type ModsType<T, F> = Spread<F> & Spread<T> 


// GENERAL

interface Newable<T> {
	new (...args: any[]): T;
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