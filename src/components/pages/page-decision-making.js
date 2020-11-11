import React, { Component } from 'react'
import DecisionMaking from '../decision-making'
import './page-decision-making.css'
export default class PageDecisionMaking extends Component{
    render(){
        return(
            <div className="section_decision">
                <DecisionMaking />
            </div>
        );
    }
}