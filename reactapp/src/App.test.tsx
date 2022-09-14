import React from 'react'
import { act, cleanup, findByTestId, fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import App from './App'
import { fetchData } from './api/axios'
import { mockAxiosSongs, mockAxiosData } from './utils/utils.mock'

test('renders spinner', () => {
    render(<App />)
    const spinner = screen.getByTestId('svgSpinnerElement')
    expect(spinner).toBeInTheDocument()
})

test('wait for image', async () => {
    render(<App />)
    await waitForElementToBeRemoved(() => screen.queryByTestId('svgSpinnerElement'), { timeout: 3000 })
    expect(screen.getByPlaceholderText(/search albums/i)).toBeInTheDocument()
})



