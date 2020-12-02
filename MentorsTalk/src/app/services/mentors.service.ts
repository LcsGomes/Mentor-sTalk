import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage} from '@ionic/storage';

export interface Mentor{
  _id: string,
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
  Likado: boolean
}

@Injectable({
  providedIn: 'root'
})
export class MentorsService {

  constructor (private storage: Storage, private http: HttpClient) {
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
    // const loadedfavoritos = await this.storage.get('fav') ?? [];
    const respFavApi = await this.http.get<any[]>('https://mentortalkapi.herokuapp.com/favorito').toPromise()
    // console.log('loadFavoritos', loadedfavoritos, respFavApi)
    this.Favoritos.push(...respFavApi)

  }

  public async loadMentores(){
    // const loadedMentors = await this.storage.get('mentors') ?? [];
    const loadedMentors = await this.http.get<Mentor[]>('https://mentortalkapi.herokuapp.com/mentor').toPromise()
    console.log(loadedMentors)
    this.mentores.push(...loadedMentors)

  }

  private async loadAgenda(){
    // const loadedAgenda = await this.storage.get('Agenda') ?? [];
    const loadedAgenda = await this.http.get<any[]>('https://mentortalkapi.herokuapp.com/agenda').toPromise()
    this.Agenda.push(...loadedAgenda)

  }
 
  public mentores: Mentor[] = [];
  public Favoritos = [];
  public Agenda = [];

  
  public async addlistFavorito (id: number) {    
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
    const mentor = this.mentores[index]
    await this.http.put(`//mentortalkapi.herokuapp.com/mentor/${mentor._id}`, mentor).toPromise()

    if (mentor.liked) await this.http.post(`//mentortalkapi.herokuapp.com/favorito`, mentor).toPromise()
    else await this.http.delete(`//mentortalkapi.herokuapp.com/favorito/${mentor._id}`).toPromise()
    
    this.StoreMentores();
    this.StoreFavoritos();
  }
  
  public async addLike (id: number) { 
      const index = this.mentores.findIndex(function (t){
      return t.id == id;
    }); 
    if ( this.mentores[index].Likado == false)
    {
    this.mentores[index].Likes = this.mentores[index].Likes +1
    this.mentores[index].Likado = true
    }
    else
    {
      this.mentores[index].Likes = this.mentores[index].Likes -1
      this.mentores[index].Likado = false
    }
    const mentor = this.mentores[index]
    await this.http.put(`//mentortalkapi.herokuapp.com/mentor/${mentor._id}`, mentor).toPromise()
    
    this.StoreMentores();
  }

  public async addAgenda(id: string,nome: string, Linguagem:string , date: string)
  { 
    const newAgenda = {
      nameMonitor: nome,
      title: Linguagem,
      date: date      
    }
    await this.http.post('//mentortalkapi.herokuapp.com/agenda', newAgenda).toPromise()
    this.Agenda.push(newAgenda)
    this.StoreAgenda();
  }

  public async removeAgenda(id: string)
  {  
      const index  = this.Agenda.findIndex(function (t){
        return t.id == id;
      });  
      const agendaForDelete = this.Agenda[index]
      await this.http.delete(`//mentortalkapi.herokuapp.com/agenda/${agendaForDelete._id}`).toPromise()
      // console.log('agenda para deletar:', agendaForDelete)
      this.Agenda.splice(index,1)
      this.StoreAgenda();
  }
}