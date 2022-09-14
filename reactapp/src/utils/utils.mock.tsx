import axios from 'axios'
import { mockedSongs } from '../store'
import { mockedData } from '../store'

export const mockAxiosSongs = () => {
    const mockedAxiosData = {
        data: {
            feed: {
                entry: mockedSongs
            }
        }
    }

    const mockedAxios = axios as jest.Mocked<typeof axios>

    mockedAxios.get.mockResolvedValue(mockedAxiosData)
}

export const mockAxiosData = () => {
    const mockedAxiosData = {
        data: {
            feed: mockedData
        }
    }

    const mockedAxios = axios as jest.Mocked<typeof axios>

    mockedAxios.get.mockResolvedValue(mockedAxiosData)
}

