import { Router } from "express";
import { criar, listar } from "../controllers/produtoController";

const routerProduto = Router();

routerProduto.post('/criarProduto', criar);
routerProduto.get('/listarProdutos', listar);


export default routerProduto;
