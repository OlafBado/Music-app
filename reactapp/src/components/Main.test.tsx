import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import Main from './Main'
import { mockedSongs, mockedFunction } from '../store'


test('renders h2', () => {
    render(<Main title="test" songs={ mockedSongs } setSearchResults={mockedFunction} />)
    const h2Element = screen.getByRole('heading', { level: 2 })
    expect(h2Element).toBeInTheDocument()
    expect(h2Element).toHaveTextContent('test')
})

test('renders img', () => {
    render(<Main title="test" songs={ mockedSongs } setSearchResults={mockedFunction} />)
    const imgElement = screen.getByRole('img')
    expect(imgElement).toBeInTheDocument()
})

test('render search input', () => {
    render(<Main title="test" songs={ mockedSongs } setSearchResults={mockedFunction} />)
    const input = screen.getByPlaceholderText(/search albums/i)
    expect(input).toBeInTheDocument()
})

test('render empty search input', () => {
    render(<Main title="test" songs={ mockedSongs } setSearchResults={mockedFunction} />)
    const input = screen.getByPlaceholderText(/search albums/i)
    expect((input as HTMLInputElement).value).toBe("")
})