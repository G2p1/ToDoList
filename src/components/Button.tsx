import { ReactNode } from 'react';
import './css/Button.css'

interface Props {
    children?:ReactNode
}

const ButtonCreate = ({children, ...props}:Props) =>{

    return <button className='button' {...props}>+</button>
}

export default ButtonCreate;