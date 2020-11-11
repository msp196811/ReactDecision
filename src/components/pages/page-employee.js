import React, { Component } from 'react'
import  EmployeeList  from '../employee-list/employee-list'
import CheckBox from '../checkbox'
import './page-employee.css'


export default class PageEmployee extends Component{
    render(){
        return(
            <div className="section__employee">
                <div className="employee__title">
                    <h2>Список сотрудников фирмы</h2>
                </div>
                <div className="employee__list">
                    <CheckBox />
                    <EmployeeList />
                </div>
            </div>       

        );
    }
}