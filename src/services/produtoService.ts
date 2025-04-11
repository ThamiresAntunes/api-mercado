import { Produto } from "../models/Produto";
import { prisma } from "../config/cliente-prisma";

export const criarProduto = async (data: Produto) => {

    try{
        return await prisma.produto.create({
            data: {
                nome: data.nome,
                preco: data.preco,
            }
        })
    }
    catch(error){
        console.log(error);
        return null;
    }
}

export const listarProdutos = async () => {
    try{
        return await prisma.produto.findMany();
    }
    catch(error){
        console.log(error);
        return null;
    }
}

export const atualizarProduto = async (data: Produto, codigo: number) => {
    try{
        return await prisma.produto.update({
            where: {
                //colunaDoBanco: informacao obtida pela requisicao
                codigo: codigo
            },
            data: {
                nome: data.nome,
                preco: data.preco, 
            }
        })
    }
    catch(error){
        console.log(error);
        return null;
    }
}

