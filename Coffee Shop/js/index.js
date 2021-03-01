function initElemenstIU() {
    InitComponents();
}
function InitComponents() {
    callObtenerProductos();
}
function callObtenerProductos() {
    console.log("Invoco a los productos...")
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts/42", //listarDependencia
        type: "get",
        dataType: "json",
        cache: false,
        /*
        beforeSend: function () {
            // $("#numeroControlAU").lockControl({ message: "Consultando dependencias, espere por favor...", fadeIn: 0, baseZ: 2000 });
            $.blockUI({ message: "Consultado productos...", fadeIn: 0, baseZ: 2000 });
        },
        complete: function () {
            //$("#numeroControlAU").unlockControl();
            $.unblockUI();
        },
        */
        success: function (result) {

            console.log("invocar el ajax ....");
            var contenido = [];
            var dataJSON = {};
            dataJSON.link = "https://images.unsplash.com/photo-1468418143278-41595b1a4c89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80";
            dataJSON.title = 'Capucchino';
            dataJSON.description = 'This hot drink was made with...';
            dataJSON.post = 'Last updated 3 mins ago';
            contenido[0] = dataJSON;
           
            var dataJSON2 = {};
            dataJSON2.link = "https://images.unsplash.com/photo-1563201180-1c57435ae249?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80";
            dataJSON2.title = 'Express Coffee';
            dataJSON2.description = 'This hot drink was made with...';
            dataJSON2.post = 'Last updated 3 mins ago';
            contenido[1] = dataJSON2;

            var dataJSON3 = {};
            dataJSON3.link = "https://images.unsplash.com/photo-1421882402971-b18cd1741ac6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1188&q=80";
            dataJSON3.title = 'Chocolate';
            dataJSON3.description = 'This hot drink was made with...';
            dataJSON3.post = 'Last updated 3 mins ago';
            contenido[2] = dataJSON3;


            var listado = ["titulo1","titulo 2","titulo 3"];

            showListGroup(listado);
            showListCards(contenido);
            showListPasteles(cargarPasteles());
            console.log(dataJSON);
        },
        error: function (xhr, status, text) {
            consoleLog("Error callObtenerDependenciasJSON");
            //AlertDialog.showAJAXError(xhr, status, text);
        }
    });
}

function cargarPasteles(){
    var contenido = [];
            var dataJSON = {};
            dataJSON.link = "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=680&q=80";
            dataJSON.title = 'Torta de chocolate';
            dataJSON.description = 'Delicious cake of chocolate';
            dataJSON.post = 'Last updated 3 mins ago';
            contenido[0] = dataJSON;
           
            var dataJSON2 = {};
            dataJSON2.link = "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGNha2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
            dataJSON2.title = 'Tricolor cake';
            dataJSON2.description = 'Delicious cake with three flavors';
            dataJSON2.post = 'Last updated 3 mins ago';
            contenido[1] = dataJSON2;

            var dataJSON3 = {};
            dataJSON3.link = "https://images.unsplash.com/photo-1574085733277-851d9d856a3a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80";
            dataJSON3.title = 'Tricolor cake';
            dataJSON3.description = 'Delicious cake with three flavors';
            dataJSON3.post = 'Last updated 3 mins ago';
            contenido[2] = dataJSON3;

    return contenido;
}
function showListGroup(data) {
    var htmlElement = "";
	for (var i = 0; i < data.length; i++) {
        var item = data[i];
        htmlElement += `<li class="list-group-item">${item}</li>`
    }
    $("#list-group").html(htmlElement);

}
function showListCards(data){
    var htmlElement = "";
	for (var i = 0; i < data.length; i++) {
        var item = data[i];
        htmlElement += `<div class="col-sm-4">
        <div class="card mb-3">
            <img src="${item.link}"
                class="card-img-top" alt="..." style="height:200px;">
            <div class="card-body">
                <h5 class="card-title"><button type="button" class="btn btn-primary" data-toggle="modal" 
                data-target="#staticBackdrop">
                ${item.title}
              </button></h5>
                <p class="card-text">${item.description}</p>
                <p class="card-text"><small class="text-muted">${item.post}</small></p>
            </div>
        </div>
        </div>`
    }
    $("#list-drinks").html(htmlElement);

}

function showListPasteles(data){
    var htmlElement = "";
	for (var i = 0; i < data.length; i++) {
        var item = data[i];
        htmlElement += `<div class="col-sm-4">
        <div class="card mb-3">
            <img src="${item.link}"
                class="card-img-top" alt="..." style="height:200px;">
            <div class="card-body">
                <h5 class="card-title"><button type="button" class="btn btn-primary" onclick="showModalDetalle('${item.title}','${item.description}','${item.link}');">${item.title}</button></h5>
                <p class="card-text">${item.description}</p>
                <p class="card-text"><small class="text-muted">${item.post}</small></p>
            </div>
        </div>
        </div>`
    }
    $("#list-postres").html(htmlElement);

}

function showModalDetalle(title,description,link){
   
    console.log("invocando al modal");
    $('#imagenProducto').attr("src",link);
    $("#modalTitle").text(title);
    $("#titulo").text(title);
    $("#contenido").text(description);

    
    $("#exampleModal").modal("show");

    /*
    $('#staticBackdrop').modal('show')

    $('#staticBackdrop').modal({
        keyboard: false
      });
      
      $('#staticBackdrop').modal('show');

    //$("#exampleModal").modal("show");
*/
}
