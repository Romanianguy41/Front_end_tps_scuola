import { ClasseMateria } from "./classeMateria";

export class Professore {
    id: number|undefined;
    nome: string|undefined;
    cognome: string|undefined;
    codfiscale: string|undefined;
    luogoNascita: string|undefined;
    dataNascita: Date|undefined;
    email: string|undefined;
    indirizzo: string|undefined;
    CAP: number|undefined;
    cittadinanza: string|undefined;
    insegna: ClasseMateria[]|undefined;
  }