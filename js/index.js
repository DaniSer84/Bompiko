import { createServicesList } from "./modules/components/listaServizi.js"
import { SERVIZI } from "./modules/mock/servizi.js"


let listaServizi = document.querySelector('.lista-servizi')

createServicesList(SERVIZI, listaServizi)