import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-if';

import { Tarefa } from './tarefa';

class DetalhesTarefa extends PolymerElement{
    // Esse componente tem como unico objetivo exibir os detalhes da tarefa salva
    static get template(){
        return html `
        <template is="dom-if" if="{{tarefaSelecionada}}">
            <div>
            <strong>[[tarefaSelecionada.nome]]</strong>
            <p>[[tarefaSelecionada.detalhes]]</p>
            <p>Concluir até: [[tarefaSelecionada.dataConclusao]]</p>
            </div>
        </template>
        `;
    }

    static get properties(){
        return {
            // essa tarefa é recebida por databinding tbm
            // qualquer alteração no componente principal
            // será refletido aqui
            tarefaSelecionada: {
                type: Tarefa,
                value: null
            }
        }
    }
}

window.customElements.define('detalhes-tarefa', DetalhesTarefa);