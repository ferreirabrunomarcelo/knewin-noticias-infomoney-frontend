import { Pipe, PipeTransform } from '@angular/core';
import { Noticia } from './model/noticia';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(listaNoticias: Noticia[], termoBusca: string): Noticia[] {
    if(!listaNoticias || !termoBusca){
      return listaNoticias;
    }

    return listaNoticias.filter(noticia => 
      noticia.titulo.toLocaleLowerCase().includes(termoBusca.toLocaleLowerCase()) ||
      noticia.subtitulo.toLocaleLowerCase().includes(termoBusca.toLocaleLowerCase()) ||
      noticia.autor.toLocaleLowerCase().includes(termoBusca.toLocaleLowerCase()) );
  }

}
