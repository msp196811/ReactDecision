import React from 'react'

const EmployeeBody = ({name,sername}) => {
    return(
        <>
            <td>{name}</td>
            <td>{sername}</td>
            <td><button
                    onClick= {(id) => console.log(id)}>Edit</button></td>
        </>
    )
}


export default EmployeeBody;