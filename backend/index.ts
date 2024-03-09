import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/v1/health', (req, res) => {res.status(200).json({health: 'ok'})});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})