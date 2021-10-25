/**
 * File: server.js
 * Date: October 25, 2021
 * Author: Abel L Mbula
 */

const app = require('./src/app');

const port = process.env.PORT || 7500;

app.listen(port, () => console.log(`Listening to requests on http://localhost:${port}`));
