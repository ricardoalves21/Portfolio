import { Component, OnInit } from '@angular/core';

declare var window: any;

@Component({
  selector: 'app-trabalhos',
  templateUrl: './trabalhos.component.html',
  styleUrls: ['./trabalhos.component.css']
})
export class TrabalhosComponent implements OnInit {

  formModalTarefas: any;
  formModalClientes: any;
  formModalCalculadoras: any;
  formModalSite: any;

  ngOnInit(): void {
    this.formModalTarefas = new window.bootstrap.Modal(document.getElementById("modalTarefas"));
    this.formModalClientes = new window.bootstrap.Modal(document.getElementById("modalClientes"));
    this.formModalCalculadoras = new window.bootstrap.Modal(document.getElementById("modalCalculadoras"));
    this.formModalSite = new window.bootstrap.Modal(document.getElementById("modalSite"));
  }

  openModalTarefas() {
    this.formModalTarefas.show();
  }

  openModalClientes() {
    this.formModalClientes.show();
  }

  openModalCalculadoras() {
    this.formModalCalculadoras.show();
  }

  openModalSite() {
    this.formModalSite.show();
  }

  closeModalTarefas() {
    this.formModalTarefas.hide();
  }  

  closeModalClientes() {
    this.formModalClientes.hide();
  } 

  closeModalCalculadoras() {
    this.formModalCalculadoras.hide();
  } 

  closeModalSite() {
    this.formModalSite.hide();
  } 

}
