import React, { FC } from 'react'

import { pizzaTypes } from '../../api/types'
import { Categories } from '../../components/Categories'
import { Item } from '../../components/Item'
import { SortPopup } from '../../components/SortPopup'

type screenHomeTypes = {
    items: Array<pizzaTypes>
}

export const Home: FC<screenHomeTypes> = ({items}) => {
    const itemsCat = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

    return (
        <div className="container">
            <div className="content__top">
                <Categories onClick={(name) => console.log(name)} items={itemsCat} />
                <SortPopup items={['популярности', 'цене', 'алфавиту']} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {items.map((item) => (
                    <Item key={item.id} {...item} />
                ))}
            </div>
        </div>
    )
}
