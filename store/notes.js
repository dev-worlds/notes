import axios from "axios";

export const state = () => ({
  itemsNote: []
})

export const mutations = {
  addList(state, item) {
    state.itemsNote.push(item)
  },
  loadList(state, items) {
    state.itemsNote = items
  }
}

export const actions = {
  async loadListNotes({commit}) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
    if (response.status === 200 && response.data.length) {
      commit('loadList', response.data)
    }
  }
}

export const getters = {
  getListNotes(state) {
    return state.itemsNote
  }
}
