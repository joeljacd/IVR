@extends('layouts.principal')
@section('content')
<div id="content-wrapper">
    <div class="container-fluid">
        	<div class="row">
        		<div class="col-md-4">
        			{!! Form::open(['url' => 'admin/razon6', 'method' => 'POST']) !!}
					<div class="card mb-3">
						<div class="card-header">
							<i class="fas fa-table"></i>
							Razón 6</div>
						<div class="card-body">
							<label>Nombre de Etiquetas</label>
							<input class="form-control" type="text" name="etiqueta" required pattern="[A-Za-zá-úÁ-Ú ]+">
							<button class="btn btn-success btn-block mt-3">Aceptar</button>
						</div>
					</div>
					{!! Form::close() !!}
					@include('mensaje.mensajeerror')
        		</div>
        		<div class="col-md-8">
        				<div class="card mb-3">
				            <div class="card-header">
				              <i class="fas fa-table"></i>
				              Sexta Razón</div>
				            <div class="card-body">
				              <div class="table-responsive">
				                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
				                  <thead>
				                    <tr>
										<th>Etiqueta</th>
										<th>Creado</th>
										<th>Modificado</th>
										<th>Editar</th>
										<th>Estado</th>		
									</tr>
				                  </thead>
				                  <tbody>
				                	@foreach($data as $datas)
									<tr>
										<td>{{$datas->etiqueta}}</td>
										<td>{{$datas->fecha_cre}}</td>
										<td>{{$datas->fecha_mod}}</td>
										<td>
											@if($datas->deleted_at!='')
												{!!link_to_route('razon6.edit', $title = 'Editar', $parameters = $datas->id, $attributes = ['class'=>'btn btn-warning disabled']);!!}
											@else
												{!!link_to_route('razon6.edit', $title = 'Editar', $parameters = $datas->id, $attributes = ['class'=>'btn btn-warning']);!!}
											@endif
										</td>
										<td>
											@if($datas->deleted_at!='')
												<a class="btn btn-primary btn-block" href="razon6/{{$datas->id}}/restaurar">Restaurar</a>
											@else
												{!! Form::open(['route' => ['razon6.destroy',$datas->id],'method'=>'DELETE']) !!}
												<div class="form-group">
													{!!Form::submit('Desactivar',['class'=>'btn btn-danger btn-block'])!!}
												</div>
												{!! Form::close() !!}
											@endif
										</td>
									</tr>
								@endforeach
				                  </tbody>
				                </table>
				              </div>
				            </div>
		          		</div>  <!--fin del card-3 -->
        		</div>
        	</div>
	</div>
</div>
@endsection