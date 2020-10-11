import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  public Mentoresnovos = [
    {
      id:1,
      Nome:'Ana Maria',
      Cargo:'Cientista de Dados'
    },
    {
      id:2,
      Nome:'Adriana Gomes',
      Cargo:'Desenvolvedor Full Stack'
    },
    {
      id:3,
      Nome:'Luisa Lopes',
      Cargo:'Programador C#'
    },
    {
      id:4,
      Nome:'Tayna Oliveira',
      Cargo:'Scrum Master'
    },
    {
      id:5,
      Nome:'Tamires Santos',
      Cargo:'Desenvolvedora de Apps'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
