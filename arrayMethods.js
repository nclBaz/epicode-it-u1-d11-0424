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

// -------------------------------- FOR EACH ------------------------------

console.log("Con FOR LOOP")
for (let index = 0; index < animals2.length; index++) {
  const animal = animals2[index]
  console.log(animal)
}

console.log("Con FOREACH e funzioni normali")
animals2.forEach(function (currentAnimal) {
  // For Each consente di eseguire una certa funzione elemento per elemento, quindi può essere una buona alternativa ad un for loop classico, più semplice anche da leggere
  // Il For Each prende come parametro una FUNZIONE, il cui primo parametro sarà SEMPRE l'elemento corrente (LO POSSO CHIAMARE COME VOGLIO)
  console.log(currentAnimal)
})

console.log("Con FOREACH e arrow functions")
animals2.forEach(currentAnimal => console.log(currentAnimal)) // Alternativa con le arrow function, SINTASSI MOLTO PIU' COMPATTA. Il risultato è identico a sopra

// -------------------------------- MAP ------------------------------
// Il MAP a differenza del foreach è pensato per restituire UN NUOVO ARRAY CON STESSO NUMERO DI ELEMENTI DELL'ARRAY ORGINALE. E' un metodo pensato per trasformare gli array elemento per elemento e mettere il risultato di questa trasformazione all'interno di un nuovo array
const numbers = [1, 2, 3, 4, 5, "6", 7, 8, 9, 10]
// const quadrati = []
// for (let index = 0; index < numbers.length; index++) {
//   const element = numbers[index]
//   quadrati.push(element * element)
// }
const quadrati = numbers.map(function (number) {
  const quadrato = number * number
  return { quadrato: quadrato, numeroOriginale: number } // Il return decide cosa sto ritornando, posso tornare numeri, stringhe, oggetti, array,........
})

// const quadrati = numbers.map(n => n * n) // Versione extreme
console.log(quadrati)

const quadrati2 = numbers.map(number => {
  const quadrato = number * number
  return { quadrato: quadrato, numeroOriginale: number }
})

// // -------------------------------- FILTER ------------------------------
// Il FILTER è un metodo che consente di filtrare elementi di un array, restituendoci quindi un NUOVO ARRAY con (probabilmente) meno elementi di prima. Il procedimento si basa sul andare ad impostare una condizione TRUE/FALSE nella clausola di RETURN della funzione interna
const filteredNumbers = numbers.filter(function (number) {
  return number > 4 // All'interno del filter devo specificare nel return la condizione per la quale l'elemento dovrà essere filtrato o meno
})

console.log(filteredNumbers) // Ho ottenuto un nuovo array con meno elementi di prima

// console.log(filteredNumbers.map(num => num * num))
// console.log(numbers.filter(num => num > 4).map(num => num * num))
