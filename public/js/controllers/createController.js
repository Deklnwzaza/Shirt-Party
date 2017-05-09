
app.controller('createController',function($scope,$localStorage,$routeParams,$http,$location,$rootScope,$uibModal, $log, $document) {

    $scope.isCanvas = true;
    $localStorage.carts = [];

    var canvasFront = new fabric.Canvas('canvasFront');
    var imageBackgroundFront = new Image();
    imageBackgroundFront.src = 'image/crew_front.png';
    imageBackgroundFront.onload = function () {
        var image = new fabric.Image(imageBackgroundFront);
        canvasFront.setBackgroundImage(image);
        canvasFront.renderAll();
    };

    var canvasBack = new fabric.Canvas('canvasBack');
    var imageBackgroundBack = new Image();
    imageBackgroundBack.src = 'image/crew_back.png';
    imageBackgroundBack.onload = function () {
        var image = new fabric.Image(imageBackgroundBack);
        canvasBack.setBackgroundImage(image);
        canvasBack.renderAll();
    };

    $scope.submit = function () {
        var data = {
            front: canvasFront.toDataURL('png'),
            back: canvasBack.toDataURL('png')
        }
        $localStorage.carts.push(data);
        $scope.checkout('lg',undefined);
    }


    $scope.addPrint = function (path) {
        var print = new Image(50,50);
        print.src = path;
        if($scope.isCanvas === true){
            print.onload = function () {
                var image = new fabric.Image(print)
                canvasFront.add(image);
            }
        }else{
            print.onload = function () {
                var image = new fabric.Image(print)
                canvasBack.add(image);
            }
        }

    }


    $scope.flip = function () {
        $scope.isCanvas = !$scope.isCanvas;
    }
    
    $scope.go = function (path) {
        $location.path(path);
    }
    $scope.login = function (size, parentSelector) {
        var parentElem = parentSelector ?
            angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            backdrop:'static',
            templateUrl: '../e-com/js/views/model/login.html',
            controller: function($scope,$uibModalInstance){
                $scope.isFormLogin = true;
                $scope.isFormRegister = false;

                $scope.changeForm = function (form) {
                    if(form === "login"){
                        $scope.isFormLogin = true;
                        $scope.isFormRegister = false;
                    }else if(form === "register"){
                        $scope.isFormLogin = false;
                        $scope.isFormRegister = true;
                    }
                }
                $scope.cancel = function () {
                    $uibModalInstance.dismiss('cancel');
                };

            },
            size: size,
            appendTo: parentElem,

        })
        modalInstance.result.then(function () {

        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });

    }


    $scope.checkout = function (size, parentSelector) {
        var parentElem = parentSelector ?
            angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            backdrop:'static',
            templateUrl: '../e-com/js/views/model/checkout.html',
            controller: function($scope,$uibModalInstance,$localStorage){
                $scope.carts = $localStorage.carts;
                
                $scope.submitCheckout = function () {

                }
                
                
                $scope.cancel = function () {
                    $uibModalInstance.dismiss('cancel');
                };

            },
            size: size,
            appendTo: parentElem,

        })
        modalInstance.result.then(function () {

        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });

    }


});

