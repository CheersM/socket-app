import io from 'socket.io-client';

let socket = null;

export const addTicker = (obj) => ({
  type: 'ADD_TICKER',
  payload: obj,
});

export const removeTicker = (obj) => ({
  type: 'REMOVE_TICKER',
  payload: obj,
});

export const startRealTime = (res) => ({
  type: 'CONNECT',
  payload: res,
});

export const stopRealTime = () => ({
  type: 'DISCONNECT',
  payload: false,
  res: socket.close(),
});

export const connect = () => (dispatch) => {
  socket = io.connect('http://localhost:4000');
  socket.emit('start');
  socket.on('ticker', function (response) {
    const res = Array.isArray(response) ? response : [response];
    dispatch(startRealTime(res));
  });
};
