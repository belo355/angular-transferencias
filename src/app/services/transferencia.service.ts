import { Injectable } from '@angular/core';
import { Transferencia } from '../model/transferencia.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencias: any[]
  url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient ) {
    this.listaTransferencias = [];
  }

  get transferencias() {
    return this.listaTransferencias;
  }

  buscarTodas(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  adicionar(transferencia: Transferencia): Observable<Transferencia> {
    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }

  totalTransferenciaSoma(transferencias: Transferencia[]){
   let sum = 0;
   for(let i= 0; i < transferencias.slice().length; i++){
    sum += transferencias[i].valor;
   }
   return sum;
  }
}
