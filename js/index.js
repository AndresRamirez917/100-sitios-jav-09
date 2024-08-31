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
    let arr = [];
    arr.push(nombre, email, mensaje)
    console.log(arr)
    console.log("madre")
    for(i = 0; i < arr.length; i++){
        console.log(arr[i])
        if(arr[i].value == ""){
            alert("El campo no puede estar vacío")
            return false;
        }
        //return true;
    }

}

getData()
btn_validar.addEventListener("click", valida)