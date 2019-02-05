$(document).ready(function(){
	cateMigratoria(0);
	discapacidad(0);
	hablaIdiomaAncestral(0,'hab_idi');

	fechaPicker('fechaini');

	$('.dropdown-submenu a.test').on("click", function(e){
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
	});
});


//configuracion de calendario
function fechaPicker(nombre){
	$('#'+nombre).datepicker({
	    format: "dd/mm/yyyy",
	    language: "es",
	    autoclose:true,

	});
}

//cambiar a fecha local
function cambiarFormatoFecha(nombre){
    var fecha = $('#'+nombre).val();
    var partes = fecha.split("/",3);
    var fechan = partes[2]+"-"+partes[1]+"-"+partes[0];
    console.log(fechan);
    $('#fecha'+nombre).val(fechan);
}

//Carga las diferentes vistas en el tabcontrol
function cargarVistaInfPer() {
	ruta = ruta_global+'/docentes/main/infPer';
	getAjax(ruta);
}

function cargarVistaInfAcayLab() {
	ruta = ruta_global+'/docentes/main/infAcadLab';
	getAjax(ruta);
}

function cargarVistaInfBeca() {
	ruta = ruta_global+'/docentes/main/infBeca';
	getAjax(ruta);
}


//Esconde el contenedor de Habla Idioma Ancestral
function hablaIdiomaAncestral(item,opcion) {
    op = $('option:selected', item).attr('data-'+opcion);
    //console.log(op);
    if(op == 0 || op == 2 || item == 0)
        $("#idiAnce").hide();
    else
        $("#idiAnce").show();
}

/*Esconde el contenedor de opciones de categoria migratoria en la vista docente información personal*/
function cateMigratoria(item) {
    if (item != 0) 
		op = $('option:selected', item).attr('data-migratoria');	
	else
		op = 0;
    if(op == 0 || op == 1)
        $("#contenedorMigratorio").hide();
    else
        $("#contenedorMigratorio").show();
}

/*Esconde el contenedor de opciones de discapacidad en la vista docente información personal*/
function discapacidad(item) {
	if (item != 0) 
		op = $('option:selected', item).attr('data-discapacidad');	
	else
		op = 0;
    //console.log(op);
    if(op == 0 || op == 2)
        $(".discapacidad").hide();
    else
        $(".discapacidad").show();
}

//Dependiente sea la opcion escogida carga sus provincias
//Combobox de Pais
function paises(item,idSelect,opcion) {
    //op = item.value;
     op = $('option:selected', item).attr('data-'+opcion);
    console.info(op);
    if (op != 0){
        llenarCbx(idSelect,op,'/docentes/provincias');
    }
}

//Dependiente sea la opcion escogida carga sus cantones
//Combobox de Provincias
function cantones(item,idSelect,opcion) {
	//provincia = item.value;
	op = $('option:selected', item).attr('data-'+opcion);
	console.log(op);
    if (op != 0){
        llenarCbx(idSelect,op,'/docentes/cantones');
    }
}


//Llena los comboBox que se envia por parametro
function llenarCbx(idSelect, dato, url) {
    headerAjax();
 
    $.ajax({
        url: ruta_global+url,
        type: 'post',
        dataType: 'json',
        data: {'id' : dato},
        success: function (data) {
            //console.info(data);
            $('#'+idSelect).empty();
            $('#'+idSelect).append("<option value='' data-"+idSelect+"='0'>--Seleccione--</option>");
            $.each(data, function (i,item){
                $('#'+idSelect).append("<option value='"+item.etiqueta+"' data-"+idSelect+"='"+item.id+"'>"+item.etiqueta+"</option>");
            });
        }
    });
}
//Ejecuta y carga la vista
function getAjax(ruta) {
	headerAjax();
	$.ajax({
		url: ruta,
		type: 'post',
		success:function(data){
			$(".tab-content").empty();
			$(".tab-content").append(data);
		}
	});
}

function headerAjax(){
	$.ajaxSetup({
  		headers: {
    		'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
  		}
	});
}