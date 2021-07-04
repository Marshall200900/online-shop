import React from 'react';
import FilterPanel from '../../components/filter-panel';
import PhonesGrid from '../../components/phones-grid';
import SortPanel from '../../components/sort-panel';
import { connect } from 'react-redux';
import './home.scss';

const Home = ({ phones }) => {
  return (
    <div className="outer-container">
      <div className="inner-container">
        <SortPanel />
        <div className="site-container">
          <FilterPanel />
          <PhonesGrid phones={phones}/>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = ({ phones }) => {
  return {
    phones
  }
}

export default connect(mapStateToProps)(Home);