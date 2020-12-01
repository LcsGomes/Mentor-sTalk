import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {  MentorsService } from 'src/app/services/mentors.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  public noticias = [
    {
      Titulo:'update Final',
      Sub:'Versão 3.0',
      Descricao:'App Funcional e pronto para a entrega 3',
      Att:'Att,',
      Ass: 'Grupo10'
    },
    {
      Titulo:'Update',
      Sub:'Version 1.0',
      Descricao:'Atualização 1.0, Inclusão das paginas News, Agenda, Catalago, Detail, App e melhoria da perfomance',
      Att:'Att,',
      Ass: 'Grupo10'
    }  
  ]  

  public mentores = this.mentorsService.mentores.filter(function(t){return t.novo == true;})



  public favoritos = this.mentorsService.Favoritos;  


  public addFavoritos(id: number){
    this.mentorsService.addlistFavorito(id)
  }
   
  

  constructor( private mentorsService: MentorsService ) { }

  ngOnInit() {
  }

}
