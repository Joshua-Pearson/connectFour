(function() {

  var app = angular.module("doesThisNameMatter", []);

  app.directive("doesThisDirectiveMatter", function() {
    return {
      restrict: "E",
      templateUrl: "partials/game-footer.ejs",
      controller: function() {
        this.hiThere = "This is in the foootererereote";
      },
      controllerAs: "game-footer"
    };
  });
})();