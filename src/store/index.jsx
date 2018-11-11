/**
 * @Author: wuke
 * @Date: 2018/11/3
 * @Last Modified by: wuke
 * @Last Modified time: 2018/11/3
 */

'use strict';
import *as React from 'react';
import {createStore} from 'redux'
import reducer from '../reducer/reducer.jsx';

const store = createStore(reducer);

export default store;