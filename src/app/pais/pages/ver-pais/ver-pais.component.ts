import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { Country } from '../../interfaces/pais.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
})
export class VerPaisComponent implements OnInit {
  pais!: Country;

  constructor(
    /* se llaman los servicios */
    private activatedRoute: ActivatedRoute,
    private PaisService: PaisService
  ) {}

  ngOnInit(): void {
    /* se obtiene el id al iniciar el componente*/
    this.activatedRoute.params
      .pipe(
        /* toma el observable del params y lo retorna hacia el servicio */
        switchMap(({ id }) => {
          /* esto es como si el id se suscribiera */
          return this.PaisService.getPaisPorId(id);
        }),
        /* recibe el producto del observable y el tap lo imprime en consola */
        tap(console.log)
      )
      /* nos suscribimos a la respuesta con el id */
      .subscribe((pais) => (this.pais = pais[0]));
  }
}
