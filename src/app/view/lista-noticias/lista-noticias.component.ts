import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Noticia } from 'src/app/model/noticia';
import { NoticiaService } from 'src/app/service/noticia.service';
import { DialogConteudoNoticiaComponent } from '../dialog-conteudo-noticia/dialog-conteudo-noticia.component';

@Component({
  selector: 'app-lista-noticias',
  templateUrl: './lista-noticias.component.html',
  styleUrls: ['./lista-noticias.component.css']
})

export class ListaNoticiasComponent implements OnInit {

  listaNoticias!: Noticia[];
  listaNoticiasFiltradas!: Noticia[];
  tamanhoTermoBusca: number = 0;
  @Input() novaNoticia!: Noticia;
  @Input() termoBusca!: string;

  constructor(private noticiaService: NoticiaService, public dialogConteudo: MatDialog) { }

  ngOnInit(): void {
    this.buscarTodasNoticias();

    this.noticiaService.getEventNovaNoticia().subscribe((param: any) => {
      if (param !== undefined) {
        this.atualizarTodasNoticias(param);
      }
    });
  }

  /**
   * Esta função busca todas as notícias da api
   */
  buscarTodasNoticias() {
    this.noticiaService.buscarTodasNoticias().subscribe((data: Noticia[]) => {
      this.listaNoticias = data;
      this.listaNoticiasFiltradas = this.listaNoticias;
    })
  }

  /**
   * Esta função atualiza a lista de notícias após um novo cadastro
   * @param noticia
   */
  atualizarTodasNoticias(noticia: Noticia) {
    this.listaNoticias.push(noticia);
    this.listaNoticiasFiltradas = this.listaNoticias;
  }

  /**
   * Esta função exibe o component do conteúdo da notícia
   * @param noticia 
   */
  visualizarConteudo(noticia: Noticia) {
    this.dialogConteudo.open(DialogConteudoNoticiaComponent, {
      data: {
        titulo: noticia.titulo,
        subtitulo: noticia.subtitulo,
        conteudo: noticia.conteudo,
      }
    });
  }
}
