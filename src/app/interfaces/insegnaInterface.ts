import { Classe } from "../models/classe"
import { Professore } from "../models/professore"


export interface InsegnaInterface{
    idInsegna: number
    professore: Professore
    classe: Classe
    materia: string
    
}