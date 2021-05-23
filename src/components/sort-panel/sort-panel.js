import React, { useState } from 'react';
import './sort-panel.scss';

class SortPanel extends React.Component {

  state = {
    choosenValue: 'Сначала дороже',
    dropdownValue: 'Сначала дешевле',

  }

  render(){
    const { choosenValue, dropdownValue } = this.state;
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
                onClick={() => this.setState(({choosenValue, dropdownValue}) => {
                  return {
                    choosenValue: dropdownValue,
                    dropdownValue: choosenValue
                  }
                })}
              >{dropdownValue}</button></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default SortPanel;
