import { Component, OnInit } from '@angular/core';

interface Tarjeta{
  titulo: string;
  subtitulo: string;
  image: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MiprimerApp';
  public Arreglotarjetas: Tarjeta[] = []

  ngOnInit(): void {
    this.Arreglotarjetas = [
      {titulo: 'Video 1', subtitulo: 'Subtitulo video 1', image:"https://cdn.akamai.steamstatic.com/steam/apps/1599340/header.jpg?t=1670270556"},
      {titulo: 'Video 2', subtitulo: 'Subtitulo video 2', image:"https://images.ctfassets.net/umhrp0op95v1/ucU2LmeKQdZDv8uqt8GKz/69817657f86042edef6a86987045b2cc/LA_STATIC_OPENGRAPH_600x300.jpg"},
      {titulo: 'Video 3', subtitulo: 'Subtitulo video 3', image:"https://images.ctfassets.net/umhrp0op95v1/1ZN0phT6n06PovBRpQztUS/d37886447ee07f23890619bcc777df3a/LA_ALL_CLASSES_740x420.jpg"},
    ]
  }
}