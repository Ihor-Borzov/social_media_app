import React from 'react';
import { useState } from 'react';
import style from "./Users.module.css"


let Paginator=({portionSize,totalUsersCount, pageSize, setCurrentPage, currentPage})=>{

    let totalPagesCount= Math.ceil(totalUsersCount/pageSize);
    let totalPortionsCount = Math.ceil(totalPagesCount/portionSize);
    let [portionNumber, setPortionNumber]=useState(1);
    let leftPortionPageNumber = (portionNumber-1)*portionSize+1
    let rightPortionPageNumber = portionNumber*portionSize

    let pagesArray=[];
    for(let i=1; i<=totalPagesCount;i++){
        pagesArray.push(i);
    }






return(
    <div className={style.pageNumbers}>
{portionNumber>1 &&
<button className={style.buttonPrev}  onClick={()=>{setPortionNumber(portionNumber-1)}} >Prev</button>}



{pagesArray.filter((page)=>{return(page>=leftPortionPageNumber && page<=rightPortionPageNumber)}).map(
    (page)=>{return <span
         onClick={(e)=>{setCurrentPage(page)}} 
        className={currentPage===page ? style.activePage : style.notActivePage}>  {`${page}. `} 
         </span>
    })
    }





{portionNumber< totalPortionsCount &&
<button className={style.buttonNext} onClick={()=>{setPortionNumber(portionNumber+1)}} >Next</button>}

    </div> 
)
}


export default Paginator