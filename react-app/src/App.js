import React,{Component} from 'react';

import {Provider} from 'react-redux'
import store from './store/index'

import {BrowserRouter} from 'react-router-dom'
import router from './router/router'
import RouterView from './router/RouterView'

class App extends Component{
    render(){
        return (
           <Provider store={store}>
              <BrowserRouter>
              <RouterView routes={router.routes}></RouterView>
              </BrowserRouter>
           </Provider>
        )
    }
}

export default App;

