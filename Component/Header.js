import React from 'react'
import HighlightIcon from '@mui/icons-material/Highlight';
import "./Header.css"

const Header = () => {
    return (
        <div className='header'>
            <div className='header_title'>
                <HighlightIcon />
                <p>Keeper</p>
            </div>
        </div>
    )
}

export default Header