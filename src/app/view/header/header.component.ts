import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CadastroNoticiasComponent } from '../cadastro-noticias/cadastro-noticias.component';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('slideInOut', [
      state('true', style({ width: '*' })),
      state('false', style({ width: '0', visibility: 'hidden' })),
      transition('true => false', animate('300ms ease-in')),
      transition('false => true', animate('300ms ease-out'))
    ])
  ],
})
export class HeaderComponent implements OnInit {

  termoBusca: string = "";

  @ViewChild('input') inputElement!: ElementRef;

  searchVisible = false;

  constructor(public dialogCadastroNoticias: MatDialog) { }

  ngOnInit(): void { }

  /**
   * Esta função exibe o component cadastrar noticícias
   */
  cadastrarNoticia() {
    this.dialogCadastroNoticias.open(CadastroNoticiasComponent);
  }

  /**
   * Esta função esconde a barra de buscas
   */
  public close(): void {
    this.searchVisible = false;
  }

  /**
   * Esta função mostra a barra de buscas
   */
  public open(): void {
    this.searchVisible = true;
  }
}

