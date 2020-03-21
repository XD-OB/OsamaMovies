import { shallowMount } from '@vue/test-utils'
import Search from '@/components/Search'
import MovieList from '@/components/MovieList'
import App from '@/App'

describe('App', () => {
    let wrapper

    beforeAll(() => {
        wrapper = shallowMount(App)
    })

    it('Should change movie result when search event is triggered', () => {
        expect(wrapper.vm.movies).toEqual([])
        const movies = ['Kingsman: The Secret Service', 'Kingsman: The Golden Circle']
        let search = wrapper.find(Search)
        search.vm.$emit('search', movies)
        expect(wrapper.vm.movies).toBe(movies)
    })

    it('Should pass the movies prop to MovieList', () => {
        const movieList = wrapper.find(MovieList)
        expect(movieList.props().movies).toBe(wrapper.vm.movies)
    })
})