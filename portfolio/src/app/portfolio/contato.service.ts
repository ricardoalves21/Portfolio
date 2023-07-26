import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contato } from './contato';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContatoService {
  constructor(private http: HttpClient) {}
  private readonly API = 'api/contato';

  criar(contato: Contato): Observable<Contato> {
    return this.http.post<Contato>(this.API, contato);
  }

}
