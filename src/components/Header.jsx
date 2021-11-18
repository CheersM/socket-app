import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connect, stopRealTime } from '../redux/action';

function Header() {
  const dispatch = useDispatch();
  const isActive = useSelector((state) => state.payload);

  const handleDisconnect = () => {
    dispatch(stopRealTime());
  };

  const handleConnect = () => {
    dispatch(connect());
  };
  return (
    <header>
      <div className="logo">
        <img width={30} height={30} src="/img/growth.png" alt="logo" />
        <p>The best real time app ever</p>
      </div>
      {isActive ? (
        <span onClick={handleDisconnect}>
          STOP REAL
          <br /> TIME MAGIC
        </span>
      ) : (
        <span onClick={handleConnect}>
          START REAL
          <br /> TIME MAGIC
        </span>
      )}
    </header>
  );
}

export default Header;
