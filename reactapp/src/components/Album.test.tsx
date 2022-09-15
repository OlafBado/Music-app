import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import Album from './Album'
import { mockedSong, mockedFunction, mockedFavourites } from '../store'
import userEvent from '@testing-library/user-event';

test('render svg', () => {
    render(<Album active={false} song={mockedSong} favourites={mockedFavourites} setFavourites={mockedFunction}/>)
    const svgElement = screen.getByTestId('svgElement')
    expect(svgElement).toBeInTheDocument()
})

test('opacity should be set to 0', () => {
    render(<Album active={false} song={mockedSong} favourites={mockedFavourites} setFavourites={mockedFunction}/>)
    const svgPlayElement = screen.getByTestId('svgPlayElement')
    const styles = getComputedStyle(svgPlayElement)
    expect(styles.opacity).toBe('')
})

test('render many svgs', () => {
    render(<Album active={false} song={mockedSong} favourites={mockedFavourites} setFavourites={mockedFunction}/>)
    const svgElement = screen.queryAllByRole('img', { hidden : true })
    expect(svgElement.length).toBeGreaterThan(1)
})

