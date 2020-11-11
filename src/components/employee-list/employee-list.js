import React, { Component } from 'react';
import EmployeeListItem from '../employee-list-item'
import { connect } from 'react-redux';
import { withEmployeestoreService } from '../hoc'
import {employeesLoaded, employeeRequested} from '../../actions'
import Spiner from '../spinner'
import Modal from '../modal/modal'
import './employee-list.css'

class EmployeeList extends Component{

    componentDidMount(){
        const { employeestoreService, employeesLoaded, employeeRequested } = this.props;
        employeeRequested();//показывает лоадинг индикатор
        employeestoreService.getEmployees() // после чего загружаем данные
               .then((data) => employeesLoaded(data));
    }

    render(){
        const renderRow = (employee,idx) => {
            return(
                    <tr  key={idx} ><EmployeeListItem employee={employee} /></tr>
            );
        }
        const { employee, loading, filterEmployee, modal} = this.props;
        
        if(modal){
           return <Modal />
        }
        if(loading){
            return <Spiner />
        }
        if(filterEmployee.length !== 0){
            return (
                <table className="table">
                    <thead>
                        <tr>
                            <td>Фото</td>
                            <td>Инициалы</td>
                            <td>Возраст</td>          
                        </tr>
                    </thead>
                    <tbody>
                            {
                                 filterEmployee.map(renderRow)
                            }
                    </tbody>
                </table>
            )
        }
        return (
            <table className="table">
                <thead>
                        <tr>
                            <td>Фото</td>
                            <td>Инициалы</td>
                            <td>Возраст</td>   
                            <td></td> 
                            <td></td>      
                        </tr>
                    </thead>
                    <tbody className="table__body">
                        {
                            employee.map(renderRow)
                        }
                    </tbody>
            </table>
        );
    }
}


const mapStateToProps = ({ employee,loading,checkedArray, modal}) => {
    return { 
        employee:employee,
        loading: loading,
        filterEmployee:checkedArray  ,
        modal
    };
}


const mapDispatchToProps = {
    employeesLoaded,
    employeeRequested
};
export default withEmployeestoreService()(connect(mapStateToProps,mapDispatchToProps)(EmployeeList));