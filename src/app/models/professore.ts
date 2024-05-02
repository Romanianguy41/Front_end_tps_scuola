import { ClasseMateria } from "./classeMateria";

export class Professore {
    idProfessore: number|undefined;
    nome: string|undefined;
    cognome: string|undefined;
    cododiceFiscale: string|undefined;
    luogoNascita: string|undefined;
    dataNascita: Date|undefined;
    email: string|undefined;
    indirizzo: string|undefined;
    CAP: number|undefined;
    cittadinanza: string|undefined;
    telefono: string|undefined;
    classi: ClasseMateria[]|undefined;

    constructor(idProfessore: number){
      this.idProfessore=idProfessore
    }
  }