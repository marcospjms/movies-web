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
      loading: false,
    },
  }),
  methods: {
    hasNextPage() {
      return this.topRatedMovies.currentPage < this.topRatedMovies.totalPages;
    },
    hasPreviousPage() {
      return this.topRatedMovies.currentPage > 1;
    },
    toNextTopRatedMoviesPage() {
      this.topRatedMovies.loading = true;
      return new Promise((resolve, rejected) => {
        if (this.hasNextPage()) {
          this.topRatedMovies.currentPage += 1;
          this.updateTopRatedMovies(resolve, rejected);
        }
        resolve([]);
      });
    },
    toPreviousTopRatedMoviesPage() {
      this.topRatedMovies.loading = true;
      return new Promise((resolve, rejected) => {
        if (this.hasPreviousPage()) {
          this.topRatedMovies.currentPage -= 1;
          this.updateTopRatedMovies(resolve, rejected);
        }
        resolve([]);
      });
    },
    updateTopRatedMovies(resolve, rejected) {
      this.fetchTopRatedMovies(this.topRatedMovies.currentPage).then((data) => {
        this.topRatedMovies.movies = data;
        this.topRatedMovies.loading = false;
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
