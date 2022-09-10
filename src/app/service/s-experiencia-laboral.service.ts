import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExperienciaLaboral } from '../Model/experiencia-laboral';

@Injectable({
  providedIn: 'root'
})
export class SExperienciaLaboralService {

  expURL = 'https://backportfolioblanco.herokuapp.com/explab/'

  constructor(private httpClient: HttpClient) { }

   public lista(): Observable<ExperienciaLaboral[]>{
    return this.httpClient.get<ExperienciaLaboral[]>(this.expURL+'lista');
   }

   public detail(id: number): Observable<ExperienciaLaboral>{
    return this.httpClient.get<ExperienciaLaboral>(this.expURL+`detail/${id}`);
   }

   public save(experienciaLaboral:ExperienciaLaboral): Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'create', experienciaLaboral);
   }

   public update(id: number, experienciaLaboral:ExperienciaLaboral): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `update/${id}`, experienciaLaboral);
   }

   public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
   }

}
