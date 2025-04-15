import { Router } from "express";
import { criar, listar, atualizar, deletar, listarIndividual } from "../controllers/produtoController";

const routerProduto = Router();

routerProduto.post('/criarProduto', criar);
routerProduto.get('/listarProdutos', listar);
routerProduto.patch('/listarIndividual/:codigo', listarIndividual);
routerProduto.put('/atualizarProduto/:codigo', atualizar);
routerProduto.delete('/deletarProduto/:codigo', deletar);

export default routerProduto;
