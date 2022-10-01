import React from 'react'
import preloadGif from '../../../assets/images/loader.gif'
import s from './Preloader.module.css'

let Preloader = (props) => {

    return (
        <div className={s.imgWrap}>
            <img src={preloadGif} alt="preloader" ></img>
        </div>
    )
}

export default Preloader