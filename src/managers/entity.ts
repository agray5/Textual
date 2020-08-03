import Textual from "../textual";

const entities:Record<ID, boolean> = {}
let idCnt = 0;


export default ({
  create: (text: ID) => {
    entities[text] = true;
    idCnt++;

    return text;
  },

  isAlive: (id: number) => {
    return entities[id];
  },

  destroy: (id: number) => {
    delete entities[id];
  }
})