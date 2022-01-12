/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store/Store'
import {name as appName} from './app.json';
import Main from './src/Main' 

const Redux =()=>(
    <Provider store={store}>
        <Main/>
    </Provider>
)


AppRegistry.registerComponent(appName, () => Redux);
