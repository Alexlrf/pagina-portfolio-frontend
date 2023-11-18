import { Component, OnInit } from '@angular/core';
import { Texto } from 'src/app/shared/models/texto';
import { TextoService } from 'src/app/componentes/textos/texto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  textoCitacao:             Texto = JSON.parse(localStorage.getItem('citacao') || '{}');
  textoApresentacaoPessoal: Texto = JSON.parse(localStorage.getItem('apresentacaoPessoal') || '{}') ;;

  textos: Texto[] = []

  constructor(
    private textoService: TextoService
  ) {}

  ngOnInit(): void {
    this.buscarTexto()
  }

  buscarTexto = ()=> {
    if(this.textos.length == 0) {
      this.textoService.buscarTextos()
      .subscribe({
        next: (txt: Texto[])=> {
          if (txt) {
            this.textos = txt
          }
        },
        error: (erro)=> {
          console.log(`Erro na busca de textos [${erro}]`)
        }
      })
      this.preencherTextos()
    }
  }

  preencherTextos() {
    for(let i = 0; i < this.textos.length; i++) {
      let texto = this.textos[i]
      if (texto.categoria === 'citacao') {
        this.textoCitacao = texto
        this.preencherLocalStorage('citacao', texto)
      } else if(texto.categoria === 'apresentacaoPessoal') {
        this.textoApresentacaoPessoal = texto
        this.preencherLocalStorage('apresentacaoPessoal', texto)
      }
    }
  }

  preencherLocalStorage(chaveParametro: string, valor: {}) {
    localStorage.setItem(chaveParametro, JSON.stringify(valor))
  }

}
