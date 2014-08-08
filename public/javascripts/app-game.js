(function() {

  var app = angular.module("app-game", []);

  app.directive("mainGame", function() {
    return {
      restrict: "E",
      templateUrl: "partials/main-game.ejs",
      controller: function() {
        this.hiThere = "HI HI HI HI HIH I HIHI";

        this.isSet = function(checkTab) {
          return "This is a " + checkTab + " function";
        };

        this.setTab = function(activeTab) {
          this.tab = activeTab;
        };
      },
      controllerAs: "game"
    };
  });
})();