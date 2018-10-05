import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import './detalhes-tarefa';
import './lista-tarefas';
import './form-tarefa';

import { Tarefa } from './tarefa';

class PolymerTodoListApp extends PolymerElement {
  static get template() {
    return html `
      <style>
        :host {
          display: block;
        }
      </style>

      <div style="border: solid red 1px;">
        <h5>Lista de tarefas</h5>
        <!-- incializo o componente, fazendo o two-way-databinding da propriedade tarefas deste componente
          com a propriedade de mesmo nome no componente lista-tarefas -->
        <lista-tarefas tarefas="{{tarefas}}" id="lista"></lista-tarefas>
      </div>


      <div style="border: solid blue 1px; margin: 10px 0; padding: 5px;">
        <h5>Form adicionar tarefa</h5>
        <!-- incializo o componente, fazendo o two-way-databinding da propriedade tarefas deste componente
          com a propriedade de mesmo nome no componente form-tarefas -->
        <form-tarefa tarefas="{{tarefas}}" ></form-tarefa>
      </div>

      <div style="border: solid green 1px;">
        <h5>Detalhes da tarefa selecionada</h5>
        <!-- incializo o componente, fazendo o two-way-databinding da propriedade tarefaSelecionada deste componente
          com a propriedade de mesmo nome no componente detalhes-tarefa -->
        <detalhes-tarefa tarefa-selecionada="{{tarefaSelecionada}}"></detalhes-tarefa>
      </div>
    `;
  }

  static get properties() {
    return {
      // lista de tarefas que serão exibidas/adicionadas
      tarefas: {
        type: Array,
        value: [],
      },
      // tarefa selecionada, que terá seus detalhes exibidos na parte de baixo
      tarefaSelecionada: {
        type: Tarefa,
        value: null
      }
    };
  }
  
  // método executado assim que o componente estiver OK
  ready(){
    // chama o metodo ready do componente base
    super.ready();

    // escuta o evento customizado e seleciona a tarefa enviada pelo evento
    this.$.lista.addEventListener('tarefaSelecionada', evento => {
      // atribui a tarefa que veio com o evento na propriedade 'tarefaSelecionada'
      this.set('tarefaSelecionada', evento.detail);
    });
  }
}

window.customElements.define('polymer-todo-list-app', PolymerTodoListApp);
