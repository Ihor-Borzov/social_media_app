import React, { useState, useEffect } from "react"
import style from "./Users.module.css"





let UserSearchTab = (props) => {
    /* 
    let [topMargin, setTopMargin] = useState()

    useEffect(() => {
        try{setTopMargin(props.paginatorDiv.current.clientHeight) 
            window.addEventListener('resize', ()=>{setTopMargin(props.paginatorDiv.current.clientHeight)});
    }
        
    catch(e){console.log(props.paginatorDiv)}
        return () => {
            window.removeEventListener('resize', ()=>{setTopMargin(props.paginatorDiv.current.clientHeight)}); }
    }, []) */



    return(
        <div className={style.searchTab}    style={{top:`47px`}}>

        <input placeholder='User name' value={props.term} onClick={(e)=>{e.stopPropagation();}}
        onChange={(e)=>{ props.setTermAC(e.currentTarget.value)}}   ></input>

        <div className={style.searchIsFriend}>
            <label  onClick={(e)=>{e.stopPropagation(); props.hideOpenSearchTab(!props.searchTab); props.setIsFriendAC(null)}} >
                <input  type="radio" name="isFriend" value="isFriend" defaultChecked={props.isFriend==null?true:false} />
                <span>   All</span>
            </label>
            <label  onClick={(e)=>{e.stopPropagation(); props.hideOpenSearchTab(!props.searchTab);  props.setIsFriendAC(true)}} >
                <input type="radio" name="isFriend" value="isFriend" defaultChecked={props.isFriend===true?true:false}/>
                <span>   friends</span>
            </label>
            <label   onClick={(e)=>{e.stopPropagation(); props.hideOpenSearchTab(!props.searchTab);  props.setIsFriendAC(false);}}  >
                <input type="radio" name="isFriend" value="isFriend"  defaultChecked={props.isFriend===false?true:false}/>
                <span>   Not Friends</span>
            </label>
        </div>
    </div>
    )
}





export default UserSearchTab