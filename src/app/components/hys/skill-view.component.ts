import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Skills } from 'src/app/Model/skills.model';

@Component({
  selector: 'app-skill-view',
  templateUrl: './skill-view.component.html',
  styleUrls: ['./skill-view.component.css']
})
export class SkillViewComponent implements OnInit {

  @Input() skill: Skills;
  @Input() logged: boolean;

  @HostBinding("style.--degRight") degRight = "0deg"
  @HostBinding("style.--degLeft") degLeft = "0deg"
  
  constructor() { }

  ngOnInit(): void {
    this.loadPercentage();
  }

  loadPercentage(): void{
    if (this.skill.percentage <=50) { 
        this.degRight = (this.skill.percentage * 3.6).toString()+"deg";
        this.degLeft = "0deg";
    }  else if((this.skill.percentage > 50) && (this.skill.percentage <=100)) { 
        this.degRight = "180deg";
        this.degLeft =  ((this.skill.percentage - 50) * 3.6).toString()+"deg";
    } else { 
        alert("Porcentaje fuera de rango");
    }

  }
}