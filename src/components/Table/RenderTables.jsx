import React from 'react';
import {headings,headings2,rows, rows2,rows3} from '../../config/config';
import {TableComponent} from './TableComponent';

function RenderTables() {
    return (
        <React.Fragment>
            <section>
                <TableComponent title="Open new transactions" headings={[]} rows={rows3} />
                <TableComponent className="color-row" title="Your active transaction" headings={headings} rows={rows} />
                <TableComponent modal={true} title="History" headings={headings2} rows={rows2} />
            </section>
        </React.Fragment>
    )

}

export {RenderTables}