import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  public image: string ="https://images.ctfassets.net/umhrp0op95v1/ucU2LmeKQdZDv8uqt8GKz/69817657f86042edef6a86987045b2cc/LA_STATIC_OPENGRAPH_600x300.jpg";
  public Titulo: string ="Curso de Angular con interpolacion";
}
