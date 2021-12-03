import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdultosMayores } from '../model/adultos-mayores';

@Injectable({
  providedIn: 'root'
})
export class AdultosMayoresService {

  constructor(private http: HttpClient) { }

  getAdultosMayores(): Observable<AdultosMayores[]> {
    return this.http.get<AdultosMayores[]>("../../assets/json/adultos-data.json");
  }
}
