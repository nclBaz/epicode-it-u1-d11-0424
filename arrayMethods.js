// *************************************** ARRAY METHODS **********************************

// -------------------------------- SPLICE ------------------------------
// N.B. SPLICE MODIFICA L'ARRAY ORIGINALE
const arr1 = ["cane", "gatto"]
const arr2 = ["barbagianni", "bradipo", "canguro"]

const animals = [...arr1, ...arr2]
const animals2 = arr1.concat(arr2) // alternativa allo spread

const deletedAnimals = animals.splice(2, 1, "struzzo", "tonno") // <-- elimina un elemento (quello all'indice 2) e aggiunge due nuovi in quella posizione
// Lo splice mi ritorna sempre un array di elementi cancellati
console.log("DELETED ", deletedAnimals)
console.log("Animals:", animals)
animals.splice(3, 0, "topo") // Se volessi solo aggiungere senza eliminare
console.log("Animals:", animals)

// -------------------------------- SLICE ------------------------------
// N.B. SLICE NON MODIFICA L'ARRAY ORIGINALE
const animals3 = animals2.slice(3)
console.log(animals2)
console.log(animals3)
const animals4 = animals2.slice(3, 4) // OPZIONALMENTE posso specificare anche l'indice di fine (ESCLUSO)
console.log(animals4)
