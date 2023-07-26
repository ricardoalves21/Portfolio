import { Component, OnInit } from '@angular/core';
import { Contato } from '../contato';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
})
export class ContatoComponent implements OnInit {
  constructor(private service: ContatoService) {}

  ngOnInit(): void {}

  contato: Contato = {
    _id: '',
    nome: '',
    telefone: '',
    email: '',
    empresa: '',
  };

  public exibirAlert: boolean = false;

  criarContato() {
    this.service.criar(this.contato).subscribe();
    this.exibirAlert = true;
    this.limparForm();
  }

  limparForm() {
    this.contato.nome = '';
    this.contato.telefone = '';
    this.contato.email = '';
    this.contato.empresa = '';
  }

  condicao(): boolean {
    if (
      this.contato.nome !== '' &&
      this.contato.nome !== null &&
      this.contato.telefone !== '' &&
      this.contato.telefone !== null &&
      this.contato.email !== '' &&
      this.contato.email !== null &&
      this.contato.empresa !== '' &&
      this.contato.empresa !== null
    ) {
      return false;
    }
    return true;
  }
}
