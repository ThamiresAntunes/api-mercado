import { Router } from "express";
import { criar, listar, atualizar } from "../controllers/produtoController";

const routerProduto = Router();

routerProduto.post('/criarProduto', criar);
routerProduto.get('/listarProdutos', listar);
routerProduto.put('/atualizarProduto/:codigo', atualizar);


export default routerProduto;
