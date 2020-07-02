import React from 'react';

function Cell({
    content,
    header,
  }) {

    const manipulateCondition = () => {
        if(content === 'Start new Review') {
          return (
           <button className="review-btn">{content}</button>
          )
        }else if (content === 'Search transaction') {
          return (
            <button className="right-btn"><div><i className="fas fa-search"></i></div><div>{content}</div></button>
           )
        }else if (content === 'Swich to dataset') {
          return (
            <button className="right-btn"><div><i className="fas fa-external-link-alt"></i></div><div>{content}</div></button>
           )
        } else if(content === 'reject'){
          return (
            <span style={{color: "#c33658"}}>{content}</span>
           )
        }else if(content === 'verified' || content === 'user retry'){
          return (
            <span style={{color: "#008000e3"}}>{content}</span>
           )
        }


      return content;

    }

    const cellMarkup = header ? (
        <th className="Cell Cell-header">
          {content}
        </th>
      ) : (
        <td className="Cell">
          {manipulateCondition()}
        </td>
      );
      return (cellMarkup);
}

export {Cell}