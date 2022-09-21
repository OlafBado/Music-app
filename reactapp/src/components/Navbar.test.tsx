import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import Navbar from './Navbar'
import { mockedFunction } from '../store'

test('button', () => {
    render(<Navbar logo={'test'} uri={'test'} active={false} setActive={mockedFunction}/>)
    const button = screen.getByText(/favourites/i)
    expect(button).toBeInTheDocument()
})

test('button click', () => {
    render(<Navbar logo={'test'} uri={'test'} active={false} setActive={mockedFunction}/>)
    const button = screen.getByText(/favourites/i)
    fireEvent.click(button)
    expect(mockedFunction).toHaveBeenCalledTimes(1)
})

test('logo', () => {
    render(<Navbar logo={'test'} uri={'test'} active={false} setActive={mockedFunction}/>)
    const logo = screen.getByText(/music/i)
    expect(logo).toBeInTheDocument()
})