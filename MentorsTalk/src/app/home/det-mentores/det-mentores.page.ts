import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-det-mentores',
  templateUrl: './det-mentores.page.html',
  styleUrls: ['./det-mentores.page.scss'],
})
export class DetMentoresPage implements OnInit {

  constructor(private alertController : AlertController) { }

  public Like = 147;

  public isliked = false;

  public Add()
  {
   
    if (this.isliked == false){
       this.Like++
       this.isliked=true
    }
    else{
      this.Like--
      this.isliked=false
    }
  }
  public async showAlert(){  
      const alert = await this.alertController.create({
      header: 'Deseja Agendar uma conversa com esse Mentor',
      buttons: ['Sim','Não']
    });
    alert.present();
  }

  ngOnInit() {
  }

}
