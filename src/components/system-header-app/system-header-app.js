import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './system-header-app.css'

class SystemHeaderApp extends Component{
    render(){
        return (
            <header className="header__app">
                 <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="#"><img className="logo__img" src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Logo_Decision_382px.jpg"/></a>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                        <Link className="nav-item nav-link"
                              to={`/decision-making/`}>Принятие решения</Link>
                        <Link className="nav-item nav-link" 
                              to={`/employee/`}>Сотрудники</Link>
                        <a className="nav-item nav-link" href="#">Алгоритмы принятия решений</a>
                        </div>
                    </div>
                    <div className="form-inline">
                        <a href="#">Выход</a>
                    </div>
                </nav>
            </header>
            
        );
    }
}


export default SystemHeaderApp;

/* <nav className="navbar navbar-expend-lg navbar-light bg-light">
                <a href="#" className="navbar-brand">Logo</a>

                <div className="collapse navbar-collapse">
                    <ul className="navber-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link"></a>Принятие решения</li>
                    </ul>
                </div>
                <div className="header__right">
                    <a href="#" className="btn btn-info btn-lg">Logout
                    <span className="glyphicon glyphicon-log-out"></span></a>
                </div>
                </nav>*/