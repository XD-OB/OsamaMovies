<template>
  <div>
    <div class="title">
        <i class="fas fa-video title__icon"></i>
        <span class="title__text">OsamaMovies</span>
      </div>
    <div id="app">
      <search @search="changeMovieResults"></search>
      <movie-list :movies="movies"></movie-list>
    </div>
  </div>
</template>

<script>
import Search from '@/components/Search'
import MovieList from '@/components/MovieList'

export default {
  name: 'app',
  data () {
    return {
      movies: []
    }
  },
  methods: {
    changeMovieResults (results) {
      this.movies = results
    }
  },
  components: {
    MovieList,
    Search
  }
}
</script>

<style>
:root {
  --blue-darkest: #131C25;
  --blue-light: #169CFC;
  --white: #E3E4E5;
  --grey-light: #919191;
  --yellow: #E3B044;
}

html {
  font-size: 62.5%;
}

body {
  font-family: 'Lato';
  font-weight: 400;
  background-color: var(--blue-darkest);
}

#app {
  min-height: 100vh;
  padding: 2rem 4rem;
}

@media screen and (max-width: 600px) {
  #app {
    padding: 1rem 2rem;
  }
}

.title {
  font-size: 3rem;
  font-weight: 500;
  color: var(--blue-light);
  background-color: rgb(0, 0, 0);
  padding: 2rem;
  margin-bottom: 3rem;
}

.title__icon {
  color: var(--yellow);
}

.title__text {
  margin-left: 2rem;
}

</style>
