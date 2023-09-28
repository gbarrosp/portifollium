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
      case "About me":
        this.image = "assets/imgs/perfil.jpeg"
        this.description = `
          That I love coding you already know, what you should know is that I aim to be the MVP for every team I'm in!
        `
        break
      }
  }

}
