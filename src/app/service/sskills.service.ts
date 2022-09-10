import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skills } from '../Model/skills.model';

@Injectable({
  providedIn: 'root'
})
export class SSkillsService {

  expURL = 'https://backportfolioblanco.herokuapp.com/skills/'

  constructor(private httpClient: HttpClient) { }

   public lista(): Observable<Skills[]>{
    return this.httpClient.get<Skills[]>(this.expURL+'lista');
   }

   public save(skills:Skills): Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'create', skills);
   }

   public update(id: number, skills:Skills): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `update/${id}`, skills);
   }

   public detail(id: number): Observable<Skills>{
    return this.httpClient.get<Skills>(this.expURL+`detail/${id}`);
   }


}
