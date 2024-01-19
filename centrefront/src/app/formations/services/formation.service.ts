import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Formation } from 'src/app/modele/formation';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FormationService {
  host = "http://localhost:8080/"
  constructor(private http: HttpClient) { }
  getTousFormations(): Observable<any> {
    return this.http.get(this.host + "details")
  }
  getFormationById(id: number): Observable<Formation[]> {
    return this.http.get<Formation[]>(this.host + 'details/' + id)
  }

  getAllCategories() {
    return this.http.get(this.host + 'categorie')
  }
  getFormationByCategory(keyword: string) {
    return this.http.get(this.host + 'categorie/' + keyword)
  }
}
