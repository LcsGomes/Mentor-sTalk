import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {ActivatedRoute} from'@angular/router';
import { Mentor, MentorsService } from 'src/app/services/mentors.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-det-mentores',
  templateUrl: './det-mentores.page.html',
  styleUrls: ['./det-mentores.page.scss'],
})

export class DetMentoresPage implements OnInit {

 constructor(private alertController : AlertController, private route: ActivatedRoute, private mentorsService: MentorsService, private router: Router) { }

 public mentores : Mentor[] ;
 
 public mentor : Mentor[];

 public Add(id: number)
 {
  this.mentorsService.addLike(id)
 }
 public async showAlert(){  
     const alert = await this.alertController.create({
     header: 'Deseja Agendar uma conversa com esse Mentor',
     buttons: [
       {
         text: 'Sim',
         cssClass: 'secondary',
         handler: (blah) => {
           this.router.navigateByUrl("/home/agenda/" + this.route.snapshot.paramMap.get('id'))
         }
       }, {
         text: 'Não',
         handler: () => {
           console.log('Confirm Okay');
         }
       }
     ]
   });
   alert.present();
  }

  ngOnInit() {
    const NmID = +this.route.snapshot.paramMap.get('id');      
    this.mentores = this.mentorsService.mentores;
    this.mentor = this.mentores.filter(function(t){return t.id == NmID;});
  }
}