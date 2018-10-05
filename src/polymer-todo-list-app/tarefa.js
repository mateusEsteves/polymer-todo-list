export class Tarefa {
    constructor(nome, dataConclusao, detalhes){
        this.id = Math.random().toString(32).split('.')[1];
        this.nome = nome;
        this.dataConclusao = dataConclusao;
        this.detalhes = detalhes;
    }
}