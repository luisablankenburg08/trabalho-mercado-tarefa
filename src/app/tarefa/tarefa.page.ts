import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Tarefa } from '../models/tarefa';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.page.html',
  styleUrls: ['./tarefa.page.scss'],
  standalone: true,
  imports: [FormsModule, IonicModule, CommonModule],
})
export class TarefaPage implements OnInit {

  tituloNovaTarefa = ''
  prioridadeNovaTarefa = ''

  constructor() { }

  ngOnInit() {
  }

  listaTarefas: Tarefa[] = [
    {
      id: 1, titulo: 'Limpar casa', concluida: false,
      prioridade: 'baixa', dataCriacao: new Date()
    },
    {
      id: 2, titulo: 'Lavar louça', concluida: true,
      prioridade: 'alta', dataCriacao: new Date()
    },
    {
      id: 3,
      titulo: 'Preparar aula',
      concluida: false,
      prioridade: 'media',
      dataCriacao: new Date()
    },
    {
      id: 4,
      titulo: 'Estudar', concluida: false, prioridade: 'media',
      dataCriacao: new Date()
    },
    {
      id: 5,
      titulo: 'Ir ao mercado',
      concluida: true, prioridade: 'media', dataCriacao: new Date()
    }
  ]

    filtrarTarefas(status: boolean){
    let novaListaFiltrada = this.listaTarefas.filter(
      tarefaAtual => tarefaAtual.concluida == status
    )
    return novaListaFiltrada
  }

  contarPrioridade(){
    let totalBaixas = 0;
    let totalMedias = 0;
    let totalAltas = 0;

    this.listaTarefas.forEach(
      tarefaAtual => {
        if(tarefaAtual.prioridade == 'baixa'){
          totalBaixas += 1
        }else if(tarefaAtual.prioridade == 'media'){
          totalMedias += 1
        }else{
          totalAltas += 1
        }
      }
    )
    return {
        'baixas': totalBaixas,
        'medias': totalMedias,
        'altas': totalAltas
      }
  }


}

