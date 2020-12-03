export const actions = {
  async nuxtServerInit({ commit, dispatch}, context) {
    const data = await context.app.$axios.$get('/data.json')
    commit('setData', data)
  },

  toggleLang({ commit }) {
    commit('toggleLang')
  }
}