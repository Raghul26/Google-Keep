import React from 'react'
import Delete from '@mui/icons-material/Delete';
import "../Component/Header.css"

const Note = (props) => {
    function handleclick() {
        props.ondelete(props.id);
    }
    return (
        <div className='worknotescontent'>
           <div className='worknotes'>
           <p className='worknotes_p'>{props.title}</p>
            <p className='worknotes_p1'>{props.content}</p>
            <div className='deletebtn'>
                <Delete onClick={handleclick} className="deletebutton" />
            </div>
           </div>
        </div>
    )
}
export default Note