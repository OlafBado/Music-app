import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import SearchBar from './SearchBar'
import { mockedSongs, mockedFunction } from '../store'

test('render input', () => {
    render(<SearchBar songs={mockedSongs} setSearchResults={mockedFunction}/>)
    const inputElement = screen.getByPlaceholderText(/search albums/i)
    expect(inputElement).toBeInTheDocument()
})

test('render empty input', () => {
    render(<SearchBar songs={mockedSongs} setSearchResults={mockedFunction}/>)
    const inputElement = screen.getByPlaceholderText(/search albums/i)
    expect((inputElement as HTMLInputElement).value).toBe("")
})

test('input should change', () => {
    render(<SearchBar songs={mockedSongs} setSearchResults={mockedFunction}/>)
    const inputElement = screen.getByPlaceholderText(/search albums/i)
    const testValue = "test"
    fireEvent.change(inputElement, { target: {value: testValue}})
    expect((inputElement as HTMLInputElement).value).toBe(testValue)
})

test('render form', () => {
    render(<SearchBar songs={mockedSongs} setSearchResults={mockedFunction}/>)
    const formElement = screen.getByTestId("form")
    expect(formElement).toBeInTheDocument()
})