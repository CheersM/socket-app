import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { DeleteOutlined } from '@ant-design/icons';

import Header from '../components/Header';
import Button from '../components/Button';
import { removeTicker } from '../redux/action';

function MyTickers() {
  const dispatch = useDispatch();
  const tickers = useSelector((obj) => obj.addedTickers);

  const onRemoveItem = (ticker) => {
    if (window.confirm('Are you sure you want to delete this ticker?')) {
      dispatch(removeTicker(ticker));
    }
  };

  return (
    <div className="wrapper">
      <Header />
      <Link to="/">
        <Button>
          <span>Back to the homepage</span>
        </Button>
      </Link>
      <div className="content">
        {tickers?.map((item, index) => (
          <div key={index} className="content__card">
            <span className="ticker-name" style={{ backgroundColor: item?.color }}>
              {item?.ticker}
            </span>
            <div className="card-block">
              <p>Price:</p>
              <span>
                <img
                  width={17}
                  height={17}
                  src={item?.change_percent > 0 ? '/img/arrow-up.png' : '/img/arrow-down.png'}
                  alt="arrow"
                />
                {item?.price}$
              </span>
            </div>
            <div className="card-block">
              <p>Change:</p> <span>{item?.change}$</span>
            </div>
            <div className="card-block">
              <p>Change percent:</p> <span>{item?.change_percent}%</span>
            </div>
            <div className="card-block">
              <p>Dividend:</p> <span>{item?.dividend}%</span>
            </div>
            <div className="card-block">
              <p>Yield:</p> <span>{item?.yield}%</span>
            </div>
            <div className="card-block">
              <p>Exchange:</p> <span>{item?.exchange}</span>
            </div>
            <div className="added" onClick={() => onRemoveItem(item?.ticker)}>
              <span>
                <DeleteOutlined />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyTickers;
