import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {

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

  constructor() { 
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
  }

  public addFavoritos(){
    // Verificando se os campos estão preenchidos
    if (!this.newAgendamento.nameMonitor || !this.newAgendamento.title) return;

    const date = new Date(this.newAgendamento.date)

    this.agendamentos.push({
      nameMonitor: this.newAgendamento.nameMonitor,
      title: this.newAgendamento.title,
      date: date.getUTCDate() + "/" + (date.getUTCMonth()+1).toString().padStart(2, '0') + "/" + date.getUTCFullYear() + " " +date.getUTCHours() + ":" + date.getUTCMinutes()
    })

    // Limpando dados do novo agendamento
    this.newAgendamento = {
      nameMonitor: "",
      title: "",
      date: this.minDate
    }
  }

}
