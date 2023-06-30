export let addListM = document.getElementById("addListM")
addListM.addEventListener("click", () => {
    
    list.innerHTML = 
    `        
        <form action="" class="FormAddMiembro">
            <div class="addMiembro">
                <div class="div1AddMiembro">
                    <div class="div1_1AddMiembro">
                        <label for="">Nombre:</label>
                        <input type="text">
                    </div>
                    <div class="div1_1AddMiembro">
                        <label for="">Estatus:</label>
                        <select>
                            <option>Indefinido</option>
                            <option>Activo</option>
                            <option>Inactivo</option>
                            <option>Muerto</option>
                            <option>Retirado</option>
                            <option>Desaparecido</option>
                        </select>
                    </div>
                    <div class="div1_1AddMiembro">
                        <label for="">Escuadron:</label>
                        <select>
                            <option>Opciones del array</option>
                            <option>Opciones del array</option>
                        </select>
                    </div>
                    <div class="div1_1AddMiembro">
                        <label>Afiliaciones:</label>
                        <select>
                            <option>Opciones del array</option>
                            <option>Opciones del array</option>
                        </select>
                    </div>
                    <div class="div1_1AddMiembro">
                        <label>Imagen:</label>

                        <input type="text">
                    </div>
                </div>
                <div class="div2AddMiembro">
                    <label>Habilidades:</label>
                    <div class="div2_2AddMiembro">
                        <input type="checkbox" class="mark">Opciones del array</input>
                    </div>
                    <div class="div2_2AddMiembro">
                        <input type="checkbox" class="mark">Opciones del array</input>
                    </div>
                </div>
            </div>
            <div class="divBtnAddMemeber">
                <button class="btnAddMemeber">Guardar</button>
            </div>
        </form>
    `
})