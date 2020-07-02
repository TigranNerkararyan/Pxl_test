import React from 'react';

function FooterModal(props) {

    return (
        <footer>
            <h2> Which documnet type is it? </h2>
            <div className="footer-bar">
                <div>
                    <button>Swiss ID</button>
                    <button className="footer-active-btn">Swiss paper permission</button>
                    <button>Avatar</button>
                    <button>Something</button>
                </div>
            </div>
        </footer>
    )
}

export {FooterModal}