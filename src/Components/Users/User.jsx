import React from 'react';
import { NavLink } from 'react-router-dom';
import userThumbnail from '../../assets/images/user.jpg';
import style from "./Users.module.css";



let User = ({ user, following_unfollowingIds, unfollow, follow, isAuth }) => {

    return (
        <div className={style.ussers_container}>
            <div className={style.usser_icon}>
                <div className={style.wrapper__for_AspectRatio}>
                    <div className={style.imgAspectRatio_wrapper}>
                        <div className={style.img_wrapper}>
                            <NavLink to={"/profile/" + user.id}>
                                <img src={user.photos.large ? user.photos.large : userThumbnail} alt="avatar" />   {/* if there is a photo use that photo if not use aa photo from import */}
                            </NavLink>
                        </div>
                    </div>
                    <div className={style.button_wrapper}> 
                    {isAuth && <div>
                        {user.followed
                            ? <button disabled={following_unfollowingIds.some((id) => { return (id === user.id) })} onClick={() => {
                                unfollow(user.id);
                            }}>   Unfollow  </button>



                            : <button disabled={following_unfollowingIds.some((id) => { return (id === user.id) })} onClick={() => {
                                follow(user.id);
                            }}> Follow </button>
                        }
                        </div>}
                    </div>
                </div>
            </div>

            <div className={style.user_info}>
                <div className={style.name_and_status}>
                    <div className={style.name}>{user.name}</div>
                    <div className={style.status}>{user.status ? user.status : "I am lazy and do not have a status"}</div>

                </div>
                <div className={style.country_and_city}>
                    <div className={style.country}>{"user.location.country"}</div>
                    <div className={style.city}>{"user.location.city"}</div>
                </div>
            </div>

        </div>

    )

}


export default User
