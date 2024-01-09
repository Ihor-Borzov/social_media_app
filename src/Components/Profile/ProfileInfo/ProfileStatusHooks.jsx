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

        <div>
{props.isOwner?
<>
            {!editMode &&
                <span onClick={activateEditMode}>{props.status ? `Status : ${props.status}` : "-----"}</span>
            }

            {editMode &&
                <textarea autoFocus={true} value={status} onBlur={deactivateEditMode} onChange={onStatusChange}></textarea>
            }
</>
        :   <span>{props.status ? `Status : ${props.status}` : "-----"}</span>

        }

        </div>
    )

}



export default ProfileStatusHooks

