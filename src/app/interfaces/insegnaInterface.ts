import { Classe } from "../models/classe"
import { ClasseMateria } from "../models/classeMateria"
import { Professore } from "../models/professore"


export interface InsegnaInterface{
    idInsegna: number
    professore: Professore
    classe: Classe
    materia: string
    
}