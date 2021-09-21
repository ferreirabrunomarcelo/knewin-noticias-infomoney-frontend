import { Inject, Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ListaNoticiasComponent } from '../lista-noticias/lista-noticias.component';
@Component({
  selector: 'app-dialog-conteudo-noticia',
  templateUrl: './dialog-conteudo-noticia.component.html',
  styleUrls: ['./dialog-conteudo-noticia.component.css']
})
export class DialogConteudoNoticiaComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { console.log(data.conteudo);}

  ngOnInit(): void {}

}
