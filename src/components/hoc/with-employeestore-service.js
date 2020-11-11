import React from 'react';
import { EmployeestoreServiceConsumer } from '../employeestore-service-context'
const withEmployeestoreService = () => (Wrapped) => {

    return (props) => {
        return(
        <EmployeestoreServiceConsumer>
            {
                (employeestoreService) => {
                   return( <Wrapped {...props} 
                                employeestoreService = {employeestoreService}/>);
            }
            }
        </EmployeestoreServiceConsumer>
        );
    }
};

export default withEmployeestoreService;