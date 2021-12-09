import React from 'react';
import s from "./Post.module.css";




function Post (props){
    return(
<div className={s.item}>
    <div className={s.pick}>
    <img src="https://partycity6.scene7.com/is/image/PartyCity/_pdp_sq_?$_500x500_$&$product=PartyCity/P880795"/>
    </div>

<div className={s.receivedText}>
{props.message}                      {/* this is the way we use JavaScript in JSX language, you required to put it in curled brackets */}
</div>
<div><span>LIKE</span></div>



</div>
    )
}

export default Post