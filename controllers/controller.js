var myApp = angular.module('myApp', ['ngResource']);

myApp.controller('AppCtrl', ['$scope', '$http', function ($scope, $http) {
   
    console.log("Hello World from controller");

    $scope.contactList = [
    {
        name: 'Tim',
        email: 'tim@gmail.com',
        number:'(571) 426-1433'
    },
    {
        name:'Liam',
        email:'neason@taken2.com',
        number: '(777) 777-7777'
    },
    {
        name: 'Jessie',
        email:'jessie@vma.com',
        number: '(684) 426-1232'
    }
  ]

}]);﻿