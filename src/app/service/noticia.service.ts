import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { Noticia } from '../model/noticia';

@Injectable({
    providedIn: 'root'
})

export class NoticiaService {

    private apiUrl = 'http://localhost:8080/api/v1'

    private eventNovaNoticia = new BehaviorSubject<any>(undefined);
    
    constructor(private httpClient: HttpClient) { }

    /**
     * Esta função cadastra uma nova notícia na api por meio de uma requisição POST
     * @param noticiaUrl 
     * @returns 
     */
    public cadastrarNoticia(noticiaUrl: string) : Observable <any> {
        return this.httpClient.post<string>(this.apiUrl + "/nova-noticia", noticiaUrl);
    }

    /**
     * Esta função busca todas as notícias da api por meio de uma requisição GET
     * @returns 
     */
    public buscarTodasNoticias() : Observable<Noticia[]>{
        return this.httpClient.get<Noticia[]>(this.apiUrl + "/noticias");
    }

    /**
     * Esta função ativa o evento do cadastro de uma nova notícia
     * @param param 
     */
    triggerNovaNoticia(param: any) {
        this.eventNovaNoticia.next(param);
    }
   
    /**
     * Esta função recebe o evento do cadastro de uma nova notícia
     */
    getEventNovaNoticia(): BehaviorSubject<any> {
       return this.eventNovaNoticia;
    }
}