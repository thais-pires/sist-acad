class DisciplinaServico {
    constructor() {
        this.repositorio = new DisciplinaRepositorio();
    }

    inserir(codigo, nome) {
        const disciplina = new Disciplina(codigo, nome);
        if (this.repositorio.buscarPorCodigo(codigo) != codigo) {
            return this.repositorio.inserir(disciplina);
        }
        return undefined;
    }

    remover(codigo) {
        this.repositorio.remover(codigo);
    }

    listar() {
        return this.repositorio.listar();
    }

    buscarPorNome(nome) {
        return this.repositorio.buscarPorNome(nome);
    }

    buscarPorCodigo(codigo) {
        return this.repositorio.buscarPorCodigo(codigo);
    }

    inserirAlunoNaDisciplina(codigo, aluno){
        const disciplina = this.repositorio.buscarPorCodigo(codigo);
        if (disciplina !== undefined) {
            this.repositorio.inserirAlunoNaDisciplina(disciplina, aluno)
        }
    }
}
