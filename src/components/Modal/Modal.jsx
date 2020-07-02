import React from 'react';
import {HeaderModal} from './HeaderModal';
import {FooterModal} from './FooterModal';
import {LeftSidebar} from './LeftSidebar';
import {RightSidebar} from './RightSidebar';
import {ContentModal} from './ContentModal';

function Modal(props) {
    const handleonClick = () => {
        props.setShowModal(false);
    }

    return (
        <div className="modal-transaction">
            <section>
                <HeaderModal closeModal={handleonClick} />
            </section>
            <section>
                <LeftSidebar/>
                <ContentModal/>
                <RightSidebar/>
            </section>
            <FooterModal/>
        </div>
    )
}

export {Modal}