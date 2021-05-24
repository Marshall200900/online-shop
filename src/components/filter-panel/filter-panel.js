import React, { useState } from 'react';
import './filter-panel.scss';
import { connect } from 'react-redux';
import { setMaxPrice, setMinPrice, setDefaultFilters } from '../../actions';


const FilterPanel = ({ minPrice, maxPrice, dispatch }) => {

  
  // slideStop
  console.log('FilterPanel')
  return (
    <div className="filter-panel">
      <label className="form-label">Цена от: {minPrice} руб</label>
      <input 
        type="range"
        onChange={(e) => dispatch(setMinPrice(e.target.value))} 
        value={minPrice}
        min="0"
        max="150000"
        className="form-range" ></input>
      <label className="form-label">Цена до: {maxPrice} руб</label>
      <input 
        type="range"
        onChange={(e) => dispatch(setMaxPrice(e.target.value))} 
        value={maxPrice}
        min="0"
        max="150000"
        className="form-range" ></input>
      <div className="btns-row">
        <button onClick={() => dispatch(setDefaultFilters())} className="btn btn-outline-dark button-apply">Сброс</button>
        <button className="btn btn-dark button-apply">Применить</button>
      </div>
    </div>
  )
}

const mapStateToProps = ({filters: {minPrice, maxPrice}}) => {
  return {
    minPrice,
    maxPrice
  }
}


export default connect(mapStateToProps)(FilterPanel);