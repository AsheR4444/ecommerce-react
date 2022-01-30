import React, { FC, useState } from 'react'

import { CategoriesProps } from './types'

export const Categories: FC<CategoriesProps> = ({items, onClick}) => {
    const [activeItem, setActiveItem] = useState<number | null>(null)

    const onSelectItem = (index: number | null) => setActiveItem(index)

    return (
        <div className="categories">
            <ul>

                <li className={activeItem === null ? 'active' : '' } onClick={() => onSelectItem(null)}>Все</li>

                {items && (
                    <>
                        {
                            items.map((name, index) => (
                                <li
                                    key={`${name}_${index}`}
                                    onClick={() => onSelectItem(index)}
                                    className={activeItem === index ? 'active' : '' }
                                >
                                    {name}
                                </li>
                            ))
                        }
                    </>
                )}
            </ul>
        </div>
    )
}
