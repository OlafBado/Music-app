import {Song} from '../../store'

export const albumsDescending = (a: Song, b: Song) => {

    if (a["im:name"].label > b["im:name"].label) {
        return 1
    } else {
        return -1
    }
}

export const albumsAscending= (a: Song, b: Song) => {

    if (a["im:name"].label > b["im:name"].label) {
        return -1
    } else {
        return 1
    }
}

export const artistDescending= (a: Song, b: Song) => {

    if (a["im:artist"].label > b["im:artist"].label) {
        return 1
    } else {
        return -1
    }
}

export const artistAscending= (a: Song, b: Song) => {

    if (a["im:artist"].label > b["im:artist"].label) {
        return -1
    } else {
        return 1
    }
}

export const categoryDescending= (a: Song, b: Song) => {

    if (a.category.attributes.label > b.category.attributes.label) {
        return 1
    } else {
        return -1
    }
}

export const categoryAscending= (a: Song, b: Song) => {

    if (a.category.attributes.label > b.category.attributes.label) {
        return -1
    } else {
        return 1
    }
}

export const dateDescending= (a: Song, b: Song) => {

    if (a["im:releaseDate"].label > b["im:releaseDate"].label) {
        return 1
    } else {
        return -1
    }
}

export const dateAscending= (a: Song, b: Song) => {

    if (a["im:releaseDate"].label > b["im:releaseDate"].label) {
        return -1
    } else {
        return 1
    }
}