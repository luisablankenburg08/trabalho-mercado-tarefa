import { Injectable } from '@angular/core';
import { Produto } from '../models/produto';
import { Tarefa } from '../models/tarefa';

@Injectable({ providedIn: 'root' })
export class MercadoService {

  produtos: Produto[] = [
    { id: 1, nome: 'Arroz Tipo 1 5kg',    preco: 24.90, estoque: 120 },
    { id: 2, nome: 'Feijão Carioca 1kg',  preco: 8.49,  estoque: 85  },
    { id: 3, nome: 'Leite Integral 1L',   preco: 5.99,  estoque: 200 },
    { id: 4, nome: 'Óleo de Soja 900ml',  preco: 7.29,  estoque: 3   },
    { id: 5, nome: 'Café Torrado 500g',   preco: 18.75, estoque: 45  },
  ];

  tarefas: Tarefa[] = [
    { id: 1, titulo: 'Repor gondola de bebidas',      concluida: false, prioridade: 'alta',  dataCriacao: new Date('2026-05-20') },
    { id: 2, titulo: 'Conferir validade dos laticínios', concluida: true,  prioridade: 'media', dataCriacao: new Date('2026-05-19') },
    { id: 3, titulo: 'Organizar estoque seco',            concluida: false, prioridade: 'baixa', dataCriacao: new Date('2026-05-22') },
    { id: 4, titulo: 'Atualizar etiquetas de preço',      concluida: false, prioridade: 'alta',  dataCriacao: new Date('2026-05-23') },
    { id: 5, titulo: 'Limpar área de caixas',            concluida: true,  prioridade: 'baixa', dataCriacao: new Date('2026-05-18') },
  ];

  formatarPreco(preco: number): string {
    return preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  calcularTotalEstoque(): number {
    return this.produtos.reduce((total, p) => total + p.preco * p.estoque, 0);
  }

  filtrarTarefas(concluida: boolean): Tarefa[] {
    return this.tarefas.filter(t => t.concluida === concluida);
  }

  contarPorPrioridade() {
    return {
      altas:  this.tarefas.filter(t => t.prioridade === 'alta').length,
      medias: this.tarefas.filter(t => t.prioridade === 'media').length,
      baixas: this.tarefas.filter(t => t.prioridade === 'baixa').length,
    };
  }

  adicionarProduto(nome: string, preco: number, estoque: number) {
    const novoProduto: Produto = {
      id: this.produtos.length + 1,
      nome, preco, estoque
    };
    this.produtos.push(novoProduto);
  }

  adicionarTarefa(titulo: string, prioridade: 'baixa' | 'media' | 'alta') {
    const novaTarefa: Tarefa = {
      id: this.tarefas.length + 1,
      titulo,
      concluida: false,
      prioridade,
      dataCriacao: new Date()
    };
    this.tarefas.push(novaTarefa);
  }

  marcarConcluida(id: number) {
    const tarefa = this.tarefas.find(t => t.id === id);
    if (tarefa) tarefa.concluida = !tarefa.concluida;
  }

  ordenarPorPrioridade() {
    const peso: Record<string, number> = { alta: 3, media: 2, baixa: 1 };
    this.tarefas.sort((a, b) => peso[b.prioridade] - peso[a.prioridade]);
  }

}