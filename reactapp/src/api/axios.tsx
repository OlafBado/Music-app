import axios from 'axios'

export const fetchData = async () =>  {
    const response = await axios.get('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
    return response.data.feed
  }