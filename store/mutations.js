export const mutations = {
  toggleLang: state => {　
    state.isChinese = !state.isChinese
    console.log(`chinese: ${state.isChinese}`)
  },

  setData: (state, data) => state.data = data
}