import Textual, {Mods} from "../textual";

const entities:Record<number, boolean> = {}
let idCnt = 0;


export default (text: any) => ({
  create: () => {
    entities[idCnt] = true;
    idCnt++;
  },

  isAlive: (id: number) => {
    return entities[id];
  },

  destroy: (id: number) => {
    delete entities[id];
  }
})