import {html, PolymerElement} from '@polymer/polymer/polymer-element';
import '@polymer/polymer/lib/elements/dom-repeat.js';

class ListaTarefas extends PolymerElement{

    static get template(){
        return html `
        <ul class="col-sm-6">
            <template is="dom-repeat" items="{{tarefas}}">
                <li on-click="_selecionarTarefa">[[item.nome]]</li>
            </template>
        </ul>
        `;
    }

    // método que seleciona a tarefa e dispara um evento
    // que será capturado no componente principal
    _selecionarTarefa(evento){
        // primeiro pega a ultima tarefa selecionada
        let ultimaTarefaSelecionada = this.get('tarefaSelecionada');
        // depois pega a tarefa que o usuário acabou de clicar
        let tarefaSelecionada = evento.model.get('item');
    
        // se ambas forem iguais
        if(ultimaTarefaSelecionada === tarefaSelecionada){
            // envia uma tarefa nula com o evento, o que deseleciona a tarefa
            this.dispatchEvent(new CustomEvent('tarefaSelecionada', { detail: null}));
        } else {
            // senão envia a nova tarefa selecionada
            this.dispatchEvent(new CustomEvent('tarefaSelecionada', { detail: tarefaSelecionada}));
        }
    }

    static get properties(){
        return {
            // Essa é a lista de tarefas que é recebida por two-way-databinding
            tarefas: {
                type: Array,
                value: [],
            }
        };
    }
}

window.customElements.define('lista-tarefas', ListaTarefas);