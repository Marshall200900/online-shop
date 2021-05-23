import React from 'react';
import './phones-grid.scss';
import GridElement from '../grid-element';
import withPhonesService from '../../hoc/with-phones-store-service';

const PhonesGrid = ({phonesService}) => {
  const phonesList = phonesService.getAllPhonesData().phones;
  
  return (
    <div className="phones-grid">
      {
        phonesList.map((ph, idx) => <GridElement data={ph} key={idx}/>)
      }
    </div>
  )
}

export default withPhonesService(PhonesGrid);
