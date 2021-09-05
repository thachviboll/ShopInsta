import express from 'express';
import data from './data';

const app = express();

app.get("/api/items/:id", (req, res) => {
    const itemId = req.params.id;
    const item = data.items.find(x=>x._id === itemId);
    if(item)
        res.send(item);
    else 
        res.status(404).send({msg: "Product Not Found"})
});

app.get("/api/items", (req, res) => {

    res.send(data.items);
});

app.listen(5000, () => {console.log("Server started at http://localhost:5000")});