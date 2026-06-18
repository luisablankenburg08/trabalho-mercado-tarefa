import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MercadoService } from '../services/mercadoService';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule, FormsModule],
})
export class HomePage {

  nomeNovoProduto = '';
  precoNovoProduto: number | null = null;
  estoqueNovoProduto: number | null = null;

  constructor(public mercado: MercadoService) {}

  adicionarProduto() {
    if (!this.nomeNovoProduto || !this.precoNovoProduto || !this.estoqueNovoProduto) return;
    this.mercado.adicionarProduto(this.nomeNovoProduto, this.precoNovoProduto, this.estoqueNovoProduto);
    this.nomeNovoProduto = '';
    this.precoNovoProduto = null;
    this.estoqueNovoProduto = null;
  }

}