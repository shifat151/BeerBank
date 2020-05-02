import config from 'config';
const apiRoot = 'https://api.punkapi.com/v2';

export const beerService = {
   getBeers,
   searchBeers
};

const requestOptions = {
   method: 'GET'
};

function getBeers() {
   return fetch(`${apiRoot}/beers`, requestOptions)
      .then(handleGetResposne)
      .then(res => {
         return res;
      });
}

function searchBeers(search) {
   return fetch(`${apiRoot}/beers?beer_name=${search}`, requestOptions)
      .then(handleGetResposne)
      .then(res => {
         return res;
      });
}


function handleGetResposne(response) {
   return response.text().then(text => {
      const data = text && JSON.parse(text);
      return data;
   });
}
