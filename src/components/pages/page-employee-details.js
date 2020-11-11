import React, { Component } from 'react'
import EmployeeDetails from '../employee-details'
import './page-employee-details.css'

export default class PageEmployeeDetails extends Component{
    render(){
        return(
            <div className="section__employee__detail">
                <div className="employee__details__title">
                    <h2>Информация о сотруднике</h2>
                </div>
                    <EmployeeDetails id={this.props.match.params.id}/>
            </div>
        );
    }
}