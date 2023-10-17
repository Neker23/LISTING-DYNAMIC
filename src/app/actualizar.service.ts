import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root', // Opcional, especifica la disponibilidad del servicio
})
export class ActualizarServicio {
  constructor() {
    // Constructor del servicio
  }

  private eventoSubject = new Subject<any>();

  emitirEvento(data?: any) {
    this.eventoSubject.next(data);
  }

  obtenerEvento() {
    return this.eventoSubject.asObservable();
  }
}
