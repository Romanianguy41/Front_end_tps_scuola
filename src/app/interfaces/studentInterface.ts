import { Classe } from "../models/classe"


export interface StudenteInterface{
    idStudente: number
    nome: string
    cognome: string
    codiceFiscale: string
    luogoNascita: string
    dataNascita: Date
    email: string
    indirizzo: string
    CAP: number
    cittadinanza: string
    telefono: string
    classe: Classe
}