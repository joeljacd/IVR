<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class RazonBeca2 extends Model
{

    protected $table = 'sene_segundarazonbecaid';
    use SoftDeletes;
    protected $dates = [ 'deleted_at'];

    protected $fillable = [
        'id',
        'etiqueta',
        'id_usu_cre',
        'fecha_cre',
        'id_usu_mod',
        'fecha_mod'

    ];
}
