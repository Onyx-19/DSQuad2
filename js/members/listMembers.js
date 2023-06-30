export let viewListM = document.getElementById("viewListM")
viewListM.addEventListener("click", async ()=>{ 

    let list = document.getElementById("list")
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

        list.innerHTML += 
        `
            <div class="divMiembro">
            <div class="divImgMiembro">
                <img class="imgMiembro" src="${imagen}" alt="">
            </div>
            <div class="detailMiembro">
                <div class="div1Miembro">
                    <h2>${nombre}</h2>
                    <p id="estatus" style="background-color:${status}"></p>
                </div>
                <div class="div2Miembro">
                    <div class="div2_1Miembro">
                        <h3>Escuadron</h3>
                        <h4>${escuadron}</h4>
                    </div>
                    <div class="div2_1Miembro">
                        <h3>Afiliaciones</h3>
                        <h4>${afiliaciones}</h4>
                    </div>
                </div>
            </div>
        `   
    })
})
