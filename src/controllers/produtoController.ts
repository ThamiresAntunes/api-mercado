import { Request, Response } from "express";
import { criarProduto } from "../services/produtoService";

export const criar = async (requisicao: Request, resposta: Response) => {
    //produto armazena os dados de um produto que foi passado no body da requisicao
    const produto = await criarProduto(requisicao.body);
    if(produto !== null){
        resposta.status(201).json(produto);
        return;
    }
    resposta.status(500).json({erro: "Erro ao salvar produto"});
    return;
}
