import React from 'react'
import DropdownList from './DropdownList'

const Dropdown = () => {
    const [isActive, setIsActive] = React.useState(false);

    function changeShow() {
        if (isActive === false) {
            setIsActive(true)
        }
        if (isActive === true) {
            setIsActive(false)
        }
    } 
    return (
        <div className="container">
            <div data-id="wrapper" className={isActive ? 'dropdown-wrapper open' : 'dropdown-wrapper'}>
                <button data-id="toggle" className="btn" onClick={changeShow}>
                    <span>Account Settings</span>
                    <i className="material-icons">public</i>
                </button>
                <DropdownList />
            </div>
        </div>
        // Необходимые инлайн-стили для подсветки при наведении курсора указал в App.css
    )
}

export default Dropdown