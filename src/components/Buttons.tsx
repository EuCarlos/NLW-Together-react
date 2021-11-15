import { ButtonHTMLAttributes } from 'react'

import '../styles/buttons.scss'

type ButtonsProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Buttons(props: ButtonsProps) {
    return(
        <button className="button" {...props}/>
    )
}