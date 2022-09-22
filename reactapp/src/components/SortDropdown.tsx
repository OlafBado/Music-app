import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsis } from "@fortawesome/free-solid-svg-icons"
import { SortDropdownProps } from "../store"
import { useEffect, useState } from "react"
import { animated, useTransition } from 'react-spring';
import SortIconNumber from './sortIcons/SortIconNumber'
import SortIconAlbum from './sortIcons/SortIconAlbum'
import SortIconArtist from './sortIcons/SortIconArtist'
import SortIconCategory from './sortIcons/SortIconCategory'
import SortIconReleaseDate from './sortIcons/SortIconReleaseDate'

const SortDropdown = ({ sortBy, handleSortBy }: SortDropdownProps) => {
    const [isOpen, setIsOpen] = useState<Boolean>(false)

    useEffect(() => {
        
        const closeDropdown = (e: MouseEvent) => {
            const element = e.composedPath()[0] as HTMLElement
            const tagName = element.tagName
            console.log(tagName)
            if (tagName !== 'path') {
               setIsOpen(false)
            }
        }

        document.body.addEventListener('click', closeDropdown)

        return () => document.body.removeEventListener('click', closeDropdown)

    }, [])

    const transition = useTransition(isOpen, {
        from: {  y:-80, opacity: 0 },
        enter: { y:0, opacity: 1 },
        leave: { y:-80, opacity: 0 }
    })

    return (
        <div className="dropdown">
           <FontAwesomeIcon onClick={() => setIsOpen(!isOpen)} className='svg-ellipsis' icon={faEllipsis}/>
           {transition((style, item) => 
            item ?
            <animated.div className="Dropdown-menu" style={style}>
                    <SortIconNumber sortBy={sortBy} handleSortBy={handleSortBy}/>
                    <SortIconAlbum sortBy={sortBy} handleSortBy={handleSortBy}/>
                    <SortIconArtist sortBy={sortBy} handleSortBy={handleSortBy}/>
                    <SortIconCategory sortBy={sortBy} handleSortBy={handleSortBy}/>
                    <SortIconReleaseDate sortBy={sortBy} handleSortBy={handleSortBy}/>
            </animated.div>
            :
            ''
           )}
           
        </div>
    )
}

export default SortDropdown