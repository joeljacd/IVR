@extends('layouts.principal')
@section('content')
<div id="content-wrapper">
    <div class="container-fluid">
    	<div class="row">
    		<div class="col-md-12">
    			<a href="MallasMaterias/create" class="btn btn-primary">Crear</a>
    		</div>
    	<div class="row">
    		<div class="col-md-12">
    			<select class="form-control" id="selectcarrera" onchange="carrera(this)">
    					<option value="0">-------Buscar---------</option>
    				@foreach($getdatos['materia'] as $getdato)
    					<option value="{{$getdato->id}}">{{$getdato->nombre_materia}}</option>
    				@endforeach
    			</select>
    		</div>	
    	</div>
    	</div> <br>
        <div class="row">
        	<div class="col-md-12">
        		<div class="card mb-6">
		            <div class="card-header">
				              <i class="fas fa-table"></i>
				              Mallas Carreras</div>
		            <div class="card-body">
		              <div class="table-responsive">
		                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
		                  <thead>
		                    <tr>
								<th>Malla</th>
								<th>Materia</th>
								<th>Nivel</th>
								<th>Operativa sn</th>
								<th>n° de horas semanales</th>
								<th>n° de horas totales</th>
								<th>Editar</th>
								<th>Estado</th>	
								<th>Pre_requisitos</th>
								<th>Co_requisitos</th>		
							</tr>
		                  </thead>
		                  <tbody>
				                	@foreach($data as $datas)
									<tr>
										<td>{{$datas->nombre_malla}}</td>
										<td>{{$datas->nombre_materia}}</td>
										<td>{{$datas->etiqueta}}</td>
										<td>{{$datas->optativa_sn}}</td>
										<td>{{$datas->num_horas_semanas}}</td>
										<td>{{$datas->num_horas_totales}}</td>
										<td>
											@if($datas->deleted_at!='')
												{!!link_to_route('MallasMaterias.edit', $title = 'Editar', $parameters = $datas->id, $attributes = ['class'=>'btn disabled']);!!}
											@else
												{!!link_to_route('MallasMaterias.edit', $title = 'Editar', $parameters = $datas->id, $attributes = ['class'=>'btn btn-warning']);!!}
											@endif
										</td>
										<td>
											@if($datas->deleted_at!='')
												<a class="btn btn-primary btn-block" href="MallasMaterias/{{$datas->id}}/restaurar">Restaurar</a>
											@else
													{!! Form::open(['route' => ['MallasMaterias.destroy',$datas->id],'method'=>'DELETE']) !!}
											    <div class="form-group">
											    	{!!Form::submit('Desactivar',['class'=>'btn btn-danger btn-block'])!!}
											    </div>
											    {!! Form::close() !!}
											@endif
										</td>
										<td>
											<button value="{{$datas->id_malla}}" OnClick='Mostrar(this);' class='btn btn-info' data-toggle='modal' data-target='#prerequisitos'>Agregar</button>
										</td>
										<td></td>
									</tr>
								@endforeach
				                  </tbody>
				                   @include("admin.AcadMallasMaterias.modal_prerequisitos")
				                </table>
				              </div>
				            </div>
		          		</div>  <!--fin del card-3 -->

        	</div>
        </div>
    </div>
</div>
@endsection
@section('script')
<script type="text/javascript" src="{{ asset('js/ajax/MallasMaterias.js') }}"></script>
@endsection