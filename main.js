// const nombre=prompt("ingrese sun nombre")
// const nombre2= prompt("ingresa tu nombre 2")


// alert(`bienevenido ${nombre} , ${nombre2}`)

// function saludo(nombre) {
//     return `hola ${nombre}`

// }
// alert(`estamos saludando ${saludo(nombre)}`)



const materia= {
    nombre: "ingles",
    profesor: "jose",
    nota: 9.5,
    intencidad:"10 horas"
}
console.log(materia)

const materia2= {
    materia: "español",
    profesor: "sandra",
    intencidad:"10 horas"

}
console.log(materia2)

const materia3= {...materia2};
materia3.nombre= "matematicas";
materia3.profesor="juana";

console.log(materia3)

// arrays

const arreglo= new Array(10);
arreglo.push(2);

console.log(arreglo)



const materias= ['html','json','css','js','xampp' ];

console.table(materias)

let materias2= [...materias];
materias2[0]='MATEMATICAS';
materias2[3]='SOSCIALES';

materias2.push('php');
console.table(materias2);


const numeros=[1,2,3,4,5,6,7,8,9,10];
let numeros2= [...numeros];
const numeros3= numeros.map(function(numeros){return numeros*2 });
console.table(numeros3);



