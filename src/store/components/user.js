const state = {
  user: null,
  userId: '',
  displayName: ''
}

const getters = {
  user: state => {
    return state.user
  },
  userId:state=>{
    return state.userId
  },
  displayName:state=>{
    return state.displayName
  }

}

const mutations = {
  user: (state, user) =>{
    state.user = user;
  },
  userId: (state, userId) => {
    state.userId=userId
  },
  displayName:(state, displayName)=>{
    state.displayName=displayName
  }
}

const actions = {
  setUser:({commit}, payload)=>{
    commit('user', payload)
    commit('userId', payload.uid)
    commit('displayName', payload.displayName)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
