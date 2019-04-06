<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class AcadEstuLabEco extends Model
{
   	use SoftDeletes;

   	protected $dates = ['deleted_at'];
    protected $table = 'acad_est_inf_eco';
    protected $primaryKey = 'id';

    protected $fillable = [
        'id',
        'numIdentificacion',
        'practicasPre',
        'nroHorasPracticas',
        'entornoInstitucional',
        'sectorEconomico',
        'proyectoVinculacion',
        'alcanceProyecto',
        'estudianteocupacionId',
        'nombreEmpresa',
        'sectorEcoLaboral',
        'ingresosEstudiante',
        'bonodesarrolloId',
        'nivelFormacionPadre',
        'nivelFormacionMadre',
        'ingresoTotalHogar',
        'cantidadMiembrosHogar',
        'id_usu_cre',
        'fecha_cre',
        'id_usu_mod',
        'fecha_mod',
    ];
}