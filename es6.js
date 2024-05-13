// **************************************** ES6 *********************************************

// ------------------------ SPREAD OPERATOR ------------------------

const obj1 = {
  name: "Aldo",
  surname: "Baglio",
}

const obj2 = obj1
// obj2 non è un vero e proprio clone di obj1, è semplicemente un'ulteriore etichetta per accedere allo stesso oggetto. L'implicazione di questa cosa è che se modifico obj2 modificherò anche obj1 e viceversa, comportamento molto probabilmente che non desideriamo.

// Clone con metodo "classico"
const obj3 = Object.assign({}, obj1) // <-- obj3 è un vero e proprio clone distinto da obj1

// Clone con metodo più "moderno" aka Spread Operator
const obj4 = { ...obj1 } // ...obj1 significa trasportare dentro questo nuovo oggetto TUTTE LE PROPRIETA' di obj1 creando quindi una nuova copia

const obj5 = { age: 20, job: "Comedian" }
const obj6 = { ...obj1, ...obj5 }
console.log(obj6)

const obj7 = { ...obj1, ...obj5, name: "Giovanni" }
console.log(obj7)

const obj8 = { name: "Giovanni", ...obj1, ...obj5 } // Conta l'ordine di utilizzo, vince chi arriva dopo
console.log(obj8)

const arr1 = [1, 2, 3]
const arr2 = arr1 // non è una vera e propria copia come sopra

const arr3 = [...arr1] // trasporta tutti gli elementi di arr1 dentro arr3
console.log(arr3)

const arr4 = [4, 5, 6]
const arr5 = [...arr4, 1000, ...arr1, 7] // anche qua conta l'ordine, ma chi arriva dopo NON sovrascrive chi arriva prima
console.log(arr5)

// ------------------------ REST PARAMETERS ------------------------
const fun = function (separator, ...strings) {
  console.log(strings) // strings rappresenta i rest parameters, nel body della funzione quindi sarà un array di parametri
  let result = ""
  for (let i = 0; i < strings.length; i++) {
    result += strings[i] + separator
  }
  return result
}

console.log(fun(" "))
console.log(fun(" ", "Ciao", "a"))
console.log(fun("**", "Ciao", "a", "tutti"))

// ------------------------ DESTRUCTURING ------------------------
const dog = {
  name: "Fido",
  color: "Brown",
  age: 10,
  canFly: false,
}

// Metodo vecchio
// const name = dog.name
// const color = dog.color
// const age = dog.age
// const canFly = dog.canFly

// Metodo destructuring
const { age = 30, canFly, name, color, tailLength = 20 } = dog // ho ottenuto lo stesso identico risultato di sopra. Posso anche assegnare dei valori a queste nuove costanti, in modo che se viene trovato all'interno dell'oggetto quel valore allora prenderò quello, altrimenti ho comunque un valore di default
console.log(name)
console.log(age)
console.log(color)
console.log(tailLength)

const f = function ({ name, age }) {
  console.log("Name", name)
  console.log("Age", age)
}

f(dog)

const coordinates = [45.023, 10.2313]
// Metodo vecchio
// const latitude =  coordinates[0]
// const longitude = coordinates[1]
// Metodo nuovo con destructuring
const [latitude, longitude] = coordinates // Concetto simile a quello degli oggetti ma qua invece di lavorare con i nomi delle proprietà, si creano queste nuove const a partire dall'indice

// ------------------------ TEMPLATE LITERALS ------------------------
const testoLungoSuPiuRighe = `pojaspdjaspdjpasd
oasdihjoasjidojasd
sokdjajasdkljsldjlasd
lkasdlkasdjlasd` // <-- ` è il backtick su windows (SE SI HA IL TASTIERINO NUMERICO) si fa tenendo premuto alt + 96 (del tastierino numerico), se non si ha il tastierino numerico vedremo dopo un'alternativa. Su Mac invece è option + 9

console.log("Il mio cane si chiama " + dog.name + ", ha un età di " + dog.age + ", è di colore " + dog.color + ", sa volare: " + dog.canFly)
console.log(`Il mio cane si chiama ${dog.name}, 
ha un età di ${dog.age},
è di colore ${dog.color}, 
sa volare: ${dog.canFly}`) // con ${} inserisco dei segnaposto all'interno del testo che poi prenderanno il valore dalla variabile specificata al loro interno

const htmlElement = `<div>
  <p>Ciao il mio cane si chiama ${dog.name}
</div>`
