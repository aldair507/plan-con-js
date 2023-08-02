
// function datosmotoviajero() {

//     const cedula = document.getElementById("cedula").value;
//     const nombre = document.getElementById("nombre").value;
//     const apellido=document.getElementById("apellido").value;
//     const correo = document.getElementById("email").value;
//     const fecha = document.getElementById("fecha").value;

//     const motoviajero = { cedula,nombre,apellido,correo,fecha} 

//     return motoviajero;
 
// }


// function datosmoto() {
//     // datos de la moto

//     const placa=document.getElementById("placa").value;
//     const cilindraje=document.getElementById("cilindraje").value;

//     const moto={ placa,cilindraje}

//     return moto;
// }



// const form=document.getElementById("formulario");




// form.addEventListener('submit', (e)=>{
//     e.preventDefault();

//     if(fecha.value <='2005-08-02') {
//         alert("es mayor");
//         const recibir = datosmotoviajero();
//         const recibir2 = datosmoto();
//         console.log(`cedula: ${recibir.cedula}, nombre: ${recibir.nombre}, apellido: ${recibir.apellido}, correo:  ${recibir.correo}, fecha: ${recibir.fecha}`);

//      console.log(`placa: ${recibir2.placa}, cilindraje: ${recibir2.cilindraje}`);

//      const texto =document.getElementById('parrafo1');
//      texto.textContent=`cedula: ${recibir.cedula}, nombre: ${recibir.nombre}, apellido: ${recibir.apellido}, correo:  ${recibir.correo}, fecha: ${recibir.fecha}, placa: ${recibir2.placa}, cilindraje: ${recibir2.cilindraje}`;

//     }else{
//         alert("no es posible enviar el formulario");
//     }


    
// });

// localStorage.setItem('nombre','aldair')
// sessionStorage.setItem('nombre','jose')


const materias={
    nombre:'aldair',
    apellido:'torres',
    equipo:'barca'

}

const materiascasdena= JSON.stringify(materias);
console.log(materiascasdena);
localStorage.setItem("materias",materiascasdena);