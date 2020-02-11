import state from '../movies/state';
import MoviesService from '../../services/movies';

export default {
  ...state,
  moviesService: new MoviesService(),
};
