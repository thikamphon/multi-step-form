import React from "react";
import imgThanks from '../assets/images/icon-thank-you.svg'
import '../assets/css/Thanks.css'

function Thanks() {
    return (
        <div className="thanks">
            <img src={imgThanks} alt="" />
            <h2>Thank you!</h2>
            <p>Thanks for confirming your subscription! We hope you have fun
                using our platform. If you ever need support, please feel free
                to email us at support@loremgaming.com.</p>
        </div>
    )
}
export default Thanks