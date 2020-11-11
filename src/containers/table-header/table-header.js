import React from 'react'

const TableHeader = ({ dataHead }) => {
    return (
        <thead>
            <tr>
                {
                    dataHead.map((data, index) => <th key={index}>{ data }</th>)
                }
            </tr>
        </thead>
    );
}
export default TableHeader;