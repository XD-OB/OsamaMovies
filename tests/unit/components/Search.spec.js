import { shallowMount } from '@vue/test-utils'
import Search from '@/components/Search'
import Vue from 'vue'
import axios from 'axios'

jest.mock('axios')

describe('Component/Search', () => {
    let wrapper
    let input

    beforeEach(() => {
        wrapper = shallowMount(Search)
        input = wrapper.find('input')
        input.setValue('kingsman')
    })

    it('Should send a request to the right API and append search parameter', () => {
        const response = {status: 200, data: {Response: 'True'}}
        axios.get.mockImplementation(async () => response)
        input.trigger('keyup.enter')
        expect(axios.get).toHaveBeenCalledTimes(1)
    })

    it('Should emit the results if they are successfully retrieved', async () => {
        const movies = ['Kingsman: The Secret Service', 'Kingsman: The Golden Circle']
        const response = {status: 200, data: {Response: 'True', Search: movies}}
        axios.get.mockImplementation(async () => response)
        input.trigger('keyup.enter')
        await Vue.nextTick
        expect(wrapper.emitted('search')).toBeTruthy()
        expect(wrapper.emitted('search')[0][0]).toBe(movies)
    })

    it('Should not emit the result is status != 200', () => {
        const response = {status: 500, data: {Response: 'True', Search: [1]}}
        axios.get.mockImplementation(async () => response)
        input.trigger('keyup.enter')
        expect(wrapper.emitted().search).toBeFalsy()
    })

    it('Should not emit the result if Response retrieved is False', () => {
        const response = {status: 200, data: {Response: 'False', Search: [1]}}
        axios.get.mockImplementation(async () => response)
        input.trigger('keyup.enter')
        expect(wrapper.emitted().search).toBeFalsy()
    })

    it('Should display an error if the API sends back an Error', async () => {
        const response = {status: 200, data: {Response: 'False', Error: 'Too many results'}}
        axios.get.mockImplementation(async () => response)
        input.trigger('keyup.enter')
        await Vue.nextTick()
        const error = wrapper.find('span')
        expect(error.text()).toBe(response.data.Error)
    })

    it('Should make the error disappear if a new search is successful', async () => {
        wrapper.vm.error = 'Too many results.'
    
        let error = wrapper.find('span')
        expect(error.exists()).toBe(true)
    
        const response = { status: 200, data: { Response: 'True', Search: ['foobar', 'hello'] } }
        axios.get.mockImplementation(async () => response)
        input.trigger('keyup.enter')
    
        await Vue.nextTick()
    
        error = wrapper.find('span')
        expect(error.exists()).toBe(false)
      })
})