import Managers from "./managers"
import { mapObject } from './utils/object';
import { injectable, inject, Container } from "inversify";
import "reflect-metadata";
import TYPES from "./types";

const Mods = {
  Managers
}
export interface Warrior {
  fight(): string;
  sneak(): string;
}

export interface Weapon {
  hit(): string;
}

export interface ThrowableWeapon {
  throw(): string;
}


@injectable()
class Katana implements Weapon {
    public hit() {
        return "cut!";
    }
}

@injectable()
class Shuriken implements ThrowableWeapon {
    public throw() {
        return "hit!";
    }
}

@injectable()
class Ninja implements Warrior {
    @inject(TYPES.Weapon) private _katana!: Weapon;
    @inject(TYPES.ThrowableWeapon) private _shuriken!: ThrowableWeapon;
    public fight() { return this._katana.hit(); }
    public sneak() { return this._shuriken.throw(); }
}

const myContainer = new Container();
myContainer.bind<Warrior>(TYPES.Warrior).to(Ninja);
myContainer.bind<Weapon>(TYPES.Weapon).to(Katana);
myContainer.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);

const ninja = myContainer.get<Warrior>(TYPES.Warrior);

@injectable()
class Base implements TextualType {
  @inject(TYPES.Managers) private Managers!: ManagersType;

  update(): void {
    throw new Error("Method not implemented.");
  }
}

const Textual = ({Managers}: {Managers: Newable<ManagersType> }) => {
  const myContainer = new Container();
  myContainer.bind<ManagersType>(TYPES.Managers).to(Managers);
  return myContainer.get<TextualType>(TYPES.TextualType);
}

/*
function Textual <T> (mods?: ModsType<T, Partial<typeof Mods>>) {
  
  //Fill in mods
  if(mods)
    mods = {
      ...Mods,
      ...mods
    }
  else 
    //@ts-ignore
    mods = Mods;

  const update = () => {

  }
  

  // RETURN

  let returns = {update}
  //@ts-ignore
  const mappedMods: Return<typeof mods> = mapObject((val) => {
    if(typeof val === "function")
      return val(returns);
    else 
      return val; 
  },  mods);

  for (const key in mappedMods)
  //@ts-ignore
    returns[key] = mappedMods[key];


  return Object.assign(returns, mappedMods);
}*/




export default Textual;