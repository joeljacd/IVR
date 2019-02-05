$(document).ready(function () {
    becaDocente();
    publicacionRev();
    getFecha();
<<<<<<< HEAD
    /*$('.dropdown-submenu a.test').on("click", function(e){
=======
    cateMigratoria(2);

    $('#datepicker1').datepicker({
      format: "dd/mm/yyyy",
      language: "es",
      autoclose: true,
      defaultViewDate: { year: 1990, month: 0, day: 0 }
    });


    $('.dropdown-submenu a.test').on("click", function(e){
>>>>>>> aeef5e8cb802e61f86ab9c296393074a43fc8157
            $(this).next('ul').toggle();
            e.stopPropagation();
            e.preventDefault();
          });

          /*  $('#datepicker1').datepicker({
                format: 'yyyy/mm/dd',
            });*/

            $('#datepicker2').datepicker({
                uiLibrary: 'bootstrap4',
                format: 'yyyy/mm/dd',
                startDate: '-3d',
            });

            $('#datepicker3').datepicker({
                uiLibrary: 'bootstrap4',
                format: 'yyyy/mm/dd',
                startDate: '-3d',
            });*/
});



//funcion que muestra u oculta contenedores para casos de elección SI o NO
function S_o_N(elemento,contenedor) {
    var op = $(elemento).val();
    console.info(op);
    if(op === 'NO' || op === 'SELECCIONE')
        $(contenedor).hide();
    else
        $(contenedor).show();
}

//Retorna la edad mediante la fecha de nacimiento
function getFecha() {
    var fe = $("#datepicker1").val();
    var fecha = new Date();
    var anioAct = fecha.getFullYear();
    if(fe.length > 0){
        var anioNac = fe.split("/");
        var cadena = anioNac[2] + anioNac[1] + anioNac[0];
        //console.log(cadena);
        var edad = calcularEdad(cadena);
        //console.log(edad)
        $("#edad").val(edad);
    }
}

function calcularEdad(dob) {
    var year = Number(dob.substr(0, 4));
    var month = Number(dob.substr(4, 2)) - 1;
    var day = Number(dob.substr(6, 2));
    var today = new Date();
    var age = today.getFullYear() - year;
    if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
        age--;
    }
    return age;
}




function discapacidad() {
    var op = $("#tDisc").val();
    //console.log(op);
    if(op == 0 || op == 2)
        $(".discapacidad").hide();
    else
        $(".discapacidad").show();
}

function cursaEstSupe() {
    var op = $("#curEstSup").val();
    //console.log(op);
    if(op === '--Seleccione--' || op === 'NO')
        $("#instCursa").hide();
    else
        $("#instCursa").show();
}

function becaDocente() {
    var op = $("#poseeBeca").val();
    //console.info(op);
    if(op === 'SELECCIONE' || op === 'NO')
        $("#beca").hide();
    else
        $("#beca").show();
}

function publicacionRev() {
    var op = $("#pubRev").val();
    if(op == 0 || op == 2)
        $("#nroPubRev").hide();
    else
        $("#nroPubRev").show();
}
//___________________________________________



//______________________________________________________

//ComboBox de Pais Residencia
function paisRes() {
    var op1 = $("#paisResi").val();
    console.log(op1);
    if (op1 != 0){
        llenarCbx("#provResi",op1,'/docentes/provincias');
    }
}

function cantonResi() {
    var op2 = $("#provResi").val();
    console.log(op2);
    if (op2 != 0){
        llenarCbx("#cantResi",op2,'/docentes/cantones');
    }
}

//___________________________________________________________-



function cargar() {

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    $.ajax({
        type: 'post',
        url: ruta_global+'/docentes/infAcademica',
        dataType: 'json',
        success: function (data) {
            console.info(data);
            $("#relLab").empty();
            $.each(data, function (i, item) {
                $("#relLab").append("<option values='"+item.etiqueta+"' data='"+item.id+"'>"+item.etiqueta+"</option>");
            })
        }
    });
}
