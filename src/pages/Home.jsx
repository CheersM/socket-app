import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../components/Card';
import Header from '../components/Header';
import Button from '../components/Button';

function Home() {
  const dispatch = useDispatch();
  const { tickers } = useSelector((obj) => obj);
  const viewList = useSelector((obj) => obj.addedTickers);

  const handleAddMyTicker = (obj) => {
    dispatch({
      type: 'ADD_TICKER',
      payload: obj,
    });
  };

  return (
    <div className="wrapper">
      <Header />
      <Link to="/my-tickers">
        <Button>
          <span>View List ({viewList?.length})</span>
        </Button>
      </Link>
      <h2>Most popular promotions</h2>
      <div className="content">
        {tickers &&
          tickers?.map((item, index) => (
            <Card key={index} data={item} onClickAddTicker={handleAddMyTicker} />
          ))}
      </div>
    </div>
  );
}

export default Home;
