import React from 'react';
import CheckImage from "../../assets/images/secondImage.jpg";

function ContentModal(props) {

    return (
        <div className="content-images">
            <h2>Check the contributed images.</h2>
            <div>
                <div>
                    <img src={CheckImage} alt="images name"/>
                </div>
                <div className="childe-container">
                    <span className="arrow left-arrow">  </span>
                    <span className="arrow right-arrow"> </span>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li><img src={CheckImage} alt="images name"/></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export {ContentModal}