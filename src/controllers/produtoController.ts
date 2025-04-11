import { Request, Response } from "express";
import { criarProduto, listarProdutos } from "../services/produtoService";

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

export const listar = async (requisicao: Request, resposta: Response) => {
    const lista = await listarProdutos();
    if(lista !== null){
        resposta.status(200).json(lista);
        return;
    }
    resposta.status(404).json({erro: "lista de produtos esta vazia"});
    return;
}

