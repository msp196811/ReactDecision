import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { onClickModal } from '../../actions'

import './employee-list-item.css'

const EmployeeListItem = ({ employee, onClickModal }) =>  {
    const { id,sername,name,lastName, skils, photo ,age} = employee;
    return (
        <>
            <td><img className="cover__img" src={photo} /></td>
            <td><Link 
                    className="link__people"
                    to={`/employee/${id}`}> {sername} {name} {lastName} </Link></td>
            <td>{age}</td>
            <td><i 
                      className="fa fa-pencil"
                      aria-hidden="true"
                      onClick={() => onClickModal(employee)}></i></td>
            <td><i className="fa fa-trash red" aria-hidden="true"></i></td>
        </>
    );
}

const mapStateToProps = ({ modal }) => {
    return {
        modal: modal
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickModal: (employee) => dispatch(onClickModal(employee))
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(EmployeeListItem);