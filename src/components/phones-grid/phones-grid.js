import React from 'react';
import './phones-grid.scss';
import GridElement from '../grid-element';
import withPhonesService from '../../hoc/with-phones-store-service';
import { loadPhones } from '../../actions';
import { connect } from 'react-redux';

class PhonesGrid extends React.Component{
  
  componentDidMount() {
    this.props.dispatch(loadPhones(this.props.phonesService.getAllPhonesData().phones));
  }

  filterPhones = (phones, filterParams) => {
    const {minPrice, maxPrice} = filterParams;
    const newPhones = phones.filter((ph) => (ph['rom-price'][0].price >= minPrice) && (ph['rom-price'][0].price <= maxPrice));
  
    return newPhones
  }
  sortPhones = (phones, ascending) => {
    return [...phones].sort((a, b) => (a['rom-price'][a.choosenRom].price < b['rom-price'][b.choosenRom].price) ? -1 + !ascending*2 : -1 + ascending*2);
  }
  

  render() {
    const {phones, filters, sortAscending} = this.props;
    
    const filteredPhones = this.filterPhones(phones, filters);
    const sortedPhones = this.sortPhones(filteredPhones, sortAscending)

    let result;

    if(sortedPhones.length === 0) {
      result = <div className="nocontent-label">Настройте параметры фильтрации для отображения</div>
    }
    else {
      result = <div className="phones-grid">{sortedPhones.map((ph, idx) => <GridElement phoneId={ph.id} key={idx}/>)}</div>
    }
    // TODO: починить разметку, при 2 смартфонах и меньше
    return (
      <div className="content-wrap">
        {result}
      </div>
    )
  }
}

const mapStateToProps = ({phones, filters, sortAscending}) => {
  return {
    phones, filters, sortAscending
  }
}




export default connect(mapStateToProps)(withPhonesService(PhonesGrid));
