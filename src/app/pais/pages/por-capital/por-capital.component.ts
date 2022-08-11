import { Component, EventEmitter, Output } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
})
export class PorCapitalComponent {
  termino: string = '';
  hayError: boolean = false;
  capitales: Country[] = [];
  inputPlaceholder: string = '';

  constructor(private paisService: PaisService) {}

  /* se recibe el término del componented del input-component y se usa para llamar al método del servicio */
  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital(this.termino).subscribe(
      (capitales) => {
        console.log(capitales);
        /* el array vacío de este componente es igual al array que devuelve la respuesta */
        this.capitales = capitales;
      },
      (err) => {
        this.hayError = true;
        this.capitales = [];
      }
    );
  }

  sugerencias(termino: string) {
    this.hayError = false;
  }
}
