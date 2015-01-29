angular.module('asesoriaModule', ['configurationModule', 'modelModule','confirmModule', 'defaultselectModule'])
       .controller('asesoriaController', function($scope, $http, $timeout, $route,  $http, $myConfiguration, $model, $estadosService){
              $scope.idSelectedRow = null;
              
              $scope.setSelectedRow = function (idSelected) {
                 $scope.idSelectedRow = idSelected;
              };
              
              $scope.CmdSave = true;
              $scope.CmdUpdate = false;
              $scope.loader = false;
              $scope.derechos = [];
              $scope.formData = {};
              $scope.formData.referencia = '';
              $scope.formData.valor = 0;
              $scope.formData.estado  = {
                     val : null,
                     text : null
              }
              
              $scope.formData.derechosStack = [];
              
              $scope.pushDerechoOnStack = function(derecho){
                     if(!derecho.val || !derecho.text || $scope.exist(derecho)){
                            return;
                     }
                     
                  $scope.formData.derechosStack.push(derecho);   
              }
              
              $scope.popDerechoOnStack = function(id){
                     angular.forEach($scope.formData.derechosStack, function(derecho, index){
                            if(derecho._id == id){
                                   $scope.formData.derechosStack.splice(index, 1);
                            }
                     });
              }
              
              $scope.exist = function(target){
                     angular.forEach($scope.formData.derechosStack, function(derecho, index){
                            return derecho._id == target._id ? true : false;
                     });
              }
              
              $scope.clearDerechosStack = function(){
                     if($scope.formData.derechosStack.length > 0){
                            $scope.derechosStack.length = 0;
                     }
              }
              
              $scope.formData.derecho = {
                     val : null,
                     text : null,
              };
              
              $scope.new = function(){
                     $scope.CmdSave = true;
                     $scope.CmdUpdate = false;
                     $scope.idSelectedRow = null;
                     
                     $scope.clearselection();
              }

              $scope.clearselection = function(){
                     $scope.CmdSave = true;
                     $scope.CmdUpdate = false;
                     $scope.formData.asesoria = '';
                     $scope.formData.descripcion = '';
                     $scope.formData.urlProducto = '';
                     $scope.formData.valor = 0;
                     $scope.formData.referencia = '';
                     $scope.formData.estado  = {
                            val : null,
                            text : null
                     }
                     
                     $scope.formData.derechosStack.length = 0;
              }

              $model.CRUD.Select('asesoria').success(function(data, status){
                     $scope.asesorias = data;      
              });
              
              $model.CRUD.Select('derechos').success(function(data, status){
                  $scope.derechos = data;
              });
              
              $scope.submitForm = function(){
                     $scope.loader = true;
                     
                     $model.CRUD.Create({
                            resource : 'asesoria/',
                            data     : $scope.formData
                     }).success(function(data, status){
                            if(data){
                                   $timeout(function(){
                                          $scope.loader = false
                                          $scope.addRow(data);
                                   }, 3000);
                            }
                     });
              }
              
              $scope.addRow  = function(data){
                     $scope.asesorias.push(data);
                     $scope.formData.descripcion = '';
                     $scope.formData.asesoria = '';
                     $scope.formData.referencia = '';
                     $scope.formData.valor = 0;
                     $scope.formData.estado  = {
                            val : null,
                            text : null
                     }
                     $scope.formData.urlProducto = '';
              }
              
              $scope.editRow = function(row){
                     if(!row){
                            return;
                     }
                     $scope.setSelectedRow(row._id);
                     $scope.CmdSave = false;
                     $scope.CmdUpdate = true;
                     
                     $scope.formData._id = row._id;
                     $scope.formData.asesoria = row.asesoria;
                     $scope.formData.descripcion = row.descripcion;
                     $scope.formData.derechosStack = row.derechos;
                     $scope.formData.valor = row.valor;
                     $scope.formData.referencia = row.referencia;
                     $scope.formData.estado  = {
                            val : row.estado['_id'],
                            text : row.estado['descripcion']
                     }

              }
              
              $scope.update = function(){
                     $scope.loader = true;
                     $model.CRUD.Update({
                            resource : 'asesoria/',
                            id       : $scope.formData._id,
                            data : $scope.formData     
                     }).success(function(data, status){
                            $model.CRUD.Select('asesoria').success(function(data, status){
                                   $scope.asesorias = data;
                                   
                                   $timeout(function(){
                                          $scope.loader = false

                                   }, 3000);

                                   $scope.clearselection();
                            });
                     });
              }
              
              $scope.removeRow = function(id){
                     $('.basic.test.modal').modal({
                            onDeny : function(){
                                   
                            },
                            onApprove : function(){
                                   $model.CRUD.Delete({
                                          resource : 'asesoria',
                                          id:id
                                   }).success(function(data, status){
                                          angular.forEach($scope.asesorias, function(asesoria, index){
                                                 if(asesoria._id == id){
                                                        $scope.asesorias.splice(index, 1);
                                                 }
                                          });
                                   });
                            }
                     }).modal('show');

              }
              
       });
