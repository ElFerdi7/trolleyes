/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


'use strict';
moduloDirectivas.component('cplistfilterbyboolean', {
    restrict: 'E',
    bindings: {
        url: '<',
        fields: '<',
        rpp: '<',
        numpage: '<',
        orderparams: '<',
        filterparams: '<'
    },
    templateUrl: 'js/system/component/plist/cplistfilterbyboolean.html',
    controllerAs: 'filterbyboolean',
    controller:
            ['$location',
                function ($location) {
                    var self = this;
                    self.field = "";
                    self.operator = "";
                    self.value = "";
                    self.dofilter = function () {
                        if (self.field != "" && self.operator != "" && self.value != "") {
                            var newFilter = self.filterparams + "+and," + self.field + "," + self.operator + "," + self.value;
                            if (self.orderparams) {
                                $location.path(self.url + '/' + self.numpage + '/' + self.rpp).search('filter', newFilter).search('order', self.orderparams);
                            } else {
                                $location.path(self.url + '/' + self.numpage + '/' + self.rpp).search('filter', newFilter);
                            }
                        }
                        return false;
                    };
                }
            ]
});
