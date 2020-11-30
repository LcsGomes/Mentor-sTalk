import { Component, OnInit } from '@angular/core';
import { MentorsService } from 'src/app/services/mentors.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-cat-mentores',
  templateUrl: './cat-mentores.page.html',
  styleUrls: ['./cat-mentores.page.scss'],
})
export class CatMentoresPage implements OnInit {

public mentores = this.mentorsService.mentores


public Pesquisa = "";

public ListaFiltrada = this.mentores.slice();

public filter(campo: string){

  if (campo == ""){

    this.ListaFiltrada = this.mentores.slice();

  }else{
    
    this.ListaFiltrada = this.mentores.filter(function(t){return t.Linguagem == campo;})

  }


}

public addFavoritos(id: number){  
  this.mentorsService.addlistFavorito(id)
}
 


  constructor(private alertController : AlertController, private mentorsService: MentorsService ) { }

  ngOnInit() {
  }

  public async showAlert(){  
    const alert = await this.alertController.create({
    header: 'Para cadastrar-se como Mentor, favor entrar em contato com nosso suporte através do canal: suporte@mentorstalk.com',
    buttons: ['Fechar']
  });

  alert.present();
}

}
