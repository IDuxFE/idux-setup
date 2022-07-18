/**
 * 重构$reset()
 * @desc 因为setup模式编程不支持reset方法，这里要手动重构
 * @param appStore
 */
export const installResetFunc = (appStore: object): void =>
  Object.values(appStore).forEach(item => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const initState = {} as Record<string, any>
    if (item) {
      Object.entries(item.$state).forEach(item => {
        initState[item[0]] = item[1]
      })
      item.reset = () => {
        Object.keys(item.$state).forEach(state => {
          item.$state[state] = initState[state]
        })
      }
    }
  })
