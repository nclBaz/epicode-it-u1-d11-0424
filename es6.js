// **************************************** ES6 *********************************************

// SPREAD OPERATOR

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
