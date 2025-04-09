import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());


const porta = 8080;
app.listen(porta, () => {
    console.log(`Estou rodando na porta ${porta}`);
});

