// Type definitions for Textual
// Definitions by: April Gray aprgray5@gmail.com

export = Textual;


type Person <T extends {}> = T & {};

//@ts-ignore
declare class Textual<MODS extends Record<string, any>> implements Person<MODS> {
  
  constructor(modules?: MODS)

}

