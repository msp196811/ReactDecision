import React, { Component } from 'react'
import { connect } from 'react-redux';
import { onChekedItem, onCreateArrayChecked } from '../../actions'
import './checkbox.css'

const CheckBox = ({ items, onChangeBox, onClickChangeBox}) => {
  const renderRow = (item,idx) => {
    const { id, label } = item;
    return (
          <li key={idx} className="custom-control custom-checkbox overflow-auto">
          <input 
              type="checkbox" 
              className="custom-control-input"
              id={id} onChange={() => onChangeBox(item.id)} /> 
          <label 
              htmlFor = {id}
              className="custom-control-label">{label}</label>
          </li>
    );
  };

  return (
    <div className="checkbox__container mg-t 100">
      <div className="checkbox__1">
        <h4 className="checkbox__title">Навыки</h4>
        <nav className="checkbox__list">
          <ul className="list-group">
          { items.map(renderRow) }
          </ul>
        </nav>
        <button className="btn btn-primary btn-sm btn_checkbox"
            onClick={() => onClickChangeBox()}>Поиск</button>
      </div>
      <div className="checkbox__2">
      <h4 className="checkbox__title">Возраст</h4>
      <form className="form__age">
  <div className="row">
    <div className="col">
      <input type="text" className="form-control" placeholder="от" />
    </div>
    <div className="col">
      <input type="text" className="form-control" placeholder="до" />
    </div>
  </div>
</form>
      <button className="btn btn-primary btn-sm btn_checkbox"
          onClick={() => onClickChangeBox()}>Поиск</button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ checkbox}) => {
  return {
    items: checkbox
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeBox: (id) => dispatch(onChekedItem(id)),
    onClickChangeBox: () => dispatch(onCreateArrayChecked())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckBox);