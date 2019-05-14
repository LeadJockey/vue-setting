const state = {
  count: 0
}
const mutations = {
  increment(state) {
    state.count += 1
  },
  decrement(state) {
    state.count -= 1
  }
}
const getters = {
  getCount(state) {
    return state.count
  }
}
const actions = {
  increaseCount(context) {
    console.log('context', context)
    context.commit('increment')
  },
  decreaseCount(context) {
    console.log('context', context)
    context.commit('decrement')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
