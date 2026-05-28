import { Injectable } from '@angular/core';
import { Produto } from '../models/produto';
import { Tarefa } from '../models/tarefa';

@Injectable({ providedIn: 'root' })
export class MercadoService {

  produtos: Produto[] = [
    { id: 1, nome: 'Arroz Tipo 1 5kg', preco: 24.9, estoque: 120 },
    { id: 2, nome: 'Feijão Carioca 1kg', preco: 8.49, estoque: 85 },
    { id: 3, nome: 'Leite Integral 1L', preco: 5.99, estoque: 200 },
    { id: 4, nome: 'Óleo de Soja 900ml', preco: 7.29, estoque: 64 },
    { id: 5, nome: 'Café Torrado 500g', preco: 18.75, estoque: 45 },
  ];

  tarefas: Tarefa[] = [
  {
    id: 1,
    titulo: 'Repor gondola de bebidas',
    concluida: false,
    prioridade: 'alta',
    dataCriacao: new Date('2026-05-20'),
  },
  {
    id: 2,
    titulo: 'Conferir validade dos laticinios',
    concluida: true,
    prioridade: 'media',
    dataCriacao: new Date('2026-05-19'),
  },
  {
    id: 3,
    titulo: 'Organizar estoque seco',
    concluida: false,
    prioridade: 'baixa',
    dataCriacao: new Date('2026-05-22'),
  },
  {
    id: 4,
    titulo: 'Atualizar etiquetas de preco',
    concluida: false,
    prioridade: 'alta',
    dataCriacao: new Date('2026-05-23'),
  },
  {
    id: 5,
    titulo: 'Limpar area de caixas',
    concluida: true,
    prioridade: 'baixa',
    dataCriacao: new Date('2026-05-18'),
  },
];




}
