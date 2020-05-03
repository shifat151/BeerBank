import config from 'config';
const apiRoot = 'https://api.punkapi.com/v2';

export const beerService = {
   getBeers,
   searchBeers,
   advanceSearchBeers,
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
function advanceSearchBeers(abv_gt, abv_lt, ebc_gt, ebc_lt, ibu_gt, ibu_lt) {


   return fetch(`${apiRoot}/beers?abv_gt=${abv_gt}&abv_lt=${abv_lt}&ebc_gt=${ebc_gt}&
   ebc_lt=${ebc_lt}&ibu_gt=${ibu_gt}&ibu_lt=${ibu_lt}&brewed_before=11-2007`, requestOptions)
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
