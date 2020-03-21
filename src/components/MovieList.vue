<template>
  <ul class="grid">
    <movie-list-item v-for="movie in movies" :key="movie.imdbID" :movie="movie"></movie-list-item>
  </ul>
</template>

<script>
import MovieListItem from '@/components/MovieListItem'

export default {
  name: 'movie-list',
  props: {
    movies: {
      type: Array,
      required: true
    }
  },
  components: {
    MovieListItem
  }
}
</script>

<style scoped>

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
        grid-column-gap: 6rem;
        grid-row-gap: 3rem;
        padding: 0;
        margin-top: 4rem;
    }

    @media screen and (max-width: 600px) {
        .grid {
            grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
            margin-top: 2rem;
        }
    }

</style>
