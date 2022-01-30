import React, { FC, ReactNode } from 'react'
import classNames from 'classnames'

type ButtonProps = {
    outline?: boolean,
    className?: string,
    children: ReactNode | string
}

export const Button: FC<ButtonProps> = ({outline, children, className}) => {
    return(
        <button className={classNames('button', className, {
            'button--outline' : outline
        })} >
            {children}
        </button>
    )
}
