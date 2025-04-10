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


