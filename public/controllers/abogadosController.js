angular.module('abogadosModule', ['configurationModule', 'modelModule', 'selectModule', 'confirmModule', 'defaultselectModule'])
       .controller('abogadosController', function($scope, $http, $timeout, $route,  $http, $myConfiguration, $model){
              $scope.idSelectedRow = null;
              
              $scope.setSelectedRow = function (idSelected) {
                 $scope.idSelectedRow = idSelected;
              };
              
              $scope.CmdSave = true;
              $scope.CmdUpdate = false;
              $scope.loader = false;

              $scope.formData = {};
              $scope.abogados = [];
              
              $scope.formData.derecho = {
                     val : null,
                     text : null
              }
              
              $scope.formData.nombres ='';
              $scope.formData.apellidos = '';
              $scope.formData.fechaNacimiemto = '';
              $scope.formData.derechos = [];
              $scope.formData.password = '';
              
              $scope.formData.derechosStack = [];
              
              $scope.pushDerechoOnStack = function(derecho){
                     if(!derecho.val || $scope.exist(derecho)){
                            return;
                     }
                     
                  $scope.formData.derechosStack.push(derecho);   
              }
              
              $scope.popDerechoOnStack = function(id){
                     angular.forEach($scope.formData.derechosStack, function(derecho, index){
                            if(derecho._id === id){
                                   $scope.formData.derechosStack.splice(index, 1);
                            }
                     });
              }
              
              $scope.exist = function(target){
                     angular.forEach($scope.formData.derechosStack, function(derecho, index){
                            return derecho._id === target._id ? true : false;
                     });
              }
              
              $scope.clearDerechosStack = function(){
                     if($scope.formData.derechosStack.length > 0){
                            $scope.derechosStack.length = 0;
                     }
              }

              $scope.new = function(){
                     $scope.CmdSave = true;
                     $scope.CmdUpdate = false;
                     $scope.idSelectedRow = null;
                     
                     $scope.clearselection();
              }

              $scope.clearselection = function(){
                     $scope.CmdSave = true;
                     $scope.CmdUpdate = false;
                     
                     $scope.formData.nombres ='';
                     $scope.formData.apellidos = '';
                     $scope.formData.fechaNacimiemto = '';
                     $scope.formData.derechos.length = 0;
                     $scope.formData.password = '';
              }

              $model.CRUD.Select('abogados').success(function(data, status){
                     $scope.abogados = data;      
              });

              $scope.submitForm = function(){
                     $model.CRUD.Create({
                            resource : 'abogados/',
                            data     : $scope.formData
                     }).success(function(data, status){
                            if(data){
                                   $scope.addRow(data);
                            }
                     });
              }
              
              $scope.addRow  = function(data){
                     $scope.abogados.push(data);
                     $scope.clearselection();
              }
              
              $scope.editRow = function(row){
                     if(!row){
                            return;
                     }

                     $scope.setSelectedRow(row._id);
                     $scope.CmdSave = false;
                     $scope.CmdUpdate = true;
                     
                     $scope.formData._id = row._id;
                     $scope.formData.nombres = row.nombres,
                     $scope.formData.apellidos = row.apellidos;
                     $scope.formData.email = row.email;
                     $scope.formData.telefono = row.telefono;
                     $scope.formData.fechaNacimiemto = row.fechaNacimiemto;
                     $scope.formData.derechos = row.derechos;
                     $scope.formData.password = row.password;

              }
              
              $scope.update = function(){
                     $scope.loader = true;
                     $model.CRUD.Update({
                            resource : 'tipoCliente/',
                            id       : $scope.formData._id,
                            data : $scope.formData     
                     }).success(function(data, status){
                            $model.CRUD.Select('tipoCliente').success(function(data, status){
                                   $scope.tipoClientes = data; 
                                   $scope.loader = false;
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
                                          resource : 'tipoCliente',
                                          id:id
                                   }).success(function(data, status){
                                          angular.forEach($scope.tipoClientes, function(tipoCliente, index){
                                                 if(tipoCliente._id == id){
                                                        $scope.tipoClientes.splice(index, 1);
                                                 }
                                          });
                                   });
                            }
                     }).modal('show');
              }
              
       });