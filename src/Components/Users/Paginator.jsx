import React, { useRef } from 'react';
import { useState } from 'react';
import preloadGif from '../../assets/images/loader.gif'
import style from "./Users.module.css"
import UserSearchTab from './UserSearchTab';


let Paginator = ({ portionSize, totalUsersCount, pageSize, setCurrentPage,
    currentPage, isFetching, getUsers, setIsFriendAC, setTermAC, term, isFriend, isAuth }) => {









        

    let [searchTab, hideOpenSearchTab] = useState(false)
    let paginatorDiv = useRef();


    let totalPagesCount = Math.ceil(totalUsersCount / pageSize);
    let totalPortionsCount = Math.ceil(totalPagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    let pagesArray = [];
    for (let i = 1; i <= totalPagesCount; i++) {
        pagesArray.push(i);
    }


    return (
        <div className={style.paginator} ref={paginatorDiv}>
            <div className={style.pageNumbers}>
                {portionNumber > 1 &&
                    <button className={style.buttonPrev} onClick={() => { setPortionNumber(portionNumber - 1) }} ></button>}


                {pagesArray.filter((page) => { return (page >= leftPortionPageNumber && page <= rightPortionPageNumber) }).map(
                    (page) => {
                        return <span key={page}
                            onClick={(e) => { setCurrentPage(page) }}
                            className={currentPage === page ? style.activePage : style.notActivePage}>
                            {isFetching && currentPage === page ? <img src={preloadGif} alt="preloader" ></img> : page}
                        </span>
                    })
                }

                {portionNumber < totalPortionsCount &&
                    <button className={style.buttonNext} onClick={() => { setPortionNumber(portionNumber + 1) }} ></button>}

            </div>



{/* <div className={style.searchDescription}>{isFriend && "Friends"}</div> */}


            <div className={style.userSearchButton}  onClick={()=>{hideOpenSearchTab(!searchTab)}} ></div> 

{searchTab && 
<UserSearchTab
getUsers = {getUsers}
pageSize = {pageSize}
currentPage={currentPage}
setIsFriendAC = {setIsFriendAC}
setTermAC = {setTermAC}
term = {term}
searchTab = {searchTab}
hideOpenSearchTab = {hideOpenSearchTab}
isFriend={isFriend}
paginatorDiv={paginatorDiv}
isAuth = {isAuth}
/>
}

 

        </div>
    )
}


export default Paginator