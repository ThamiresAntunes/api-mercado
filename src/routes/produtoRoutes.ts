import { Router } from "express";
import { criar, listar, atualizar, deletar } from "../controllers/produtoController";

const routerProduto = Router();

routerProduto.post('/criarProduto', criar);
routerProduto.get('/listarProdutos', listar);
routerProduto.put('/atualizarProduto/:codigo', atualizar);
routerProduto.delete('/deletarProduto/:codigo', deletar);

export default routerProduto;
