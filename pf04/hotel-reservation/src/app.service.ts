import { Injectable } from '@nestjs/common';

// Definir la interfaz con un nombre específico
export interface Person {
  name: string;
  age: number;
  nationality: string;
}

@Injectable()
export class AppService {

  getHello(): Person {  // Especificar el tipo de retorno de `getHello`
    const enrique: Person = {  // Especificar el tipo de `enrique`
      name: "Enrique Castillo",
      age: 32,
      nationality: "Colombiano"
    };
    return enrique;
  }
}
