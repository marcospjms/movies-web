import state from '../movies/state';
import MoviesService from '../../services/moviesService';

export default {
  ...state,
  moviesService: new MoviesService(),
};
