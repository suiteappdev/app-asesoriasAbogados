{"filter":false,"title":"estadoAsesoriaController.js","tooltip":"/public/controllers/estadoAsesoriaController.js","undoManager":{"mark":100,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":11,"column":32},"end":{"row":11,"column":33},"action":"remove","lines":["["]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":32},"end":{"row":11,"column":33},"action":"insert","lines":["{"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":33},"end":{"row":11,"column":34},"action":"insert","lines":["}"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":34},"end":{"row":11,"column":35},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":35},"end":{"row":12,"column":0},"action":"insert","lines":["",""]},{"start":{"row":12,"column":0},"end":{"row":12,"column":14},"action":"insert","lines":["              "]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":30},"end":{"row":13,"column":44},"action":"remove","lines":["estadoAsesoria"]},{"start":{"row":13,"column":30},"end":{"row":13,"column":31},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":31},"end":{"row":13,"column":32},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":32},"end":{"row":13,"column":33},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":33},"end":{"row":13,"column":34},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":34},"end":{"row":13,"column":35},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":35},"end":{"row":13,"column":36},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":37},"end":{"row":44,"column":51},"action":"remove","lines":["estadoAsesoria"]},{"start":{"row":44,"column":37},"end":{"row":44,"column":38},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":38},"end":{"row":44,"column":39},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":39},"end":{"row":44,"column":40},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":40},"end":{"row":44,"column":41},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":41},"end":{"row":44,"column":42},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":42},"end":{"row":44,"column":43},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":37},"end":{"row":44,"column":43},"action":"remove","lines":["estado"]},{"start":{"row":44,"column":37},"end":{"row":44,"column":43},"action":"insert","lines":["estado"]}]}],[{"group":"doc","deltas":[{"start":{"row":61,"column":0},"end":{"row":72,"column":24},"action":"insert","lines":["                     $scope.loader = true;","                     $model.CRUD.Update({","                            resource : 'derechos/',","                            id       : $scope.formData._id,","                            data : $scope.formData     ","                     }).success(function(data, status){","                            $model.CRUD.Select('derechos').success(function(data, status){","                                   $scope.derechos = data; ","                                   $scope.loader = false;","                                   $scope.clearselection();","                            });","                     });"]}]}],[{"group":"doc","deltas":[{"start":{"row":63,"column":40},"end":{"row":63,"column":48},"action":"remove","lines":["derechos"]},{"start":{"row":63,"column":40},"end":{"row":63,"column":55},"action":"insert","lines":["estadoAsesorias"]}]}],[{"group":"doc","deltas":[{"start":{"row":67,"column":48},"end":{"row":67,"column":56},"action":"remove","lines":["derechos"]},{"start":{"row":67,"column":48},"end":{"row":67,"column":63},"action":"insert","lines":["estadoAsesorias"]}]}],[{"group":"doc","deltas":[{"start":{"row":68,"column":35},"end":{"row":68,"column":50},"action":"remove","lines":["$scope.derechos"]},{"start":{"row":68,"column":35},"end":{"row":68,"column":57},"action":"insert","lines":["$scope.estadoAsesorias"]}]}],[{"group":"doc","deltas":[{"start":{"row":40,"column":15},"end":{"row":41,"column":0},"action":"insert","lines":["",""]},{"start":{"row":41,"column":0},"end":{"row":41,"column":14},"action":"insert","lines":["              "]}]}],[{"group":"doc","deltas":[{"start":{"row":41,"column":14},"end":{"row":42,"column":0},"action":"insert","lines":["",""]},{"start":{"row":42,"column":0},"end":{"row":42,"column":14},"action":"insert","lines":["              "]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":14},"end":{"row":42,"column":15},"action":"insert","lines":["$"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":15},"end":{"row":42,"column":16},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":16},"end":{"row":42,"column":17},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":17},"end":{"row":42,"column":18},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":14},"end":{"row":42,"column":18},"action":"remove","lines":["$sco"]},{"start":{"row":42,"column":14},"end":{"row":42,"column":20},"action":"insert","lines":["$scope"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":20},"end":{"row":42,"column":21},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":21},"end":{"row":42,"column":22},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":22},"end":{"row":42,"column":23},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":23},"end":{"row":42,"column":24},"action":"insert","lines":["w"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":24},"end":{"row":42,"column":25},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":25},"end":{"row":42,"column":26},"action":"insert","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":26},"end":{"row":42,"column":27},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":27},"end":{"row":42,"column":28},"action":"insert","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":28},"end":{"row":42,"column":29},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":29},"end":{"row":42,"column":30},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":30},"end":{"row":42,"column":31},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":31},"end":{"row":42,"column":32},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":32},"end":{"row":42,"column":33},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":33},"end":{"row":42,"column":34},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":34},"end":{"row":42,"column":35},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":35},"end":{"row":42,"column":37},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":37},"end":{"row":42,"column":38},"action":"insert","lines":["{"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":38},"end":{"row":42,"column":39},"action":"insert","lines":["}"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":38},"end":{"row":44,"column":14},"action":"insert","lines":["","                     ","              "]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":0},"end":{"row":43,"column":21},"action":"remove","lines":["                     "]},{"start":{"row":43,"column":0},"end":{"row":47,"column":45},"action":"insert","lines":["                     $scope.CmdSave = true;","                     $scope.CmdUpdate = false;","                     $scope.idSelectedRow = null;","                     ","                     $scope.clearselection();"]}]}],[{"group":"doc","deltas":[{"start":{"row":48,"column":15},"end":{"row":49,"column":0},"action":"insert","lines":["",""]},{"start":{"row":49,"column":0},"end":{"row":49,"column":14},"action":"insert","lines":["              "]}]}],[{"group":"doc","deltas":[{"start":{"row":49,"column":14},"end":{"row":50,"column":0},"action":"insert","lines":["",""]},{"start":{"row":50,"column":0},"end":{"row":50,"column":14},"action":"insert","lines":["              "]}]}],[{"group":"doc","deltas":[{"start":{"row":40,"column":15},"end":{"row":41,"column":0},"action":"insert","lines":["",""]},{"start":{"row":41,"column":0},"end":{"row":41,"column":14},"action":"insert","lines":["              "]}]}],[{"group":"doc","deltas":[{"start":{"row":41,"column":14},"end":{"row":42,"column":0},"action":"insert","lines":["",""]},{"start":{"row":42,"column":0},"end":{"row":42,"column":14},"action":"insert","lines":["              "]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":14},"end":{"row":54,"column":15},"action":"insert","lines":["              $scope.clearselection = function(){","                     $scope.CmdSave = true;","                     $scope.CmdUpdate = false;","                     $scope.formData.asesoria = '';","                     $scope.formData.descripcion = '';","                     $scope.formData.urlProducto = '';","                     $scope.formData.valor = 0;","                     $scope.formData.estado  = {","                            val : null,","                            text : null","                     }","                     $scope.formData.derechosStack.length = 0;","              }"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":0},"end":{"row":42,"column":7},"action":"remove","lines":["       "]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":0},"end":{"row":42,"column":7},"action":"remove","lines":["       "]}]}],[{"group":"doc","deltas":[{"start":{"row":52,"column":22},"end":{"row":53,"column":0},"action":"insert","lines":["",""]},{"start":{"row":53,"column":0},"end":{"row":53,"column":21},"action":"insert","lines":["                     "]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":37},"end":{"row":45,"column":45},"action":"remove","lines":["asesoria"]},{"start":{"row":45,"column":37},"end":{"row":45,"column":38},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":38},"end":{"row":45,"column":39},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":39},"end":{"row":45,"column":40},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":40},"end":{"row":45,"column":41},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":41},"end":{"row":45,"column":42},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":42},"end":{"row":45,"column":43},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":0},"end":{"row":52,"column":22},"action":"remove","lines":["                     $scope.formData.urlProducto = '';","                     $scope.formData.valor = 0;","                     $scope.formData.estado  = {","                            val : null,","                            text : null","                     }"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":0},"end":{"row":48,"column":21},"action":"remove","lines":["","                     "]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":0},"end":{"row":48,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":0},"end":{"row":47,"column":7},"action":"remove","lines":["       "]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":0},"end":{"row":47,"column":7},"action":"remove","lines":["       "]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":0},"end":{"row":47,"column":7},"action":"remove","lines":["       "]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":0},"end":{"row":47,"column":1},"action":"remove","lines":["$"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":0},"end":{"row":47,"column":1},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":0},"end":{"row":47,"column":1},"action":"remove","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":0},"end":{"row":47,"column":1},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":0},"end":{"row":47,"column":1},"action":"remove","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":0},"end":{"row":47,"column":36},"action":"remove","lines":["e.formData.derechosStack.length = 0;"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":0},"end":{"row":48,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":93,"column":0},"end":{"row":102,"column":24},"action":"remove","lines":["                     $model.CRUD.Delete({","                            resource : 'estadoAsesorias',","                            id:id","                     }).success(function(data, status){","                            angular.forEach($scope.estadoAsesorias, function(estadoAsesoria, index){","                                   if(estadoAsesoria._id == id){","                                          $scope.estadoAsesorias.splice(index, 1);","                                   }","                            });","                     });"]},{"start":{"row":93,"column":0},"end":{"row":109,"column":38},"action":"insert","lines":["                     $('.basic.test.modal').modal({","                            onDeny : function(){","                                   ","                            },","                            onApprove : function(){","                                   $model.CRUD.Delete({","                                          resource : 'derechos',","                                          id:id","                                   }).success(function(data, status){","                                          angular.forEach($scope.derechos, function(derecho, index){","                                                 if(derecho._id == id){","                                                        $scope.derechos.splice(index, 1);","                                                 }","                                          });","                                   });","                            }","                     }).modal('show');"]}]}],[{"group":"doc","deltas":[{"start":{"row":99,"column":54},"end":{"row":99,"column":62},"action":"remove","lines":["derechos"]},{"start":{"row":99,"column":54},"end":{"row":99,"column":69},"action":"insert","lines":["estadoAsesorias"]}]}],[{"group":"doc","deltas":[{"start":{"row":102,"column":65},"end":{"row":102,"column":73},"action":"remove","lines":["derechos"]},{"start":{"row":102,"column":65},"end":{"row":102,"column":66},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":102,"column":66},"end":{"row":102,"column":67},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":102,"column":67},"end":{"row":102,"column":68},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":102,"column":65},"end":{"row":102,"column":68},"action":"remove","lines":["est"]},{"start":{"row":102,"column":65},"end":{"row":102,"column":80},"action":"insert","lines":["estadoAsesorias"]}]}],[{"group":"doc","deltas":[{"start":{"row":102,"column":91},"end":{"row":102,"column":98},"action":"remove","lines":["derecho"]},{"start":{"row":102,"column":91},"end":{"row":102,"column":92},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":102,"column":92},"end":{"row":102,"column":93},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":102,"column":93},"end":{"row":102,"column":94},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":102,"column":94},"end":{"row":102,"column":95},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":102,"column":95},"end":{"row":102,"column":96},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":102,"column":96},"end":{"row":102,"column":97},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":102,"column":97},"end":{"row":102,"column":98},"action":"insert","lines":["A"]}]}],[{"group":"doc","deltas":[{"start":{"row":102,"column":98},"end":{"row":102,"column":99},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":102,"column":99},"end":{"row":102,"column":100},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":102,"column":100},"end":{"row":102,"column":101},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":102,"column":101},"end":{"row":102,"column":102},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":102,"column":102},"end":{"row":102,"column":103},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":102,"column":103},"end":{"row":102,"column":104},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":102,"column":104},"end":{"row":102,"column":105},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":103,"column":52},"end":{"row":103,"column":59},"action":"remove","lines":["derecho"]},{"start":{"row":103,"column":52},"end":{"row":103,"column":66},"action":"insert","lines":["estadoAsesoria"]}]}],[{"group":"doc","deltas":[{"start":{"row":104,"column":56},"end":{"row":104,"column":71},"action":"remove","lines":["$scope.derechos"]},{"start":{"row":104,"column":56},"end":{"row":104,"column":78},"action":"insert","lines":["$scope.estadoAsesorias"]}]}],[{"group":"doc","deltas":[{"start":{"row":86,"column":0},"end":{"row":86,"column":57},"action":"remove","lines":["                                   $scope.loader = false;"]},{"start":{"row":86,"column":0},"end":{"row":90,"column":0},"action":"insert","lines":["                                   $timeout(function(){","                                          $scope.loader = false","","                                   }, 3000);",""]}]}],[{"group":"doc","deltas":[{"start":{"row":86,"column":35},"end":{"row":87,"column":0},"action":"insert","lines":["",""]},{"start":{"row":87,"column":0},"end":{"row":87,"column":35},"action":"insert","lines":["                                   "]}]}],[{"group":"doc","deltas":[{"start":{"row":89,"column":0},"end":{"row":90,"column":0},"action":"remove","lines":["",""]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":89,"column":0},"end":{"row":89,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1422114615040,"hash":"03e91f84fafed81003bf2f325d8dcc9aca254510"}