import state from '../bookmarks/state';
import getters from '../bookmarks/getters';
import actions from '../bookmarks/actions';
import mutations from '../bookmarks/mutations';


export default {
  namespaced: true,
  state: {
    ...state,
    movies: [],
  },
  getters,
  actions,
  mutations,
};
