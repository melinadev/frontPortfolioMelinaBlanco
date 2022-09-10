import { Component, OnInit } from '@angular/core';
import {Skills} from 'src/app/Model/skills.model';
import { ActivatedRoute, Router } from '@angular/router';
import { SSkillsService } from 'src/app/service/sskills.service';


@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.css']
})
export class EditSkillsComponent implements OnInit {
  perc: Skills = null;

  constructor(private sSkills: SSkillsService, private activatedRouter: ActivatedRoute,private router: Router) { }
  
ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sSkills.detail(id).subscribe(
      data =>{
        this.perc = data;
      }, err =>{
        alert("Error al modificar el valor");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    console.log(this.perc);
    this.sSkills.update(id, this.perc).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar el valor");
         this.router.navigate(['']);
      }
    )
  }

}