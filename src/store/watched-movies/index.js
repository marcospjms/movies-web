import state from './state';
import actions from './actions';
import getters from '../bookmarks/getters';
import mutations from '../bookmarks/mutations';


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
