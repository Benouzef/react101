import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('calls OMDB APIs without crashing and returns a list of Batman movies', () => {
  return axios.get('http://www.omdbapi.com/?s=batman&apikey=9c520eb1').then(
    res => {
      expect(res.data.Search.length).toBeGreaterThan(0);
    }
  )
});

it('calls OMDB APIs without crashing and returns Batman Begins movie', () => {
  return axios.get('http://www.omdbapi.com/?i=tt0372784&apikey=9c520eb1').then(
    res => {
      expect(res.data.Title).toBe('Batman Begins');
      expect(res.data.Year).toBe('2005');
    }
  )
});
