import React, {useState} from 'react';
import {Modal} from '../Modal/Modal';
import {Cell} from './Cell';

function TableComponent(props) {
    const {headings, rows} = props;
    const [showModal, setShowModal] = useState(false)

    const renderHeadingRow = (cell, cellIndex) => {
        return (
          <Cell
            key={`heading-${cellIndex}`}
            content={props.headings[cellIndex]}
            header={true}
          />
        )
      };

      const hendlerOnClick = () => {
        setShowModal(true);
      }

      const renderRow = (row, rowIndex) => {
        return (
          <tr onClick={hendlerOnClick} key={`row-${rowIndex}`}>
            {props.rows[rowIndex].map((cell, cellIndex) => {
              return (
                <Cell
                  key={`${rowIndex}-${cellIndex}`}
                  content={rows[rowIndex][cellIndex]}
                />
              )
            })}
          </tr>
        )
      };

      const theadMarkup = (
        <tr key="heading">
          {headings.map(renderHeadingRow)}
        </tr>
      );
      const tbodyMarkup = rows.map(renderRow);

    return (
        <section className="table-container">
            {props.className ? <div className="search-table"><h2 className="title-tables">{props.title} </h2> <div><input type="text" placeholder="any columns" /><i className="fas fa-search"></i></div></div> : <h2 className="title-tables">{props.title}</h2>}
            <table className={`rwd-table ${props.className ? props.className : ''}`}>
                <thead>
                    {theadMarkup}
                </thead>
                <tbody>
                    {tbodyMarkup}
                </tbody>
            </table>
        {showModal && props.modal && <Modal setShowModal={setShowModal} />}
        </section>
    )

}

export {TableComponent}