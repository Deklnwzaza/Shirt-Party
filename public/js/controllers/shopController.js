
app.controller('shopController',function($scope,$localStorage,$routeParams,$http,$location,$rootScope,$uibModal, $log, $document) {


    $scope.oneAtATime = true;


    $scope.slider = {
        minValue: 100,
        maxValue: 400,
        options: {
            floor: 0,
            ceil: 500,
            translate: function(value, sliderId, label) {
                switch (label) {
                    case 'model':
                        return '<b>Min price:</b> $' + value;
                    case 'high':
                        return '<b>Max price:</b> $' + value;
                    default:
                        return '$' + value
                }
            }
        }
    };


    $scope.go = function (path) {
        $location.path(path);
    }


    $scope.viewShirt = function (size, parentSelector) {
        var parentElem = parentSelector ?
            angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            backdrop:true,
            templateUrl: '../e-com/js/views/model/viewShirt.html',
            controller: function($scope,$uibModalInstance){

                $scope.countShirt = 1;
                console.log($scope.countShirt);
                $scope.plus = function () {
                    $scope.countShirt++;
                }
                $scope.minus = function () {
                    if($scope.countShirt <=1){
                        $scope.countShirt = $scope.countShirt;
                    }else{
                        console.log("--");
                        $scope.countShirt--;
                    }

                }

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

