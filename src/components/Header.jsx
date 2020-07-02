import React from "react";
import Logo from "../assets/images/Asset-220x.png";

function Header() {
    return (
        <header>
            <div id="pxl-logo">
                <img src={Logo} alt="PXL_check" />
            </div>
            <div id="pxl-header-center-menu"><i className="fas fa-bars"></i></div>
            <div id="right-bar">
                <div>Notifications <i className="fas fa-comment-alt"><span>2</span></i></div>
                <div><i className="fas fa-user"></i></div>
                <div><i className="fas fa-ellipsis-v"></i></div>
            </div>
        </header>
    );
}

export {Header}