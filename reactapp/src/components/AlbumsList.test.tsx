import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import AlbumsList from './AlbumsList'
import { mockedSongs, mockedFunction, mockedFavourites } from '../store'

test('render table', () => {
    render(<AlbumsList songs={mockedSongs} favourites={mockedFavourites} setFavourites={mockedFunction} active={false}/>)
    const tableElement = screen.getByRole('table')
    expect(tableElement).toBeInTheDocument()
})

test('render column headers', () => {
    render(<AlbumsList songs={mockedSongs} favourites={mockedFavourites} setFavourites={mockedFunction} active={false}/>)
    const thElement = screen.getAllByRole('columnheader')
    expect(thElement).toHaveLength(7)
})

test('render at least one row', () => {
    render(<AlbumsList songs={mockedSongs} favourites={mockedFavourites} setFavourites={mockedFunction} active={false}/>)
    const trElement = screen.getAllByRole('row')
    expect(trElement.length).toBeGreaterThanOrEqual(1)
})
