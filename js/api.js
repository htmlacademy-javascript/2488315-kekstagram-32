
const BASE_URL = 'https://32.javascript.htmlacademy.pro/kekstagram';
const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};
const Method = {
  GET: 'GET',
  POST: 'POST',
};

const load = (route, method = Method.GET, body = null) =>
  fetch(`${BASE_URL}${route}`, { method, body })
    .then((response) => {

      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);

      }
      return response.json();
    })

    .catch((err) => {
      throw new Error(err.message);
    });

const getData = () => load(Route.GET_DATA);
const sendData = (body) =>
  load(Route.SEND_DATA, Method.POST, body);


/*const sendData = (onSuccess, onError, data) => {
  fetch(
    (`${BASE_URL}${route}`, { method, body }),
    {
      method: 'POST',
      body: data,
    },
  ).then((response) => {
    console.log('123');
    if (!response.ok){
      throw new Error('123');
    }
    onSuccess();
  });
};

export { getData, sendData };
/*const getData = () => {
  fetch('https://32.javascript.htmlacademy.pro/kekstagram/data')
    .then((response) => response.json())
    .then((pictures) => {
      renderThumbnails(pictures);
    })
    .then(() => {
      showFilters();
    })
    .catch(() => {
      showDataError();
    });
};

const sendForm = (onSucces, onError, data) => {
  fetch(
    'https://32.javascript.htmlacademy.pro/kekstagram',
    {
      method: 'POST',
      body: data,
    },
  ).then((response) => {
    console.log('123');
    if (!response.ok){
      throw new Error('123');
    }
    onSucces();
  })
    .catch(() => {
      onError();
    });
};*/


export { getData, sendData };
