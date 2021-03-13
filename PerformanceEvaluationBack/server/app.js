import express from 'express';
import routes from './routes';
import cors from 'cors';
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

routes(app);
app.listen(port, () => console.log('Running on localhost: ' + port));
