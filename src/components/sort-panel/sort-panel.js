import React, { useState } from 'react';
import './sort-panel.scss';
import { connect } from 'react-redux';
import { changeSorting } from '../../actions';
class SortPanel extends React.Component {

  state = {
    choosenValue: '',
    dropdownValue: '',
  }

  constructor(props) {
    super(props);
    
    this.initValues();

  }

  initValues = () => {
    const { sortAscending } = this.props;
    if (sortAscending) {
      this.state = {
        choosenValue: 'Сначала дешевле',
        dropdownValue: 'Сначала дороже',
      };
    }
    else {
      this.state = {
        choosenValue: 'Сначала дороже',
        dropdownValue: 'Сначала дешевле',
      };
    }
  }

  render(){
    const { sortAscending } = this.props;
    const { choosenValue, dropdownValue } = this.state;
    console.log('render');
    return (
      <div className="sort-panel">
        <div className="dropdown">
          <button 
            className="btn btn-outline-dark dropdown-toggle shadow-none" 
            id="dropDownButtonSortBy"
            data-bs-toggle="dropdown" aria-expanded="false"
            type="button"
          >
            {choosenValue}
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropDownButtonSortBy">
            <li>
              <button className="dropdown-item"
                onClick={() => {
                  this.setState(({choosenValue, dropdownValue}) => {
                    return {
                      choosenValue: dropdownValue,
                      dropdownValue: choosenValue,
                    }
                  })
                  this.props.dispatch(changeSorting(!sortAscending))
                }}
              >{dropdownValue}</button></li>
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({sortAscending}) => {
  return {
    sortAscending
  }
}

export default connect(mapStateToProps)(SortPanel);
