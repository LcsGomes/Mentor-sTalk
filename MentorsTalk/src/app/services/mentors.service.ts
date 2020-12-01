import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage} from '@ionic/storage';

export interface Mentor{
  id:number ,
  Nome:string , 
  IdadeUf:string ,
  Imagem:string  , 
  Desc:string ,
  Linguagem:string, 
  liked:boolean,
  sobre:string,
  imgsobre:string,
  UltimaExp:string, 
  Cargo:string,
  Empresa: string, 
  novo: boolean, 
  Likes: number,
}


@Injectable({
  providedIn: 'root'
})
export class MentorsService {

  constructor (private storage: Storage) {
   this.loadFavoritos();
   this.loadMentores();
   this.loadAgenda();
  }

  private StoreMentores(){
    this.storage.set('mentors', this.mentores);
  }

  private StoreFavoritos(){
    this.storage.set('fav', this.Favoritos);
  }

  
  private StoreAgenda(){
    this.storage.set('Agenda', this.Agenda);
  }

  private async loadFavoritos(){
    const loadedfavoritos = await this.storage.get('fav') ?? [];
    this.Favoritos.push(...loadedfavoritos)

  }

  public async loadMentores(){
    // const loadedMentors = await this.storage.get('mentors') ?? [];
    const loadedMentors = await this.http.get<Mentor[]>('http://localhost:3333/mentor').toPromise()
    console.log(loadedMentors)
    this.mentores.push(...loadedMentors)

  }

  private async loadAgenda(){
    // const loadedAgenda = await this.storage.get('Agenda') ?? [];
    const loadedAgenda = await this.http.get<any[]>('http://localhost:3333/agenda').toPromise()
    this.Agenda.push(...loadedAgenda)

  } 

  public mentores: Mentor[] = [];
  public Favoritos = [];
  public Agenda = [];


  public addlistFavorito (id: number) {    
    const index = this.mentores.findIndex(function (t){
      return t.id == id;
    });  
    
    if(this.mentores[index].liked == false)  
    {
      this.mentores[index].liked = true;
      this.Favoritos.push(this.mentores[index])
    }
    else
    {
      this.mentores[index].liked = false;  
      const index2  = this.Favoritos.findIndex(function (t){
        return t.id == id;
      });  
      this.Favoritos.splice(index2,1)
    }
    this.StoreMentores();
    this.StoreFavoritos();
  }
  
  public addLike (id: number) { 
      const index = this.mentores.findIndex(function (t){
      return t.id == id;
    }); 
    this.mentores[index].Likes = this.mentores[index].Likes +1
    this.StoreMentores();
  }

  public async addAgenda(id: string,nome: string, Linguagem:string , date: string)
  { 
    const newAgenda = {
      nameMonitor: nome,
      title: Linguagem,
      date: date      
    }
    await this.http.post('http://localhost:3333/agenda', newAgenda).toPromise()
    this.Agenda.push(newAgenda)
    this.StoreAgenda();
  }

  public async removeAgenda(id: string)
  {  
      const index  = this.Agenda.findIndex(function (t){
        return t.id == id;
      });  
      const agendaForDelete = this.Agenda[index]
      await this.http.delete(`http://localhost:3333/agenda/${agendaForDelete._id}`).toPromise()
      // console.log('agenda para deletar:', agendaForDelete)
      this.Agenda.splice(index,1)
      this.StoreAgenda();
  } 
}
