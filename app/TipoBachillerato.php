<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TipoBachillerato extends Model
{
	use SoftDeletes; //Implementamos

    protected $dates = ['deleted_at'];
    protected $table='sene_tipobachillerato';
    protected $fillable = [
        'id','etiqueta','id_usu_cre','fecha_cre','id_usu_mod','fecha_mod',
    ];
}
