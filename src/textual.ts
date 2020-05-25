import { mapObject } from './utils/object';

function Textual <T extends  Record<string, any>> (mods: T) {
  
  const update = () => {

  }
  
  let returns = {update}
  const mappedMods: Return<T> = mapObject((val) => {
    if(typeof val === "function")
      return val(returns);
    else 
      return val; 
  },  mods);

  for (const key in mappedMods)
  //@ts-ignore
    returns[key] = mappedMods[key];


  return Object.assign(returns, mappedMods);
}


export default Textual