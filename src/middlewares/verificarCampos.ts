import { Request, Response, NextFunction } from 'express';

export const verificarCampo = async (requisicao: Request, resposta: Response, next: NextFunction) => {
    const { nome, preco } = requisicao.body;
    if(nome == '' || preco == ''){
        resposta.status(400).json({"Atenção": "Preencha todos os campos"});
        return;
    }
    next();
}  