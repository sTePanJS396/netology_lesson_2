import React from 'react'
import DropdownItem from './DropdownItem'

const DropdownList = () => {
    const data = ['Profile Information', 'Change Password', 'Become PRO', 'Help', 'Log Out']
    return (
        <ul data-id="dropdown" className="dropdown">
            {data.map(el => (<DropdownItem key={el} text={el}/>))}
        </ul>
    )
}

export default DropdownList