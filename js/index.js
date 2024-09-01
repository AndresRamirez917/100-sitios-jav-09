async function getData(){
    const result = await fetch('https://rickandmortyapi.com/api/character');
    const result2 = await fetch('https://fakestoreapi.com/products/');
    const txtProducts = await result2.json()
    const images = await result.json();
    console.log(images)
    console.log(txtProducts)
    images.results.forEach(element => {
        if(element.id <=4){
    
                const card = document.createRange().createContextualFragment(`
                
                    <div class="card-1">
                       <img src="${element.image}" alt="">
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora at laudantium officia, optio earum blanditiis? Beatae, fuga eaque. Officia eaque quis possimus ipsum eos aliquam repellat, dolore blanditiis. Odio, ullam?</p>
                   </div>  
                   `)
             
                   const features_row = document.querySelector('.features-row')
                   features_row.append(card)
        }
    });

    txtProducts.forEach(element => {
        if( element.category == "electronics"){
            const card = document.createRange().createContextualFragment(`

                     <p>${element.title}</p>

               `)
         
               const features_row = document.querySelector('.about-left')
               features_row.append(card)
        }
    })
}


const btn_validar = document.getElementById('btn-validar')
const valida = (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre')
    const email = document.getElementById('email')
    const mensaje = document.getElementById('mensaje')
    const fecha = document.getElementById('fecha')
    const hora = document.getElementById('hora')
    let arr = [];
    let arr2 = ["nombre", "email", "fecha", "hora", "mensaje"]

    arr.push(nombre, email, fecha, hora, mensaje )
    for(i = 0; i < arr.length; i++){
        for(i = 0; i < arr2.length; i++){
            if(arr[i].value == ""){
                alert(`El campo ${arr2[i]} no puede estar vacío`)
                console.log(arr2[i])
                return false;
            }
        }
        if(!email_valido(email.value)){
            alert("El formato de correo no es válido")
            return false;
        }
       nombre.value = "";
       email.value = "";
       fecha.value = "";
       hora.value  = "";
       mensaje.value = "";
        return true;
    }

}
const email_valido = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
getData()
btn_validar.addEventListener("click", valida)