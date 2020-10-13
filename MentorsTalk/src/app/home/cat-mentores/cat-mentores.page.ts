import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat-mentores',
  templateUrl: './cat-mentores.page.html',
  styleUrls: ['./cat-mentores.page.scss'],
})
export class CatMentoresPage implements OnInit {

public Mentores = [
  {
    id:1,
    Nome:'Cleber Silva',
    IdadeUf:'26 anos, São Paulo/SP',
    Imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6b-W-tT4zAEj5ugLGL46MXEKFL2UryQnQDw&usqp=CAU",
    Desc: 'Com experiência em diveresas empresas e projetos, Cleber aparece como uma grande oportunidade para você que deseja aperfeiçoar ou iniciar nesta linguagem.',
    Linguagem: 'Especialista Java',
    liked:false
  },

{

  id:2,
  Nome:'Lucas Sales',
  IdadeUf:'35 anos, Rio de Janeiro/RJ',
  Imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRdlrDuvlwm0ocjjYAbyNHbaGbWFsop9jVmzw&usqp=CAU",
  Desc: 'Com ampla bagagem, este professor já participou de diversos projetos nas mais diferentes empresas, formado na USP em 1997, acumula premios e meritos de seu bom desempenho.',
  Linguagem: 'Especialista C#',
  liked:false
},

{
  id:3,
  Nome:'Paulo Nori',
  IdadeUf:'18 anos,Belo Horizonte/MG',
  Imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTl4Bcq1T1iv42HGqGm-AXjAryvwS74xjaIhw&usqp=CAU",
  Desc: 'Prodigio e elogiado por todos na área, Paulo é uma ótima opção para aqueles de desejam se atualizar e conhecer novos caminhos nessa linguagem, não se engane por sua pouca idade o mesmo é considerado um dos melhores em seu segmento.',
  Linguagem: 'Especialista Python',
  liked:false

},

{
id:4,
  Nome:'Rubens Neto',
  IdadeUf:'42 anos, Campinas/SP',
  Imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5NlKKwij_EeK3OL1O8LQrtU4bAw7sE16r1w&usqp=CAU",
  Desc: 'Formado em 2003, este professor acumula diversos projetos com implantação de javascript, com experiência internacional esse profissonal tem muito o que transmitir para você iniciante ou apreciador da linguagem.',
  Linguagem: 'Especialista Python',
  liked:false
}


]

  constructor() { }

  ngOnInit() {
  }

}
