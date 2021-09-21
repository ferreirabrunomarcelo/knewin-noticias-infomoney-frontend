import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Noticia } from 'src/app/model/noticia';
import { NoticiaService } from 'src/app/service/noticia.service';

@Component({
  selector: 'app-cadastro-noticias',
  templateUrl: './cadastro-noticias.component.html',
  styleUrls: ['./cadastro-noticias.component.css']
})
export class CadastroNoticiasComponent implements OnInit {

  formulario!: FormGroup;
  url!: string;
  mensagemErro = '';
  novaNoticia !: Noticia;

  constructor(private noticiaService: NoticiaService, private formBuilder: FormBuilder, private snackBar: MatSnackBar, public dialog: MatDialog) { }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      url: ['', [Validators.required, Validators.pattern('(http|https):\/\/www.infomoney.com.br\/.*')]]

    });
  }

  /**
   * Esta função cadastra uma nova notícia e personaliza a mensagem de retorno para o usuário
   * @param formDirective 
   */
  cadastrarNoticia(formDirective: FormGroupDirective) {
    this.url = this.formulario.value.url;
    this.noticiaService.cadastrarNoticia(this.url).subscribe(response => {
      this.novaNoticia = response;
      this.noticiaService.triggerNovaNoticia(this.novaNoticia);
      this.exibirMensagemUsuario("Notícia cadastrada com sucesso!");
    },
      ((error: HttpErrorResponse) => {
        this.mensagemErro = error.error.mensagem;

        this.exibirMensagemUsuario(this.mensagemErro);
      }));;

    formDirective.resetForm();
    this.formulario.reset();
  }

  /**
   * Esta função exibe o exibe a mensagem de retorno para o usuário
   * @param mensagem 
   */
  exibirMensagemUsuario(mensagem: string) {
    this.snackBar.open(mensagem, '', {
      duration: 2000
      color:
    });
    this.mensagemErro = '';
  }
}
