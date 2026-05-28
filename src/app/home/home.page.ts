import { Component } from '@angular/core';
import { IonicModule} from '@ionic/angular';
import { MercadoService } from '../services/mercadoService';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule, CommonModule],
})
export class HomePage {
  constructor(public mercado: MercadoService) {
    console.log('Produtos:', this.mercado.produtos);
    console.log('Tarefas:', this.mercado.tarefas);
  }
}
