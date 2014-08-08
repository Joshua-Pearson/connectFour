(function() {

  var app = angular.module("app-game", []);

  app.directive("mainGame", function() {
    return {
      restrict: "E",
      templateUrl: "partials/main-game.ejs",
      controller: function() {
         this.moveCount = 0;
         var _this = this;       

        this.move = function(square) {
          if (currentPlayer === playerOne && square.isPlayed === false) {
            square.isPlayed = true;
            square.color = currentPlayer.value;
            currentPlayer = playerTwo;
          } else if (currentPlayer === playerTwo && square.isPlayed === false)  {
            square.isPlayed = true;
            square.color = currentPlayer.value;
            currentPlayer = playerOne;
          } else {
            alert("illegal move")
          }
        };

        function player(playerNumber, value) {
          this.playerNumber = playerNumber;
          this. value = value;
        };

        var playerOne = new player("One", "red")
        var playerTwo = new player("Two", "blue")

        var currentPlayer = playerOne;

        this.board = [
          [{filled: false, user:"", player: 0, row: 0}, {filled: false, user:"", player: 0, row: 0}, {filled: false, user:"", player: 0, row: 0}, {filled: false, user:"", player: 0, row: 0}, {filled: false, user:"", player: 0, row: 0}, {filled: false, user:"", player: 0, row: 0}, {filled: false, user:"", player: 0, row: 0}],
          [{filled: false, user:"", player: 0, row: 1}, {filled: false, user:"", player: 0, row: 1}, {filled: false, user:"", player: 0, row: 1}, {filled: false, user:"", player: 0, row: 1}, {filled: false, user:"", player: 0, row: 1}, {filled: false, user:"", player: 0, row: 1}, {filled: false, user:"", player: 0, row: 1}],
          [{filled: false, user:"", player: 0, row: 2}, {filled: false, user:"", player: 0, row: 2}, {filled: false, user:"", player: 0, row: 2}, {filled: false, user:"", player: 0, row: 2}, {filled: false, user:"", player: 0, row: 2}, {filled: false, user:"", player: 0, row: 2}, {filled: false, user:"", player: 0, row: 2}],
          [{filled: false, user:"", player: 0, row: 3}, {filled: false, user:"", player: 0, row: 3}, {filled: false, user:"", player: 0, row: 3}, {filled: false, user:"", player: 0, row: 3}, {filled: false, user:"", player: 0, row: 3}, {filled: false, user:"", player: 0, row: 3}, {filled: false, user:"", player: 0, row: 3}],
          [{filled: false, user:"", player: 0, row: 4}, {filled: false, user:"", player: 0, row: 4}, {filled: false, user:"", player: 0, row: 4}, {filled: false, user:"", player: 0, row: 4}, {filled: false, user:"", player: 0, row: 4}, {filled: false, user:"", player: 0, row: 4}, {filled: false, user:"", player: 0, row: 4}],
          [{filled: false, user:"", player: 0, row: 5}, {filled: false, user:"", player: 0, row: 5}, {filled: false, user:"", player: 0, row: 5}, {filled: false, user:"", player: 0, row: 5}, {filled: false, user:"", player: 0, row: 5}, {filled: false, user:"", player: 0, row: 5}, {filled: false, user:"", player: 0, row: 5}]
        ];
      },
      controllerAs: "game"
    };
  });
})();