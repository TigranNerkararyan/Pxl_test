import React from 'react';

function HeaderModal (props) {

    return (
        <header className="header-modal">
            <div className="left-bar">
                <span>Transaction (TID): </span>
                <span>167257286423</span>
                <span><i className="far fa-copy"></i></span>
            </div>
            <div className="center-bar">
                <div>
                    <button>Quick check</button>
                    <button className="active-btn">Files</button>
                    <button>Face</button>
                    <button>Data</button>
                </div>
                <div>
                    <button>Fraud check</button>
                    <button>Data check</button>
                </div>
            </div>
            <div className="right-bar">
                <span>Status: </span>
                <button>In review</button>
                <div onClick={props.closeModal}>
                    <i className="fas fa-times"></i>
                    <div></div>
                </div>
            </div>
        </header>
    )

}

export {HeaderModal}