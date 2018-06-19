import {Component, OnInit} from '@angular/core';
import {ProdutoService} from './produto.service';
import {Produto} from './produto';
import {LoginService} from '../login/login.service';
import {ConfirmationService, Message} from 'primeng/api';
import {Ccusto} from '../ccusto/ccusto';


@Component({
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  produtos: Produto[];
  showDialog = false;
  produtoEdit = new Produto();
  showConfirm = false;
  msgs: Message[] = [];

  constructor(private produtoService: ProdutoService,
              private loginService: LoginService, private confirmationService: ConfirmationService) {
  }

  hasRole(role: string): boolean {
    return this.loginService.hasRole(role);
  }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.produtoService.findAll().subscribe(e => this.produtos = e);
  }

  novo() {
    this.showDialog = true;
    this.produtoEdit = new Produto();
  }

  salvar() {
    this.produtoService.save(this.produtoEdit).subscribe(e => {
      this.produtoEdit = new Produto();
      this.findAll();
        this.showDialog = false;
        this.msgs = [{severity:'sucess', summary:'Confirmado', detail:'Registro salvo com sucesso'}];
      },
      error => {
        this.msgs = [{severity:'error', summary:'Erro', detail:'Certifique-se de preencher todos os campos.'}];
      });
  }

  editar(produto: Produto) {
    this.produtoEdit = produto;
    this.showDialog = true;
    this.msgs = [{severity:'sucess', summary:'Confirmado', detail:'Registro alterado com sucesso'}];
  }

  remover(produto: Produto) {
    this.produtoService.delete(produto.id).subscribe(() => {
      this.findAll();
      this.showConfirm = false;
    });
  }

  confirm(produto: Produto) {
    this.confirmationService.confirm({
      message: 'Essa ação não poderá ser desfeita',
      header: 'Deseja remover esse registro?',
      accept: () => {
        this.produtoService.delete(produto.id).subscribe(() => {
          this.findAll();
          this.msgs = [{severity:'sucess', summary:'Confirmado', detail:'Registro removido com sucesso'}];
        });
      }
    });
  }

}
