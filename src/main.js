import './stylesheets/main.scss';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import data from './constants/data'
import AnimalsSection from './components/AnimalsSection';

ReactDOM.render(
  <AnimalsSection animals = {data} />, document.getElementById('app')
);
