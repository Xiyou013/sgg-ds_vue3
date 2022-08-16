import { personList } from '@/utils/enum'
const state = {
    name: '123',
    list: personList
}

const getters = {
    state_name: state => state.name,
    state_list: state => state.list
}

const mutations = {
    changeName(state, state_name) {
        // console.log('---store.state.name---:',state,state_name)
        if (state_name) {
            state.name = state_name
        }
    },
    changeList(state, state_list) {
        if (state_list) {
            state.state_list = state_list
        }
    }
}

const actions = {
    setName({ commit }, state_name) {
        commit('changeName', state_name)
    },
    setList({ commit }, state_list) {
        commit('changeList', state_list)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}