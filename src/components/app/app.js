import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom'
import { PageEmployee, PageDecisionMaking, PageEmployeeDetails } from '../pages'
import SystemHeaderApp from '../system-header-app'
import './app.css'

const App = () => {
  return (
    <main role="main"> 
     <SystemHeaderApp />
      <Switch>
      <Route 
          path="/employee"
          component={PageEmployee} 
          exact/>

      <Route
          path="/decision-making"
          component={PageDecisionMaking}
          exact />   

      <Route
          path="/employee/:id"
          component={PageEmployeeDetails}
          exact />   
    </Switch>
    </main>
  );
}

export default App;
/*
export default class App extends Component {
  state = {
    employee:  [
      {
          id:1,
          name: "Ivan",
          sername: "1"
      },
      {
          id:2,
          name: "Ivan2",
          sername: "2"
      },
      {
          id:3,
          name: "Ivan3",
          sername: "3"
      }
    ]
  }

  onEditEmployee = (e) => {
    /*const index = this.state.employee.findIndex((el) => el.id === id);
    const newEmployee = this.state.employee[index];
    console.log(newEmployee);
  
    
   
    console.log(e.parentNode.parentNode);
  }
  onDeleteEmployee = (id) => {
    console.log(id.target);
    this.setState(({ employee }) => {
      const index = employee.findIndex((el) => el.id === id);
      
      const before = employee.slice(0,index);
      const after = employee.slice(index+1);
      
      const newArray = [...before, ...after];

      return{
        employee: newArray
      };
    });
  }
  onButtonClick(e){
    console.log(e.target);
  }
  render(){
    return (
      <div className="App">
        <Employee 
            employee={ this.state.employee} 
            onEdit = { this.onEditEmployee} 
            onDelete = { this.onDeleteEmployee}/>
        <div><button onClick={this.onButtonClick}>Click</button></div>
      </div>
    );
  }
}
*/


