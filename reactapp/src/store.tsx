export interface Data {
    author: Author;
    entry: [];
    icon: LabeledItem;
    title: LabeledItem;
    }

export interface LabeledItem {
    label: string;
    attributes: AttributeDetails;
    }
  
export interface AttributeDetails {
    ["im:id"]: string;
    label: string;
    scheme: string;
    term: string;
    href: string;
    }
  
export interface Author {
    name: LabeledItem;
    uri: LabeledItem;
    }
  
export interface Song {
    id: LabeledItem;
    title: LabeledItem;
    category: LabeledItem;
    link: LabeledItem;
    ["im:image"]: Array<LabeledItem>;
    ["im:name"]: LabeledItem;
    ["im:artist"]: LabeledItem;
    ["im:releaseDate"]: LabeledItem;
    }

export interface AlbumsListProps {
    songs: Song[];
    favourites: string[];
    setFavourites: React.Dispatch<React.SetStateAction<string[]>>;
    active: Boolean;
    }

export interface AlbumProps {
    song: Song;
    favourites: string[];
    setFavourites: React.Dispatch<React.SetStateAction<string[]>>;
    active: Boolean;
    }

export interface MainProps {
    title: string;
    songs: Song[];
    setSearchResults: React.Dispatch<React.SetStateAction<Song[]>>;
    }

export interface NavbarProps {
    logo: string;
    uri: string;
    active: Boolean;
    setActive: React.Dispatch<React.SetStateAction<Boolean>>;
    }

export interface SearchBarProps {
    songs: Song[];
    setSearchResults: React.Dispatch<React.SetStateAction<Song[]>>;
}

export const mockedFunction = jest.fn()

export const mockedFavourites = []

export const mockedData = {
    author: {
        name: {
            label: 'string',
            attributes: {
                ["im:id"]: 'string',
                label: 'string',
                scheme: 'string',
                term: 'string',
                href: 'string',
            }
        }
    },
    entry: [],
    icon: {
        label: 'string',
        attributes: {
            ["im:id"]: 'string',
            label: 'string',
            scheme: 'string',
            term: 'string',
            href: 'string',
        }
    },
    title: {
        label: 'string',
        attributes: {
            ["im:id"]: 'string',
            label: 'string',
            scheme: 'string',
            term: 'string',
            href: 'string',
        }
    }
}

export const mockedSongs = [
    {
        id: {
            label: "test",
            attributes: {
                ["im:id"] : '123',
                label: "11",
                scheme: '11',
                term: '11',
                href: '11'
            }
        },
        title: {
            label: "test",
            attributes: {
                ["im:id"] : '123',
                label: "11",
                scheme: '11',
                term: '11',
                href: '11'
            }
        },
        category: {
            label: "test",
            attributes: {
                ["im:id"] : '123',
                label: "11",
                scheme: '11',
                term: '11',
                href: '11'
            }
        },
        link: {
            label: '11',
            attributes: {
                ["im:id"] : '123',
                label: "11",
                scheme: '11',
                term: '11',
                href: '11'
            }
        },
        ["im:image"]: [
            {
                label: "test",
                attributes: {
                    ["im:id"] : '123',
                    label: "11",
                    scheme: '11',
                    term: '11',
                    href: '11'
                }
            }
        ],
        ["im:name"]: {
            label: "test",
            attributes: {
                ["im:id"] : '123',
                label: "11",
                scheme: '11',
                term: '11',
                href: '11'
            }
        },
        ["im:artist"]: {
            label: "test",
            attributes: {
                ["im:id"] : '123',
                label: "11",
                scheme: '11',
                term: '11',
                href: '11'
            }
        },
        ["im:releaseDate"]: {
            label: "test",
            attributes: {
                ["im:id"] : '123',
                label: "11",
                scheme: '11',
                term: '11',
                href: '11'
            }
        }
    },
]

export const mockedSong = 
    {
        id: {
            label: "test",
            attributes: {
                ["im:id"] : '123',
                label: "11",
                scheme: '11',
                term: '11',
                href: '11'
            }
        },
        title: {
            label: "test",
            attributes: {
                ["im:id"] : '123',
                label: "11",
                scheme: '11',
                term: '11',
                href: '11'
            }
        },
        category: {
            label: "test",
            attributes: {
                ["im:id"] : '123',
                label: "11",
                scheme: '11',
                term: '11',
                href: '11'
            }
        },
        link: {
            label: '11',
            attributes: {
                ["im:id"] : '123',
                label: "11",
                scheme: '11',
                term: '11',
                href: '11'
            }
        },
        ["im:image"]: [
            {
                label: "test",
                attributes: {
                    ["im:id"] : '123',
                    label: "11",
                    scheme: '11',
                    term: '11',
                    href: '11'
                }
            }
        ],
        ["im:name"]: {
            label: "test",
            attributes: {
                ["im:id"] : '123',
                label: "11",
                scheme: '11',
                term: '11',
                href: '11'
            }
        },
        ["im:artist"]: {
            label: "test",
            attributes: {
                ["im:id"] : '123',
                label: "11",
                scheme: '11',
                term: '11',
                href: '11'
            }
        },
        ["im:releaseDate"]: {
            label: "test",
            attributes: {
                ["im:id"] : '123',
                label: "11",
                scheme: '11',
                term: '11',
                href: '11'
            }
        }
    }
