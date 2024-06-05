import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {

  //get current global state
  const { currency, dispatch } = useContext(AppContext);

  //state hook update our component
  const [curCur, setcurCur] = useState(false);

  //update currency in global state
  const setCurrencyHandler = (currency) => {
    dispatch({
      type: 'CHG_CURRENCY',
      payload: currency,
    });
  };


  
  const currentCurrency = ()=> {
    switch(currency){
      case '$' :
        return '$ Dollar'
      case '£' :
        return '£ Pound'
      case '€' :
        return '€ Euro'
      case '₹' :
        return '₹ Ruppee'
      default:
        return ''
    }
  }

  return (
    <div id="currency-menu" className="dropdown" style={{ cursor: 'pointer' }}>
      <button
        id="currency-menu-button"
        className="btn dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{ backgroundColor: '#d1e7dd', color: '#ffffff' }}
        onClick={() => setcurCur(!curCur)}
      >
        Currency {'('}{currentCurrency()}{')'}
      </button>
      <ul className={`custom-menu dropdown-menu ${curCur ? 'show' : ''} `}>
        <li>
          <button
            className="dropdown-item"
            type="button"
            onClick={() => setCurrencyHandler('$')}
          >
           $ Dollar
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            type="button"
            onClick={() => setCurrencyHandler('£')}
          >
           £ Pound
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            type="button"
            onClick={() => setCurrencyHandler('€')}
          >
           € Euro
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            type="button"
            onClick={() => setCurrencyHandler('₹')}
          >
           ₹ Ruppee
          </button>
        </li>
      </ul>
    </div>
  );
};
export default Currency;