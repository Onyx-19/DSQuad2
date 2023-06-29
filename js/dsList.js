let list = document.getElementById("list")
// import {viewListM} from './members/listMembers.js'               // __________

let viewListM = document.getElementById("viewListM")                // Borrar hasta line 55 y cambiar el script en html
viewListM.addEventListener("click", async ()=>{ 

    list.innerHTML = ``

    const url = await fetch("http://localhost:3000/miembros")
    const data = await url.json()

    data.forEach(element => {
        const {nombre, estatus, afiliaciones, escuadron, imagen} = element
          
        let status
        if(estatus == 0 || estatus == null || estatus >= "6"){
            status = "#FFFFFF" // Indefinido
        }else if(estatus == 1){
            status = "#ADFF2F" // activo
        }else if(estatus == 2){
            status = "#FFFF00" // inactivo
        }else if(estatus == 3){
            status = "#FF0000" // muerto
        }else if(estatus == 4){
            status = "#c0c0c0" // retirado
        }else if(estatus == "5"){
            status = "#4926c9" // Desaparecido
        }

        list.innerHTML += `
            <div class="divCharacter">
            <div class="divImg">
                <img class="imgCharacter" src="${imagen}" alt="">
            </div>
            <div class="detail">
                <div class="div1">
                    <h2>${nombre}</h2>
                    <p id="estatus" style="background-color:${status}"></p>
                </div>
                <div class="div2">
                    <div class="div2_1">
                        <h3>Escuadron</h3>
                        <h4>${escuadron}</h4>
                    </div>
                    <div class="div2_1">
                        <h3>Afiliaciones</h3>
                        <h4>${afiliaciones}</h4>
                    </div>
                </div>
            </div>
        `   
    })
})                                                                  // Borrar hasta aqui


let addListM = document.getElementById("addListM")
addListM.addEventListener("click", () => {
    
})
