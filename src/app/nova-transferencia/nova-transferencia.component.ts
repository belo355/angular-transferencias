import { Component, EventEmitter, Output } from '@angular/core';
import { Transferencia } from '../model/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.css']
})
export class NovaTransferenciaComponent {

  @Output() aoTranferir = new EventEmitter<any>();

  valor!: number;
  destino!: number;

  constructor(private service: TransferenciaService){}

  transferir() {
    console.log('Solicitada Transferencia')
    const transferenciaSolicitada: Transferencia = {data: new Date(),  valor: this.valor, destino: this.destino };

    this.service.adicionar(transferenciaSolicitada).subscribe(result => {
      console.log(result);
      this.limparFormulario();
    },
    error => console.error(error));
  }

  limparFormulario() {
    this.valor = 0;
    this.destino = 0;
  }

}
