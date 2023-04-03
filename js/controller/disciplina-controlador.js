class DisciplinaControlador {
    constructor() {
        this.disciplinaServico = new DisciplinaServico();
    }

    inserir() {
        const codigoDisciplina = Number(document.querySelector("#codigo").value);
        const nomeDisciplina = document.querySelector("#nome").value;
        const disciplina = this.disciplinaServico.inserir(codigoDisciplina, nomeDisciplina);
        if (disciplina) {
            this.mostrarDisciplinaNoHTML(codigoDisciplina, nomeDisciplina);
            alert('Disciplina inserida com sucesso!');
        } else {
            alert('ERRO! Essa disciplina não existe.');
        }
    }

    mostrarDisciplinaNoHTML(nome, codigo) {
        const elementoP = document.createElement("p");
        elementoP.textContent = `${nome} - ${codigo}`;

        const elementoBotaoApagar = document.createElement("button");
        elementoBotaoApagar.textContent = "X";

        elementoBotaoApagar.addEventListener('click', (event) => {
                this.removerDisciplinaDaLista(codigo);
                event.target.parentElement.remove();
            }
        );
        elementoP.appendChild(elementoBotaoApagar);
        document.body.appendChild(elementoP);
    }

    removerDisciplinaDaLista(codigo) {
        this.disciplinaServico.remover(codigo);
    }

}