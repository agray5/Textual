export const mapObject = <T, R>(fn: (value: T, key: string, index: number) => R, object: Dictionary<T>) => {
  return Object.keys(object).reduce<Dictionary<R>>(function(result, key, index) {
    result[key] = fn(object[key], key, index)
    return result
  }, {}) 
}