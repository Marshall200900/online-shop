import React from 'react';
import './app.scss';
import Navbar from '../navbar';
import FilterPanel from '../filter-panel';
import PhonesGrid from '../phones-grid';
import SortPanel from '../sort-panel';

const App = () => {
    return (
        <div className="app">
          <Navbar />
          <div className="outer-container">
            <div className="inner-container">
              <SortPanel />
              <div className="site-container">
                <FilterPanel />
                <PhonesGrid />
              </div>
            </div>
          </div>
          
        </div>
    )
}

export default  App;