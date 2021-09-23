# Sistema WEB para visualizar notícias do InfoMoney desenvolvido com Angular.

Este sistema consome e envia informações de uma aplicação java spring boot/mongodb (https://github.com/ferreirabrunomarcelo/knewin-noticias-infomoney-api).

O sistema permite:
- cadastrar uma notícia do InfoMoney apenas informando a URL da notícia. Ex.: https://www.infomoney.com.br/mercados/itausa-lucra-123-mais-no-1o-tri-a-r-24-bi-prejuizo-da-marisa-cai-50-e-mais-balancos-petrobras-petrorio-e-outros-destaques/
- listar as notícias cadastradas.
- realizar uma busca por palavras-chave para encontrar as notícias.
- Ter uma visualização da notícia que apresente:
  - a URL da notícia
  - o título da notícia
  - o subtítulo da notícia
  - o Autor
  - a data de publicação no formato (dia/mês/ano hora:minuto)
  - o conteúdo da notícia, sem tags HTML

# Instalação e uso

Para executar a aplicação na sua máquina é necessário possuir instalado o docker (https://www.docker.com/products/docker-desktop). 

1. Salve um arquivo com o nome 'docker-compose.yml' em sua máquina.

```yml
version: '3.7'
services:
  mongodb_container:
    image: mongo
    container_name: mongodb_container
    ports:
    - 27017:27017
    volumes:
    - /mongodb_container:/data/db
    networks:
    - main-network
  springboot_container:
    image: ferreirabrunomarcelo/noticias-infomoney-api
    container_name: springboot_container
    ports:
    - 8080:8080
    environment:
    - SPRING_DATA_MONGODB_HOST=mongodb_container
    - SPRING_DATA_MONGODB_DATABASE=noticias-infomoney
    depends_on:
    - mongodb_container
    networks:
    - main-network
  frontend_angular:
    image: ferreirabrunomarcelo/noticias-infomoney-frontend
    container_name: frontend_angular 
    ports:
      - 4200:4200
      - 49153:49153
    depends_on:
    - springboot_container
    networks:
    - main-network  
networks:
  main-network:
    driver: bridge
```

2. Execute no terminal no diretório onde seu arquivo .yml foi salvo o seguinte comando:

```yml
docker-compose up
```
3. Acesse o sistema através do navegador na seguinte url:

```
http://localhost:4200/
```
