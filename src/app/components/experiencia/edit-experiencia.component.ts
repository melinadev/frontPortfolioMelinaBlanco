import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienciaLaboral } from 'src/app/Model/experiencia-laboral';
import { SExperienciaLaboralService } from 'src/app/service/s-experiencia-laboral.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  explab: ExperienciaLaboral = null;

  constructor(private sExperienciaLaboral: SExperienciaLaboralService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    console.log(id);
    this.sExperienciaLaboral.detail(id).subscribe(
      data =>{
        this.explab = data;
      }, err =>{
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    console.log(this.explab);
    this.sExperienciaLaboral.update(id, this.explab).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar experiencia");
         this.router.navigate(['']);
      }
    )
  }

}