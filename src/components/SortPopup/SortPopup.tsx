import React, { useState, useEffect, useRef, FC } from 'react'

import { ReactComponent as SortIcon } from './sort.svg'

type SortPopupTypes = {
    items: Array<string>
}

export const SortPopup: FC<SortPopupTypes> = ({items}) => {
    const [visiblePopup, setVisiblePopup] = useState(false)
    const [activeItem, setActiveItem] = useState(0)
    const sortRef = useRef(null)
    const activeLabel = items[activeItem]

    const onSelectItem = (index: number) => {
        setActiveItem(index)
        setVisiblePopup(false)
    }

    const toggleVisiblePopup = () => setVisiblePopup(!visiblePopup)

    const handleOutsideClick = (event: any) => {
        if (!event.path.includes(sortRef.current)) {
            setVisiblePopup(false)
        }
    }

    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick)
    }, [])

    return (
        <div ref={sortRef} className="sort">
            <div onClick={toggleVisiblePopup} className="sort__label">
                <SortIcon />
                <b>Сортировка по:</b>
                <span>{activeLabel}</span>
            </div>

            {visiblePopup && (
                <div className="sort__popup">
                    <ul>
                        {items.map((item, index) => {
                            return (
                                <li
                                    key={`${item}_${index}`}
                                    className={activeItem === index ? 'active' : '' }
                                    onClick={() => onSelectItem(index)}
                                >
                                    {item}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )}
        </div>
    )
}
