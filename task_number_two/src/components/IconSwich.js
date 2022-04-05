import React from 'react';


const IconSwich = ({ icon, onSwich }) => {
    return (
        <header className="header">
            <span className="material-icons" onClick={onSwich}>{icon}</span>
        </header>
    )
}

export default IconSwich