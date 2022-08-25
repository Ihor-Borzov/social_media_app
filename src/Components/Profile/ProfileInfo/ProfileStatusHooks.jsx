import React, { useEffect, useState } from 'react';


const ProfileStatusHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => { setStatus(props.status) }, [props.status])


    let activateEditMode = () => {
        setEditMode(true);
    }

    let deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    let onStatusChange = (e) => {
        setStatus(e.target.value)
    }


    return (

        <div className={setEditMode.status}>
            {!editMode &&
                <span onDoubleClick={activateEditMode}>{props.status ? `Status : ${props.status}` : "-----"}</span>
            }

            {editMode &&
                <input autoFocus={true} value={status} onBlur={deactivateEditMode} onChange={onStatusChange}></input>
            }

        </div>
    )

}



export default ProfileStatusHooks

