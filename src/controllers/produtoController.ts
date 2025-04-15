import { Request, Response } from "express";
import { criarProduto, listarProdutos, atualizarProduto, deletarProduto, verProduto } from "../services/produtoService";

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
    resposta.status(404).json({erro: "A lista de produtos esta vazia"});
    return;
}

export const listarIndividual = async(requisicao: Request, resposta: Response) => {
    const produtoRetornado = await verProduto(Number(requisicao.params.codigo));
    if(produtoRetornado !== null){
        resposta.status(200).json(produtoRetornado);
        return;
    }
    resposta.status(404).json({erro: "Produto nao encontrado!"});
    return;
}

export const atualizar = async (requisicao: Request, resposta: Response) => {
    const produtoAtualizado = await atualizarProduto(requisicao.body, Number(requisicao.params.codigo));
    if(produtoAtualizado){
        resposta.status(200).json(produtoAtualizado);
        return;
    }
    resposta.status(500).json({erro: "Erro ao atualizar produto"});
    return;
}

export const deletar = async (requisicao: Request, resposta: Response) => {
    const produtoRemovido = await deletarProduto(Number(requisicao.params.codigo));
    if(produtoRemovido){
        resposta.status(200).json(produtoRemovido);
        return;
    }
    resposta.status(500).json({erro: "Erro ao remover produto"});
    return;
}
