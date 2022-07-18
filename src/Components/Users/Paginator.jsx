import React from 'react';
import style from "./Users.module.css"


let Paginator=({totalUsersCount, pageSize, setCurrentPage, currentPage})=>{

    let totalPagesCount= Math.ceil(totalUsersCount/pageSize);

    let pagesArray=[];
    for(let i=1; i<=totalPagesCount;i++){
        pagesArray.push(i);
    }

return(
    <div className={style.pageNumbers}>
    {pagesArray.map((page)=>{
        return <span
         onClick={(e)=>{setCurrentPage(page)}} 
        className={currentPage===page ? style.activePage : style.notActivePage}>  {`${page}. `} 
         </span>
    })
    }
    </div> 
)
}


export default Paginator