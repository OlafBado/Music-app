import { fetchData } from '../api/axios'
import { mockAxiosSongs } from './utils.mock'

jest.mock('axios')

test('should fetch songs', async () => {
    mockAxiosSongs()
    const fetchedSongs = await fetchData()
    expect(fetchedSongs.entry.length).toBeGreaterThan(0)
})