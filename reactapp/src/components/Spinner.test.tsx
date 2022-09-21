import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import Spinner from './Spinner'

test('render svgs', () => {
    render(<Spinner />)
    const svg = screen.getByTestId('svgSpinnerElement')
    expect(svg).toBeInTheDocument()
})