import {html, PolymerElement} from '@polymer/polymer/polymer-element';

import {Tarefa} from './tarefa';

class FormTarefa extends PolymerElement{

    static get template(){
        return html `
        <form action="#">
            <div>
                <label for="nomeTarefa">Tarefa: </label>
                <input type="text" id="nomeTarefa" value="{{novaTarefa.nome::input}}">
            </div>

            <div>
                <label for="detalhes">Detalhes: </label>
                <textarea cols="50" rows="4" id="detalhes" value="{{novaTarefa.detalhes::input}}"></textarea> 
            </div>

            <div>
                <label for="dataConclusao">Data conclusão: </label>
                <input type="date" id="dataConclusao" value="{{novaTarefa.dataConclusao::change}}">
            </div>

            <button on-click="_adicionarTarefa">Adicionar Tarefa</button>
        </form>
        `;
    }

    //método que adiciona a tarefa no array
    _adicionarTarefa(){
        // deve se usar os métodos do Polymer, para que todas as mudanças sejam replicadas na tela
        this.push('tarefas', this.get('novaTarefa'));
        // após adicionar a tarefa na lista, substitui a tarefa temporaria por uma vazia
        this.set('novaTarefa', new Tarefa());
    }

    static get properties() {
        return {
            // a lista de tarefas na qual estou adicionando as novas
            // esta lista está ligada a do componente principal por meio de two-way-databinding
            // ou seja qualquer alteração aqui, refletirá no componente principal e também no componente de listar tarefas
          tarefas: {
            type: Array,
            value: [],
          },
          // tarefa temporária para armazenar os dados que serão inseridos no array
          novaTarefa: {
            type: Tarefa,
            value: new Tarefa()
          }
        };
    }
}

window.customElements.define('form-tarefa', FormTarefa);
