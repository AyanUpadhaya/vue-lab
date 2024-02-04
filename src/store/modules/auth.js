const state = {
    isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
    user: JSON.parse(localStorage.getItem('user')) || null,
  };
  const mutations = {
    login(state, user) {
      state.isAuthenticated = true;
      state.user = user;
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('user', JSON.stringify(user));
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('user');
    },
  };
  
  const actions = {
    login({ commit }, user) {
      // Perform authentication logic (e.g., API call)
      // If successful, commit the login mutation
      commit('login', user);
    },
    logout({ commit }) {
      // Perform logout logic (e.g., clear local storage)
      // If successful, commit the logout mutation
      commit('logout');
    },
  };
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
  };
  