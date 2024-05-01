import { ClasseMateria } from "../models/classeMateria"


export interface ProfessoreInterface{
    idProfessore: number
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
    classi: ClasseMateria[]
}