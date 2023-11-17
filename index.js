import express from "express";
import { connectToDatabase } from "./config/db.js";


connectToDatabase()
const app = express();
const port = 3000

app.get('/users', (req, res) => {
    return res.json({message: 'Users'})
})

app.post('/create-user', (req, res) => {
    return res.json({message: 'Create user'})
})

app.listen(port, () => {
    console.log(`The API is listening on port ${port}`);
});