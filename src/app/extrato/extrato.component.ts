import { TransferenciaService } from './../services/transferencia.service';
import { Component, OnInit } from '@angular/core';
import { Transferencia } from '../model/transferencia.model';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {

  transferencias: any[] = [];

  constructor(private service: TransferenciaService) {}

  ngOnInit() {
    this.service.buscarTodas().subscribe((transferencias: Transferencia[]) => {
      console.table(transferencias);
      this.transferencias = transferencias;
    })
  }

}
