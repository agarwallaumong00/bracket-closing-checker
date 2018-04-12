(function() {
    'use strict';

    var myApp = angular.module('agentDesk', ['ngMaterial']);

    myApp.controller('agentDeskController', ['$scope', '$timeout', function($scope, $timeout) {
        var vm = $scope;
        vm.text = "";
        var openBrckts = ['[', '(', '{'];
        var closeBrckts = [']', ')', '}'];
        var arr =[];
        var match = {
            '(' : ')',
            '{' : '}',
            '[' : ']'
        };

        vm.checkForError = function(text) {
            var result = "Success";
            var arr = [];
            if(closeBrckts.indexOf(text[0]) !== -1) {
                result = "Error at position: 1";
            } else if(openBrckts.indexOf(text[text.length-1]) !== -1) {
                result = "Error at position: " + text.length;
            } else {
                result = isBalanced(text);
            }
            alert(result);
        }

        function isBalanced(text) {
            for(var char of text) {
                if(openBrckts.indexOf(char) !== -1) {
                    arr.push(char);
                } else if(closeBrckts.indexOf(char) !== -1) {
                    if(match[arr[arr.length-1]] === char) {
                        arr.pop();
                    } else {
                        var index = text.indexOf[char] + 1;
                        var result =  "Error at position: " + index;
                        return result;
                    }
                }
            }
            if(arr.length>0) {
                var index = text.indexOf(arr[0])+1;
                var result =  "Error at position: " + index;
                return result;
            } else {
                var result = "Success";
                return result;
            }
        }

    }])
})()