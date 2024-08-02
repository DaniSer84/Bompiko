import { createServicesList } from "./modules/listaServizi.js"
import { SERVIZI } from "./modules/servizi.js"


let listaServizi = document.querySelector('.lista-servizi')

createServicesList(SERVIZI, listaServizi)