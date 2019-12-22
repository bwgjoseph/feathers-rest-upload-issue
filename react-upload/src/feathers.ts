import feathers from '@feathersjs/feathers';
import rest from '@feathersjs/rest-client';
// import axios from 'axios';

const app = feathers();
const restClient = rest('http://localhost:3030');

app.configure(restClient.fetch(window.fetch));
// app.configure(restClient.axios(axios));

export default app;
