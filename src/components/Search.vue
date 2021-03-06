<template>
  <div class="search">
      <input placeholder="Search your movies" class="search__input" v-model="searchQuery" @keyup.enter="search"/>
      <div class="error" v-if="error">
        <i class="fas fa-exclamation-circle error__icon"></i>
        <span class="error__text">{{ error }}</span>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
const BASE_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=9e7abf80`
export default {
  name: 'search',
  data () {
    return {
      error: '',
      searchQuery: ''
    }
  },
  methods: {
    async search () {
      const response = await axios.get(`${BASE_URL}&s=${this.searchQuery}`)
      if (response.status === 200) {
        const data = response.data
        if (data.Response === 'True') {
          return this.$emit('search', data.Search)
        }
        this.error = data.Error
      }
    }
  }
}
</script>

<style scoped>

    .search__input {
        font-size: 5rem;
        font-family: inherit;
        font-weight: 700;
        background-color: transparent;
        border: none;
        color: var(--white);
        border-left: 1rem solid var(--blue-light);
        padding: 1rem;
    }

    .search__input:focus {
        outline: none;
    }

    @media screen and (max-width: 600px) {
        .search__input {
            font-size: 3rem;
            padding: 1.2rem;
        }
    }

    @media screen and (max-width: 9OOpx) {
        .search__input {
            font-size: 3rem;
            padding: 1.2rem;
        }
    }

    .error {
        margin-top: 1.5rem;
        font-size: 2rem;
    }

    .error__icon {
        color: var(--yellow);
    }

    .error__text {
        color: var(--white);
        margin-left: 1rem;
    }

</style>
