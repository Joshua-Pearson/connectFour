(function() {

  var app = angular.module("app-footer", []);

  app.directive("mainFooter", function() {
    return {
      restrict: "E",
      templateUrl: "partials/main-footer.ejs",
      controller: function() {
        this.hiThere = "This is in the foootererereote";
      },
      controllerAs: "footer"
    };
  });
})();