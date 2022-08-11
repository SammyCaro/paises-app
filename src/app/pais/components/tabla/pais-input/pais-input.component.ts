import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
})
export class PaisInputComponent implements OnInit {
  /* se emite este evento con el término del input */
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  /* ESTO ES LO QUE SE EMITE */
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';

  /* PARA LA CREACIÓN DE UN OBSERVABLE */
  debouncer: Subject<string> = new Subject();

  termino: string = '';
  inputPlaceholder: string = '';

  ngOnInit() {
    /* EL PIPE QUIERE DECIR QUE DEMORARÁ 300MS ANTES DE SUSCRIBIRSE AL VALOR */
    this.debouncer.pipe(debounceTime(300)).subscribe((valor) => {
      this.onDebounce.emit(valor);
    });
  }

  buscar() {
    console.log(this.termino);
    /* lo mandamos */
    this.onEnter.emit(this.termino);
  }

  teclaPresionada() {
    /* SE LE PASA AL PADRE EL TÉRMINO CON EL DEBOUNCE */
    this.debouncer.next(this.termino);
  }
}
