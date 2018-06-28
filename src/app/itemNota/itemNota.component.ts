import { Message, ConfirmationService } from 'primeng/api';
import { ProdutoService } from './../produto/produto.service';
import { Produto } from './../produto/produto';
import { NotaService } from './../nota/nota.service';
import { Nota } from './../nota/nota';
import { Component, OnInit } from '@angular/core';
import { ItemNotaService } from './itemNota.service';
import { ItemNota } from './itemNota';

@Component({
  templateUrl: './itemNota.component.html',
  styleUrls: ['./itemNota.component.css']
})
export class ItemNotaComponent implements OnInit {

  itemNotas: ItemNota[];
  showDialog = false;
  itemNotaEdit = new ItemNota();
  idProdutos: Produto[];
  idNotas: Nota[];
  msgs: Message[] = [];


  constructor(private itemNotaService: ItemNotaService, private produtoService: ProdutoService,
    private notaService: NotaService, private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    this.findAll();
    this.produtoService.findAll().subscribe(e => this.idProdutos = e);
    this.notaService.findAll().subscribe(e => this.idNotas = e);
  }

  findAll() {
    this.itemNotaService.findAll().subscribe(e => this.itemNotas = e);
  }

  novo() {
    this.showDialog = true;
    this.itemNotaEdit = new ItemNota();
  }

  salvarItemNota() {
    this.itemNotaService.save(this.itemNotaEdit).subscribe(e => {
      this.itemNotaEdit = new ItemNota();
      this.findAll();
      this.showDialog = false;
      this.msgs = [{severity:'sucess', summary:'Confirmado', detail:'Registro salvo com sucesso'}];
    },
    error => {
      this.msgs = [{severity:'error', summary:'Erro', detail:'Certifique-se de preencher todos os campos.'}];
    });
    
  }

  editar(itemNota: ItemNota) {
    this.itemNotaEdit = itemNota;
    this.showDialog = true;
  }

  remover(itemNota: ItemNota) {
    this.itemNotaService.delete(itemNota.id).subscribe(() => {
      this.findAll();
    });
  }
}
