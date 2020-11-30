import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from'@angular/router';
import {Mentor, MentorsService } from 'src/app/services/mentors.service';


@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {

 public mentores : Mentor[];
 public mentor : any;


  public agendamentos = [ 
    {
      nameMonitor: "Andrey Henrique",
      date: "16/10/2020 15:30",
      title: "Engenharia de software"
    }
  ] 

  public newAgendamento = {
    nameMonitor: "",
    date: new Date().toISOString(),
    title: ""
  }

  public minDate: string
  public maxDate: string

  constructor(private route: ActivatedRoute ,private mentorsService: MentorsService) { 
    const date = new Date()

    // Removendo 3 horas do UTC
    date.setUTCHours(date.getUTCHours() - 3)
    this.minDate = date.toISOString()

    this.newAgendamento.date = this.minDate

    // Adicionando 1 ano na data limite
    date.setFullYear(date.getFullYear() + 1)
    this.maxDate = date.toISOString()
  }

  ngOnInit() {
    const NmID = +this.route.snapshot.paramMap.get('id');      
    this.mentores = this.mentorsService.mentores;
    this.mentor = this.mentores.filter(function(t){return t.id == NmID;})    
    console.log(this.mentores)
    console.log(this.mentor)
  }

  public addFavoritos(){
    // Verificando se os campos estão preenchidos
    const date = new Date(this.newAgendamento.date)

    if(this.agendamentos.filter(function(t){return t.date == date.getUTCDate() + "/" + (date.getUTCMonth()+1).toString().padStart(2, '0') + "/" + date.getUTCFullYear() + " " +date.getUTCHours() + ":" + date.getUTCMinutes();}).length > 0)
      return;
    else{
    this.agendamentos.push({
      nameMonitor: this.mentor[0].Nome,
      title:this.mentor[0].Linguagem,
      date: date.getUTCDate() + "/" + (date.getUTCMonth()+1).toString().padStart(2, '0') + "/" + date.getUTCFullYear() + " " +date.getUTCHours() + ":" + date.getUTCMinutes()
      
    })
  }
    console.log(this.mentor[0].Nome)

    // Limpando dados do novo agendamento
    this.newAgendamento = {
      nameMonitor: "",
      title: "",
      date: this.minDate
    }
  }

}
