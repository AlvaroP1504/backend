import express from "express";
import cors from 'cors'

import { data,data_detail } from "./db/data.js";
import { PORT } from "./ports.js";

const app = express();
app.use(cors())

app.disable('x-powered-by');


app.get('/books', (req, res) => {
    res.json(data);
});

app.get('/books/details/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const book = data_detail.find(book => book.id === bookId);
  
    if (!book) {
      res.status(404).json({ error: 'Libro no encontrado' });
    } else {
      res.json(book);
    }
  });

app.listen(PORT, err => {
    if (err) {
        console.error("Error escuchando: ", err);
        return;
    }
    console.log(`Escuchando en el puerto: ${PORT}`);
});



