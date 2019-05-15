import { getCountData } from '@/api/v1/counter'

const state = {
  count: 0
}
const mutations = {
  setCountAs(state, count) {
    state.count = count
  },
  increaseCountBy(state, count) {
    state.count += count
  },
  decreaseCountBy(state, count) {
    state.count -= count
  }
}
const getters = {
  getCount(state) {
    return state.count
  }
}
const actions = {
  setCount({ commit }) {
    getCountData({ onSuccess: data => commit('setCountAs', data.count) })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
