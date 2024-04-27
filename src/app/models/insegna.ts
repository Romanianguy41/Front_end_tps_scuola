import { Classe } from "./classe";
import { Professore } from "./professore";

export class Insegna {
    id: number|undefined;
    materia: string|undefined;
    classe: Classe|undefined
    Professore!: Professore|undefined;
  }