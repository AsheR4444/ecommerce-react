import React, { FC, useState } from 'react'
import classNames from 'classnames'

import { pizzaTypes } from '../../api/types'
import { Button } from '../Button'

import {ReactComponent as ItemIcon} from './plus.svg'

type ItemTypes = pizzaTypes


export const Item: FC<ItemTypes> = ({imageUrl, name, price, types, sizes}) => {
    const [activeType, setActiveType] = useState(types[0])
    const [activeSize, setAcitveSize] = useState(sizes[0])

    const typeNames = ['тонкое', 'традиционное']

    const onSelectType = (index: number) => { setActiveType(index) }
    const onSelectSize = (index: number) => { setAcitveSize(index) }

    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={imageUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {typeNames.map((typeName, index) => (
                        <li
                            key={typeName}
                            onClick={() => onSelectType(typeNames.indexOf(typeName))}
                            className={classNames({
                                active : activeType === index,
                                disabled: !types.includes(index)
                            })}
                        >
                            {typeName}
                        </li>
                    ))}
                </ul>
                <ul>
                    {sizes.map((size) => (
                        <li
                            key={size}
                            onClick={() => onSelectSize(size)}
                            className={classNames({
                                active : activeSize === size,
                                disabled: !sizes.includes(size)
                            })}
                        >
                            {size} см
                        </li>
                    ))}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} ₽</div>
                <Button className='button--add' outline>
                    <ItemIcon />
                    <span>Добавить</span>
                    <i>2</i>
                </Button>
            </div>
        </div>
    )
}
