import { Component, HostBinding, OnInit } from '@angular/core';
import { Skills } from 'src/app/Model/skills.model';
import { SSkillsService } from 'src/app/service/sskills.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit {
  skills: Skills[] = [];
  isLogged =false;
  
  constructor(private sSkills: SSkillsService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.cargarSkills();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{ 
      this.isLogged = false;
    }
  }
  
  cargarSkills(): void{
    this.sSkills.lista().subscribe(data => {this.skills = data;})
  }
  
}


