angular.module('starter').controller('registerController',function($scope,$http){
    $scope.main.dragContent = false;
    $scope.data = {};
    $scope.data.username = 'root';
    $scope.data.password = '';
    $scope.login = function(){
        var Nom = $scope.data.Nom;
        var phone = $scope.data.phone;
        var email = $scope.data.email;
        var Heure = $scope.data.Heure;
        var Datee = $scope.data.Datee;
        var Nb_personne = $scope.data.Nb_personne;
        var link = 'http://localhost/MyResto(site)/register.php?Nb_personne='+Nb_personne+'&Datee='+Datee+'&Heure='+Heure+'&Nom='+Nom+'&phone='+phone+'&email='+email;
        $http.get(link).success(function(result){
            //success result         
        });    
    }
})