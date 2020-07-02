import React from 'react';

function RightSidebar(props) {

    return (
        <div className="right-sidebar">
            <div>
                <h3>Reasons for manual check</h3>
                <ul>
                    <li><i className="fas fa-shield-alt"></i> Face verification failed!</li>
                    <li><i className="fas fa-shield-alt"></i> Liveness failed!</li>
                </ul>
            </div>
        </div>
    )
}

export {RightSidebar}