import Textual from "../src/textual"

describe("Mods", () => {

  it("should be able to update values in other mods", () => {
    const newVal = "diff value";

    const textual = Textual({
      test1: () => {
        let value = "value";

        return ({
          value
        })
      },
      test2: (text: any) => ({
        update: () => text.test1.value = newVal
      })
    })
    

    //@ts-ignore
    textual.test2.update()
    //@ts-ignore
    expect(textual.test1.value).toEqual(newVal);
  })
})
