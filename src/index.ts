import express, { Request, Response } from 'express';
import router from './routes';
import cors from 'cors';
import './databases/config/database'

const app = express();
app.use(express.json());
app.use(cors());


app.use("/api", router)



app.listen(9097, () => {
    console.log("Server is running on port 9097");
});
export default app