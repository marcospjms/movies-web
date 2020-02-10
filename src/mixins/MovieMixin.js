import _ from 'lodash';

const apiKey = 'b4e2d45d3d03415323db46ae46bdd124';
const imdbUrl = 'https://api.themoviedb.org/3/';
const topRatedMoviesUrl = `${imdbUrl}movie/top_rated?api_key=${apiKey}`;

export default {
  created() {
    this.toNextTopRatedMoviesPage().then();
  },
  data: () => ({
    apiKey,
    imdbUrl,
    topRatedMovies: {
      movies: [],
      url: topRatedMoviesUrl,
      totalPages: 10,
      currentPage: 0,
    },
  }),
  methods: {
    toNextTopRatedMoviesPage() {
      return new Promise((resolve, rejected) => {
        if (this.topRatedMovies.currentPage < this.topRatedMovies.totalPages) {
          this.topRatedMovies.currentPage += 1;
          this.updateTopRatedMovies(resolve, rejected);
        }
        resolve([]);
      });
    },
    toPreviousTopRatedMoviesPage() {
      return new Promise((resolve, rejected) => {
        if (this.topRatedMovies.currentPage > 1) {
          this.topRatedMovies.currentPage -= 1;
          this.updateTopRatedMovies(resolve, rejected);
        }
        resolve([]);
      });
    },
    updateTopRatedMovies(resolve, rejected) {
      this.fetchTopRatedMovies(this.topRatedMovies.currentPage).then((data) => {
        this.topRatedMovies.movies = data;
        resolve(this.topRatedMovies.movies);
      }).catch(rejected);
    },
    fetchTopRatedMovies(page = 1) {
      return new Promise((resolve, rejected) => {
        this.$http.get(`${this.topRatedMovies.url}&page=${page}`).then((data) => {
          const formatedResult = this.toCamelCase(data.data);
          this.topRatedMovies.totalPages = formatedResult.totalPages;
          resolve(formatedResult.results.map(this.toCamelCase));
        }).catch(rejected);
      });
    },
    toCamelCase(data) {
      return _.mapKeys(data, (v, k) => _.camelCase(k));
    },
  },
};
