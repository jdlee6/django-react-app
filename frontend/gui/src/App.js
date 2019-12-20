import React from 'react';
import 'antd/dist/antd.css';
import CustomLayout from './containers/Layout';
import BaseRouter from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <CustomLayout>
            <BaseRouter />
          </CustomLayout>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
