import React, { Component } from "react";
import {
      Button,
      Modal,
      ModalHeader,
      ModalBody,
      ModalFooter,
      Form,
      FormGroup,
      Input,
      Label
    } from "reactstrap";
import { connect } from 'react-redux'
import { onClickModal,updateEmployeeSubmit } from '../../actions'

class EditModal extends Component {

      render() {
        
        let { employee, onClickModal, updateEmployeeSubmit } = this.props;
       
        const handleChange = (e) => {
          let { name, value} = e.target;
          employee = { ...employee, [name]: value};
          return employee;
        }

        //const handleSubmit = ()

        /* if(employee.id){
          fetch('',{
            method: 'PUT',
            body: employee
          })
        }*/
        return (
          <Modal isOpen={true} toggle={() => onClickModal()}>
            <ModalHeader toggle={ () => onClickModal()}> Изменение информации о сотруднике </ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup>
                  <Input
                    type="text"
                    name="sername"
                    defaultValue={employee.sername}
                    onChange={(e) => handleChange(e)}
                    placeholder="Введите фамилию"
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="text"
                    name="name"
                    defaultValue={employee.name}
                    onChange={(e) => handleChange(e)}
                    placeholder="Введите имя"
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="text"
                    name="lastName"
                    defaultValue={employee.lastName}
                    onChange={(e) => handleChange(e)}
                    placeholder="Введите отчество"
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="text"
                    name="url"
                    defaultValue={employee.photo}
                    onChange={(e) => handleChange(e)}
                    placeholder="Введите отчество"
                  />
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="success" onClick={() => updateEmployeeSubmit(employee)}>
                Save
              </Button>
            </ModalFooter>
          </Modal>
        );
      }
    }


const mapStateToProps = ({ modal, updateEmployee }) => {
      return {
        modal: modal,
        employee: updateEmployee
      };
    }

const mapDispathToProps = (dispatch) => {
      return {
        onClickModal: () => dispatch(onClickModal()),
        updateEmployeeSubmit: (employee) => dispatch(updateEmployeeSubmit(employee))
      };
}
export default connect(mapStateToProps,mapDispathToProps)(EditModal);