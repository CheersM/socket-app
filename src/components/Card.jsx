import React from 'react';
import { useSelector } from 'react-redux';
import { FileAddOutlined, FileDoneOutlined } from '@ant-design/icons';

function Card({ data, onClickAddTicker }) {
  const tickers = useSelector((obj) => obj.addedTickers);

  const isItemAdded = (ticker) => {
    return tickers.some((item) => item.ticker === ticker);
  };

  const onAddTicker = () => {
    onClickAddTicker(data);
  };

  return (
    <div className="content__card">
      <span className="ticker-name" style={{ backgroundColor: data.color }}>
        {data.ticker}
      </span>
      <div className="card-block">
        <p>Price:</p>
        <span>
          <img
            width={17}
            height={17}
            src={data.change_percent > 0 ? '/img/arrow-up.png' : '/img/arrow-down.png'}
            alt="arrow"
          />
          {data.price}$
        </span>
      </div>
      <div className="card-block">
        <p>Change:</p> <span>{data.change}$</span>
      </div>
      <div className="card-block">
        <p>Change percent:</p> <span>{data.change_percent}%</span>
      </div>
      <div className="card-block">
        <p>Dividend:</p> <span>{data.dividend}%</span>
      </div>
      <div className="card-block">
        <p>Yield:</p> <span>{data.yield}%</span>
      </div>
      <div className="card-block">
        <p>Exchange:</p> <span>{data.exchange}</span>
      </div>
      <div className="added" onClick={onAddTicker}>
        <span>{isItemAdded(data.ticker) ? <FileDoneOutlined /> : <FileAddOutlined />}</span>
      </div>
    </div>
  );
}

export default Card;
