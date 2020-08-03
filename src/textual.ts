import managers from "./managers"
import { mapObject } from './utils/object';
import { injectable, inject, Container } from "inversify";
import "reflect-metadata";
import TYPES from "./types";

@injectable()
class Base implements TextualType {
  //@inject(TYPES.Managers) private Managers!: ManagersType;
  Managers: ManagersType

  public constructor(
    @inject(TYPES.Managers) Managers: ManagersType
  ) {
    this.Managers = Managers
  }

  update(): void {
    throw new Error("Method not implemented.");
  }
}

@injectable()
class Manager {

}

const Textual = ({Managers = managers}: {Managers: ManagersType } = {Managers: managers}) => {
  const myContainer = new Container();

  
  myContainer.bind<ManagersType>(TYPES.Managers).toConstantValue(Managers);


  return myContainer.get<TextualType>(TYPES.TextualType);
}

let y = Textual();

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