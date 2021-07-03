import React from 'react';
import FilterPanel from '../../components/filter-panel';
import PhonesGrid from '../../components/phones-grid';
import SortPanel from '../../components/sort-panel';

const Home = () => {
  return (
    <div className="outer-container">
      <div className="inner-container">
        <SortPanel />
        <div className="site-container">
          <FilterPanel />
          <PhonesGrid />
        </div>
      </div>
    </div>
  )
}

export default Home;