import { Router } from "express";
import { criar } from "../controllers/produtoController";

const routerProduto = Router();

routerProduto.post('/criarProduto', criar);

export default routerProduto;
