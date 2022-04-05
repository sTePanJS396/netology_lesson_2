import React from 'react'

const DropdownItem = ({ text }) => {
  return (
    <li className="active"><a href={'/'}>{text}</a></li>
  )
}

export default DropdownItem