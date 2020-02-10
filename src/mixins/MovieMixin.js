
export default {
  created() {
    this.fetchMovies().then((data) => {
      this.movies = data;
    });
  },
  data: () => ({ movies: [] }),
  methods: {
    fetchMovies() {
      return new Promise((resolve) => resolve(['Filme teste', 'Outro filme']));
    },
  },
};
