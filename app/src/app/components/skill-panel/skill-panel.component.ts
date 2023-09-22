import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-panel',
  templateUrl: './skill-panel.component.html',
  styleUrls: ['./skill-panel.component.scss']
})
export class SkillPanelComponent implements OnInit {

  @Input() imageLeft = true
  @Input() skill = "Java"

  skillsEnum = false
  descriptionsEnum = false
  description: string = "";
  title: string = "";
  image = ""

  ngOnInit(): void {
    this.title = this.skill
    switch (this.skill) {
      case "Java":
        this.image = "assets/imgs/java-logo.webp"
        this.description = `
        Nós somos do Clube Atlético Mineiro
        Jogamos com muita raça e amor
        Vibramos com alegria nas vitórias
        Clube Atlético Mineiro
        Galo Forte Vingador

        Vencer, vencer, vencer
        Este é o nosso ideal
        Honramos o nome de Minas
        No cenário esportivo mundial`
        break
      case "Python":
        this.image = "assets/imgs/python-logo.png"
        this.description = `
        Lutar, lutar, lutar
        Pelos gramados do mundo pra vencer
        Clube Atlético Mineiro
        Uma vez até morrer

        Nós somos campeões do gelo
        O nosso time é imortal
        Nós somos campeões dos Campeões
        Somos o orgulho do esporte nacional
        `
        break
      }
  }

}
