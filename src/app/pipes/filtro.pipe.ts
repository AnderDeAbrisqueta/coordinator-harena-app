import { Pipe, PipeTransform } from '@angular/core';
import { AdultosMayores } from '../model/adultos-mayores';

@Pipe({
  name: 'filtro',
})
export class FiltroPipe implements PipeTransform {
  transform(adultosMayores: AdultosMayores[], texto: string): AdultosMayores[] {
    if (texto.length === 0) {
      return adultosMayores;
    }

    texto = texto.toLocaleLowerCase();

    return adultosMayores.filter((adultoMayor) => {
      return (
        adultoMayor.first_name.toLocaleLowerCase().includes(texto) ||
        adultoMayor.last_name.toLocaleLowerCase().includes(texto)
      );
    });
  }
}
