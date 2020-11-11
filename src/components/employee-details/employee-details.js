import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withEmployeestoreService } from '../hoc'
import {employeesLoaded, employeeRequested} from '../../actions'
import Spinner from '../spinner'

import './employee-details.css'

class EmployeeDetails extends Component{

    componentDidMount(){
        const { id, employeestoreService, employeesLoaded, employeeRequested } = this.props;
        employeeRequested();
        employeestoreService.getEmployee(id) // после чего загружаем данные
               .then((data) => employeesLoaded(data));
    }
    render(){
        const { employee, loading} = this.props;
        
        if(loading){
            return <Spinner />
        }
        console.log(employee)
        return(
            <div className="employee__detail">
                <div className="employee__img">
                    <img className="avatar" src={employee.photo} />
                </div>
                <div className="employee__description">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>Фамилия</td>
                                <td>{employee.sername}</td>
                            </tr>
                            <tr>
                                <td>Имя</td>
                                <td>{employee.name}</td>
                            </tr>
                            <tr>
                                <td>Отчество</td>
                                <td>{employee.lastName}</td>
                            </tr>
                            <tr>
                                <td>Возраст</td>
                                <td>{employee.age}</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>    
        );
    }
}


const mapStateToProps = ({employee, loading}) => {
    return{
        employee: employee,
        loading: loading
    }
}

const mapDispatchToProps = {
    employeesLoaded,
    employeeRequested
};
export default withEmployeestoreService()(connect(mapStateToProps,mapDispatchToProps)(EmployeeDetails));