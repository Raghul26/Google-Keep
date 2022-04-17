import React, { useState } from 'react'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';
import "../Component/Header.css";


const Createarea = (props) => {
    const [isexpanded, setisexpanded] = useState(false);
    const [notes, setnotes] = useState({
        title: "",
        content: ""
    })
    function handelchange(event) {
        const name = event.target.name;
        const value = event.target.value;

        setnotes((prevnotes) => {
            return {
                ...prevnotes,
                [name]: value
            }
        })
    }
    function notesubmite(){
        props.onadd(notes);
        setnotes({
            title: "",
            content: ""
        })
    }
    return (
        <div>
            <form className='inputarea'>
                {isexpanded ? <input name='title' placeholder='Title' className='input' onChange={handelchange} value={notes.title} /> : null}
                <textarea placeholder='Take Notes...' name='content' className='input' onClick={() => setisexpanded(true)} onChange={handelchange} value={notes.content} />
                <div className='addbutton'>
                    <Zoom in={isexpanded}>
                        <Fab onClick={notesubmite} className="addbtn">
                            <AddIcon />
                        </Fab>
                    </Zoom>
                </div>
            </form>
        </div>
    )
}

export default Createarea