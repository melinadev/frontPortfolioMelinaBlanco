import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienciaLaboral } from 'src/app/Model/experiencia-laboral';
import { SExperienciaLaboralService } from 'src/app/service/s-experiencia-laboral.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nameE: string = '';
  descriptionE: string = '';

  constructor(private sExperienciaLaboral: SExperienciaLaboralService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new ExperienciaLaboral(this.nameE, this.descriptionE);
    this.sExperienciaLaboral.save(expe).subscribe(
      data => {
        alert("Experiencia añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
  )
  }

}