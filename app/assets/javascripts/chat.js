var app = angular.module('chatApp', ['firebase']); //inject module firebase to app

app.controller('chatCtrl', ['$firebaseObject', '$firebaseArray', '$filter',
  function($firebaseObject, $firebaseArray,$filter) {
  var vm = this;
  var ref = firebase.database().ref().child("messages");
  // create a synchronized array
  vm.chatMessages = $firebaseArray(ref);
  vm.saveMessage = function() {
    if (vm.name && vm.message) {
      vm.dateTime = $filter('date')(new Date(), 'dd/MM/yyyy:HH:mm:ss');
      vm.chatMessages.$add({
        name: vm.name,
        message: vm.message,
        dataTime: vm.dateTime
      });
      vm.message = null;
    } else {
      alert("Invalid!");
    }
  }
}]);
