import React from 'react';
import './grid-element.scss';
import { connect } from 'react-redux';
import { changeRom, changeColor } from '../../actions';


const mapStateToProps = ({phones}, {phoneId}) => {
  const phone = phones.find((phone) => phone.id === phoneId);
  return {
    data: phone,
  }
}

const GridElement = ({ dispatch, data }) => {
  console.log('GridElement');

  const imageSrc = data['color-img'][data.choosenColor].img;
  const name = data.name;
  const price = data['rom-price'][data.choosenRom].price;

  const phoneId = data.id;

  const getRomData = (data) => {
    const romData = [];
    data['rom-price'].map((rp) => {
      romData.push(rp.rom);
    });
    return romData;
  }
  const getColorData = (data) => {
    const colorData = [];
    data['color-img'].map((ci) => {
      colorData.push(ci.rgb);
    });
    return colorData;
  }

  const onChangeRom = (romIndex) => {
    dispatch(changeRom(romIndex, phoneId));
  }
  const onChangeColor = (colorIndex) => {
    dispatch(changeColor(colorIndex, phoneId));
  }

  return (
    <div className="grid-element">
      <img src={imageSrc} />
      <ColorSwitcher picked={data.choosenColor} colors={getColorData(data)} onChangeColor={onChangeColor}/>
      <RomSwitcher picked={data.choosenRom} roms={getRomData(data)} onChangeRom={onChangeRom}/>
      <div className="info">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  )
}

const RomSwitcher = ({roms, picked, onChangeRom}) => {
  console.log('RomSwitcher');
  return (
    <div className="rom-switcher">
      {
        roms.map((el, i) => {
          return (
            <button
              onClick={() => onChangeRom(i)}
              key={i} 
              className={`btn btn${i === picked ? '' : '-outline'}-dark shadow-none btn-sm`}
            >
              {el}
            </button>
          )
        })
      }
    </div>
  )
}

const ColorSwitcher = ({colors, picked, onChangeColor}) => {
  console.log('ColorSwitcher');
  return (
    <div className="color-switcher">
      {
        colors.map((el, i) => {
          return (
            <div 
              onClick={() => onChangeColor(i)}
              className={`color-wrapper ${i === picked ? 'picked' : ''}`} 
              key={i}>
                <div className="color" style={{backgroundColor: el}}></div>
              </div>
          )
        })
      }
    </div>
  )
}


export default connect(mapStateToProps)(GridElement);
