let lista = []

function agregarCurso(){
    let nombre = document.getElementById("nombre").nodeValue;
    let descripcion = document.getElementById("descripcion").Value;
    let horas = document.getElementById("horas").Value;
    let fechai = document.getElementById("fechai").Value;
    let fechaf = document.getElementById("fechaf").nodeValue;

    lista.push([nombre, descripcion, horas, fechai, fechaf]);
    hacerTabla();

}


function hacerTabla(){
    let tabla= "<thead><th>Código</th><th>Nombre</th><th>Descripción</th><th>Horas</th><th>Fecha inicio</th><th>Fecha fin</th><th>Acción</th></thead><tbody>"
    for(let i=0; i<lista.length ; i++){
        tabla+='<th>${lista[i][0]</th> <th>${lista[i][1]</th>'
    }
    document.getElementById("cursos").innerHTML = cursos;
}




