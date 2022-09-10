import { Component, OnInit } from '@angular/core';
import { ExperienciaLaboral } from 'src/app/Model/experiencia-laboral';
import { SExperienciaLaboralService } from 'src/app/service/s-experiencia-laboral.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  expe: ExperienciaLaboral[] = [];

  constructor(private sExperienciaLaboral: SExperienciaLaboralService, private tokenService: TokenService) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{ 
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void{
    this.sExperienciaLaboral.lista().subscribe(data => {this.expe = data;})
  }

  delete(id?: number){
    if(id!= undefined){
      this.sExperienciaLaboral.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }  
}