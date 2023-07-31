
console.log(email);
console.log(password);
const enviar = document.getElementById('enviar');
console.log(enviar);

function validarcorreo(correo) {
    const valida= /@/;

    return valida.test(correo);
}

enviar.addEventListener('click',()=>{
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
   
    
        
    function inicio( ){

        if( !validarcorreo(email)){
            alert ('Error');
            return;
        }
         

        if( email=="admin@gmail.com"  && password=="12345678" ){
            document.body.style.backgroundColor='red';
            alert(`bienvenido ${email}`)
        
        } 
        else if ( email=="jose@gmail.com" && password=="12345678"){
            document.body.style.backgroundColor='green';
           alert(`bienvenido ${email}`)

        }  else if( password.length <8){
            alert("maximo 8 caracteres")

        }else if( email && password){
            alert(`bienvenido ${email}`)
            document.body.style.backgroundColor='yellow';
        }

       
    }
    inicio();

});





   


