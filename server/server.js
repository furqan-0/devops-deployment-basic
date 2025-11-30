// docker run -p 5000:5000 --name backend --env-file .env mern-backend

import express from 'express';

const app = express();

app.listen(5000, () => {
  console.log('server is running on port 3000');
});
