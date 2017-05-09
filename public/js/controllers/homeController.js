
app.controller('homeController',function($scope,$localStorage,$routeParams,$http,$location,$rootScope,$uibModal, $log, $document) {


    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;

    $scope.addSlide = function() {
        var newWidth = 600 + slides.length + 1;
        slides.push({
            id: currIndex++,
            image: 'image/1m.jpg',
            name_page:'M I R I R I N',
            path:'https://www.facebook.com/miririn/',
            description_page: 'Miririn Pongpanmanus - นักวาดภาพอิสระ เจ้าของเพจ',
            text: '"มันดีนะ มันเปิดโอกาสให้คนที่มีฝีมือ แต่ไม่มีต้นทุน หรือคอนเนกชั่น อย่างนักเรียน นักศึกษาพวกนี้ ได้แสดงฝีมือด้วย และหารายได้ไปด้วย ไม่ต้องกลัวขาดทุน กลัวเจ๊ง เพราะเราแค่ลงไอเดีย ลงแรงไป ส่วนเรื่องอื่นๆ เค้าก็พร้อมให้เราแล้ว "'
        });
        slides.push({
            id: currIndex++,
            image: 'image/2p.jpg',
            name_page:'Prim',
            path:'https://www.facebook.com/ghruoin/',
            description_page: 'Prim Ariyanut - นักวาดภาพอิสระ เจ้าของเพจ',
            text: '"ถือว่าเป็นระบบที่ดี สนับสนุนนักออกแบบให้มีพื้นที่ในการแสดงฝีมือในการนำเสนอมากขึ้นและมีการทำธุรกิจไปในตัวเพิ่มรายได้ให้กับตัวเองไม่ต้องเสียเวลานั่งหาตลาดขายเอง"'
        });
        slides.push({
            id: currIndex++,
            image: 'image/3g.jpg',
            page:'Ghruoin',
            path:'https://www.facebook.com/ghruoin/',
            description_page: 'Ghruoin Kak - Graphic Designer เจ้าของเพจ',
            text: '"เป็นระบบที่มีแนวคิดที่ดีสานฝันคนอยากทำเสื้อขายแต่มีความกังวลในหลายๆเรื่อง เช่น ไม่มีพื้นที่ขาย การลงทุนในการเช่าพื้นทีขาย และไม่มีเวลาขาย ถ้าเปิดใช้จริงเมื่อไรคงสนใจและคงร่วมโครงการด้วยอย่างแน่นอน"'
        });
        slides.push({
            id: currIndex++,
            image: 'image/4z.jpg',
            page:'SO',
            path:'https://www.facebook.com/miririn/',
            description_page: 'Zophia Luving U - นักวาดภาพอิสระ เจ้าของเพจ',
            text: '"เป็นโปรเจคที่ดีค่ะ เปิดโอกาสให้คนที่มีความสามารถทางด้านศิลปะได้แสดงผลงาน และสามารถสร้างรายได้จากความชอบของตัวเอง"'
        });
    };

    $scope.addSlide();


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
                if (firebase.auth().currentUser) {
                    // [START signout]
                    firebase.auth().signOut();
                    // [END signout]
                }
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

                $scope.loginEmail = function () {
                    var email = document.getElementById('email').value;
                    var password = document.getElementById('password').value;
                    if (email.length < 4) {
                        alert('Please enter an email address.');
                        return;
                    }
                    if (password.length < 4) {
                        alert('Please enter a password.');
                        return;
                    }
                    // Sign in with email and pass.
                    // [START authwithemail]
                    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
                        // Handle Errors here.
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        // [START_EXCLUDE]
                        if (errorCode === 'auth/wrong-password') {
                            alert('Wrong password.');
                        } else {
                            alert(errorMessage);
                        }
                        console.log(error);
                        // [END_EXCLUDE]
                    });
                    // [END authwithemail]
                    $scope.userData();
                }

                $scope.userData = function () {
                    firebase.auth().onAuthStateChanged(function(user) {
                        if (user) {
                            // User is signed in.
                            var displayName = user.displayName;
                            var email = user.email;
                            var emailVerified = user.emailVerified;
                            var photoURL = user.photoURL;
                            var isAnonymous = user.isAnonymous;
                            var uid = user.uid;
                            var providerData = user.providerData;
                            console.log(providerData);
                            // [END_EXCLUDE]
                        }
                    });
                    $uibModalInstance.dismiss('cancel');
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


    $scope.checkout = function (size, parentSelector) {
        var parentElem = parentSelector ?
            angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            backdrop:'static',
            templateUrl: '../e-com/js/views/model/checkout.html',
            controller: function($scope,$uibModalInstance){

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

