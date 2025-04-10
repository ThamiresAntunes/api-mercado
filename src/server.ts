import express, { Request, Response } from 'express';
import routerProduto from './routes/produtoRoutes';

const app = express();

app.use(express.json());
app.use('/api', routerProduto);


const porta = 8080;
app.listen(porta, () => {
    console.log(`Estou rodando na porta ${porta}`);
});

