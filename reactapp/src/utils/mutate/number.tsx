import { Song } from '../../store'

export const number = (songs: Song[]) => {

    const numberedObjectsArray = songs.map((song, index) => {
        song.number = index + 1
        return song
    })

    return numberedObjectsArray

}