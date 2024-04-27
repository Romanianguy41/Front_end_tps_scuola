import { Classe } from "./classe";

export class Studente {
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
  clasee: Classe|undefined;
  constructor(id: number|undefined,
    nome: string|undefined,
    cognome: string|undefined,
    codfiscale: string|undefined,
    luogoNascita: string|undefined,
    dataNascita: Date|undefined,
    email: string|undefined,
    indirizzo: string|undefined,
    CAP: number|undefined,
    cittadinanza: string|undefined,
    clasee: Classe|undefined,){
      this.id = id,
      this.nome = nome,
      this.cognome =cognome
      this.codfiscale = codfiscale
      this.luogoNascita = luogoNascita
      this.dataNascita = dataNascita,
      this.email = email,
      this.indirizzo = indirizzo
      this.CAP = CAP
      this.cittadinanza = cittadinanza,
      this.clasee = clasee
    }
}