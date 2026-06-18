import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { MercadoService } from '../services/mercadoService';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.page.html',
  styleUrls: ['./tarefa.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterModule],
})
export class TarefaPage {

  tituloNovaTarefa = '';
  prioridadeNovaTarefa: 'baixa' | 'media' | 'alta' = 'media';
  filtroAtivo: 'todos' | 'concluidas' | 'pendentes' = 'todos';

  constructor(public mercado: MercadoService) {}

  get tarefasExibidas() {
    if (this.filtroAtivo === 'concluidas') return this.mercado.filtrarTarefas(true);
    if (this.filtroAtivo === 'pendentes')  return this.mercado.filtrarTarefas(false);
    return this.mercado.tarefas;
  }

  adicionarTarefa() {
    if (!this.tituloNovaTarefa.trim()) return;
    this.mercado.adicionarTarefa(this.tituloNovaTarefa, this.prioridadeNovaTarefa);
    this.tituloNovaTarefa = '';
  }

}