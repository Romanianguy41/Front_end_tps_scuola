import { ProfessoreMateria } from "./professoreMateria";

export class Classe {
    idClasse: number|undefined;
    classe: number|undefined;
    sezione: string|undefined;
    docenti: ProfessoreMateria[]|undefined;

    constructor(idClasse:number){
      idClasse = idClasse
    }
  }