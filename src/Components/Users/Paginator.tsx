import React, { useRef } from 'react';
import { useState } from 'react';
import preloadGif from '../../assets/images/loader.gif'
import style from "./Users.module.css"
import UserSearchTab from './UserSearchTab';


type PropsType = {
    portionSize: number,
    totalUsersCount:number, 
    pageSize: number, 
    setCurrentPage:(page:number)=>void,
    currentPage: number, 
    isFetching: boolean, 
    getUsers:(currentPage:number, pageSize:number, isFriend:boolean, term: null|string)=>void,
    setIsFriendAC: (isFriend:boolean) => void, 
    setTermAC: (term:string) => void, 
    term: string, 
    isFriend:null|boolean, 
    isAuth: boolean
}



let Paginator: React.FC<PropsType> = ({ portionSize, totalUsersCount, pageSize, setCurrentPage,
    currentPage, isFetching, getUsers, setIsFriendAC, setTermAC, term, isFriend, isAuth }) => {

        

    let [searchTab, hideOpenSearchTab] = useState(false)
    let paginatorDiv = useRef<HTMLDivElement>(null);   //this is the way to use ref


    let totalPagesCount = Math.ceil(totalUsersCount / pageSize);
    let totalPortionsCount = Math.ceil(totalPagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState (1);  // this is the way to specify a hook
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    let pagesArray : Array<number> = [];
    for (let i = 1; i <= totalPagesCount; i++) {
        pagesArray.push(i);
    }

console.log(portionSize)
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