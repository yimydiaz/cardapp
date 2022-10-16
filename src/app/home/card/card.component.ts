import { Component, OnInit } from '@angular/core';
import { Tarjeta } from 'src/app/models/tarjeta';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  tarjetas: Tarjeta[] | undefined;

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.loadTarjetas();
  }

  loadTarjetas() {
    this.cardService.getListTarjetas().subscribe(
      (response) => {
        
        this.tarjetas = response.resultado;
        console.log(this.tarjetas);
      });
  }
}
