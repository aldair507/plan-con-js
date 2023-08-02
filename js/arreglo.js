// desustructuracionb
const aprendiz={
    nombre:'aldair',
    apellido:'torres',
    edad:19,
    ficha:2556678,
    programa:'adso'
};
// console.log(aprendiz.apellido, aprendiz.edad);

// const {nombre, programa} = aprendiz;
// console.log(programa);
// console.log(nombre);


const retornarvalor= () =>(aprendiz.nombre +" " + aprendiz.apellido +" " + aprendiz.edad +"");
console.table(retornarvalor());