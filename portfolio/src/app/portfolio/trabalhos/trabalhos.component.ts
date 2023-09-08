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
  formModalEcom1: any;
  formModalEcom2: any;

  ngOnInit(): void {
    this.formModalTarefas = new window.bootstrap.Modal(document.getElementById("modalTarefas"));
    this.formModalClientes = new window.bootstrap.Modal(document.getElementById("modalClientes"));
    this.formModalCalculadoras = new window.bootstrap.Modal(document.getElementById("modalCalculadoras"));
    this.formModalSite = new window.bootstrap.Modal(document.getElementById("modalSite"));
    this.formModalEcom1 = new window.bootstrap.Modal(document.getElementById("modalEcom1"));
    this.formModalEcom2 = new window.bootstrap.Modal(document.getElementById("modalEcom2"));
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

  openModalEcom1() {
    this.formModalEcom1.show();
  }

  openModalEcom2() {
    this.formModalEcom2.show();
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

  closeModalEcom1() {
    this.formModalEcom1.hide();
  } 

  closeModalEcom2() {
    this.formModalEcom2.hide();
  } 

}
