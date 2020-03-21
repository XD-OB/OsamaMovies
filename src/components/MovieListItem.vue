<template>
  <li class="movie">
    <div>
      <div class="movie__image">
        <img class="movie__poster" :src="imageURL"/>
        <a class="movie__more" :href="`https://www.imdb.com/title/${movie.imdbID}`" target="_blank">More</a>
      </div>
        <p class="movie__title">{{ movie.Title }}</p>
        <span class="movie__year">{{ movie.Year }}</span><br>
    </div>
  </li>
</template>

<script>
import unknownImage from '@/assets/unknown.jpg'

export default {
  name: 'movie-list-item',
  computed: {
    imageURL () {
      if (this.movie.Poster === 'N/A') {
        return unknownImage
      }
      return this.movie.Poster
    }
  },
  props: {
    movie: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

.movie {
    list-style: none;
}

.movie__title {
    margin-top: 0.8rem;
    margin-bottom: 0.4rem;
    font-size: 2.3rem;
    color: var(--white);
}

.movie__year {
    font-size: 1.8rem;
    color: var(--grey-light);
}

.movie__image {
    position: relative;
}

.movie__more {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background-color: var(--blue-light);
    color: var(--white);
    text-decoration: none;
    padding: 1.5rem;
    border-radius: 5rem;
    font-size: 1.8rem;
    font-weight: 700;
}

.movie__more:hover {
    background-color: rgb(2, 66, 105);
}

.movie__poster {
    width: 100%;
    height: 45rem;
    border-radius: 1.5rem;
    box-shadow: 0 0.6rem 1rem rgba(0, 0, 0, 0.4);
}

@media screen and (max-width: 600px) {
    .movie__poster {
        height: 40rem;
    }
}

</style>
