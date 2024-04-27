
import { ProfessoreMateria } from "../models/professoreMateria"


export interface ClasseInterface{
    idClasse: number
    classe: number,
    sezione: string,
    docenti: ProfessoreMateria[] 
}