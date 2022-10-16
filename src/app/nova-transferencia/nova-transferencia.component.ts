import { Component, EventEmitter, Output } from '@angular/core';
import { Transferencia } from '../model/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.css']
})
export class NovaTransferenciaComponent {

  @Output() aoTranferir = new EventEmitter<any>();

  valor!: number;
  destino!: number;

  constructor(private service: TransferenciaService, private router: Router){}

  transferir() {
    console.log('Solicitada Transferencia')
    const transferenciaSolicitada: Transferencia = {data: new Date(),  valor: this.valor, destino: this.destino };

    this.service.adicionar(transferenciaSolicitada).subscribe(result => {
      console.log(result);
      this.router.navigateByUrl('/extrato');
    },
    error => console.error(error));
  }
}
