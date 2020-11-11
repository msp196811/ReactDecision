import Axios from "axios";

const employeesLoaded = ( newEmployees ) => {
    return {
        type: 'EMPLOYEES_LOADED',
        payload: newEmployees
    };
};


const employeeRequested = () => {
    return {
        type: 'EMPLOYEE_REQUESTED'
    }
}

export const onChekedItem = (ItemId) => {
    return{
        type: 'ON_CHECKED_ITEM',
        payload: ItemId
    }
}

export const onCreateArrayChecked = () => {
    return{
        type: 'ON_CREATE_ARRAY_CHEKED'
    }
}
export const onClickModal = (employee) => {
    return{
        type: 'ON_CLICK_MODAL',
        payload: employee
    }
}

export const updateEmployeeSubmit = (employee) => {
    Axios.put(`http://127.0.0.1:8000/django/${employee.id}/`, employee)
    return{
        type: 'UPDATE_EMPLOYEE_SUBMIT',
        payload: employee
    }
}



const decisionsLoaded = ( newDecisions ) => {
    return {
        type: 'DECISIONS_LOADED',
        payload: newDecisions
    };
};


const decisionRequested = () => {
    return {
        type: 'DECISION_REQUESTED'
    }
}

const coeficientsLoaded = (newCoeficients) => {
    return {
        type: 'COEFICIENTS_LOADED',
        payload: newCoeficients
    }
}


const coeficientsRequested = () => {
    return{
        type: 'COEFICIENTS_REQUESTED'
    }
}
const onClickDecision = (decision) => {
    return {
        type: 'ON_CLICK_DECISION',
        payload: decision
    }
}
export {
    employeesLoaded,
    employeeRequested,
    decisionsLoaded,
    decisionRequested,
    onClickDecision,
    coeficientsLoaded,
    coeficientsRequested
}