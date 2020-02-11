import Vue from 'vue';
import _ from 'lodash';

const apiKey = 'b4e2d45d3d03415323db46ae46bdd124';
const imdbUrl = 'https://api.themoviedb.org/3/';
const topRatedMoviesUrl = `${imdbUrl}movie/top_rated?api_key=${apiKey}`;

const toCamelCase = (data) => _.mapKeys(data, (v, k) => _.camelCase(k));

export default class MoviesService {
  fetchTopRatedMovies = (page = 1) => new Promise((resolve, rejected) => {
    Vue.axios.get(`${topRatedMoviesUrl}&page=${page}`).then((data) => {
      const camelCaseResult = toCamelCase(data.data);
      const { totalPages } = camelCaseResult;
      const movies = camelCaseResult.results.map(toCamelCase);
      resolve({ totalPages, movies });
    }).catch(rejected);
  });
}
