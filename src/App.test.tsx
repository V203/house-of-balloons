import Services from './Services';

import App from './App';

import ApiService from "./ApiService/ApiService"

test('renders learn react link', async () => {
  let serv = ApiService()

let res = [
  {
    color: 'red',
    count: '0',
    basecolor: '#d92323ed',
    subsurface: '530202de'
  },
  {
    color: 'yellow',
    count: '0',
    basecolor: '#d9be23ed',
    subsurface: '#534b02de'
  },
  {
    color: 'green',
    count: '0',
    basecolor: '#216f0b45',
    subsurface: '#26d923ed'
  },
  {
    color: 'blue',
    count: '0',
    basecolor: '#0b7dbaed',
    subsurface: '#023753de'
  },
  {
    color: 'pink',
    count: '0',
    basecolor: '#bb23d9ed',
    subsurface: '#510f80de'
  }
]

  expect( await serv.getAllColors()).toEqual(res)
});
