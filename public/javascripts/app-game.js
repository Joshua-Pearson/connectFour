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

        this.columnOne = [{"row": 1, "value" : "O", "color": "blank", "isPlayed": false, "nothing": ""}, {"row": 2, "value" : "O", "color": "blank", "isPlayed": false, "nothing": ""}, {"row": 3, "value" : "O", "color": "blank", "isPlayed": false, "nothing": ""}, {"row": 4, "value" : "O", "color": "blank", "isPlayed": false, "nothing": ""}, {"row": 5, "value" : "O", "color": "blank", "isPlayed": false, "nothing": ""}, {"row": 6, "value" : "O", "color": "blank", "isPlayed": false, "nothing": ""}, {"row": 7, "value" : "O", "color": "blank", "isPlayed": false, "nothing": ""}];
        this.columnTwo = [{"row": 1, "value" : "O", "color": "blank", "isPlayed": false, "nothing": ""}, {"row": 2, "value" : "O", "color": "blank", "isPlayed": false, "nothing": ""}, {"row": 3, "value" : "O", "color": "blank", "isPlayed": false, "nothing": ""}, {"row": 4, "value" : "O", "color": "blank", "isPlayed": false, "nothing": ""}, {"row": 5, "value" : "O", "color": "blank", "isPlayed": false, "nothing": ""}, {"row": 6, "value" : "O", "color": "blank", "isPlayed": false, "nothing": ""}, {"row": 7, "value" : "O", "color": "blank", "isPlayed": false, "nothing": ""}];
        this.columnThree = [{"row": 1, "value" : "O", "color": "blank", "isPlayed": false, "nothing": ""}, {"row": 2, "value" : "O", "color": "blank", "isPlayed": false, "nothing": ""}, {"row": 3, "value" : "O", "color": "blank", "isPlayed": false, "nothing": ""}, {"row": 4, "value" : "O", "color": "blank", "isPlayed": false, "nothing": ""}, {"row": 5, "value" : "O", "color": "blank", "isPlayed": false, "nothing": ""}, {"row": 6, "value" : "O", "color": "blank", "isPlayed": false, "nothing": ""}, {"row": 7, "value" : "O", "color": "blank", "isPlayed": false, "nothing": ""}];
        this.columnFour = [{"row": 1, "value" : "O", "color": "blank", "isPlayed": false, "nothing": ""}, {"row": 2, "value" : "O", "color": "blank", "isPlayed": false, "nothing": ""}, {"row": 3, "value" : "O", "color": "blank", "isPlayed": false, "nothing": ""}, {"row": 4, "value" : "O", "color": "blank", "isPlayed": false, "nothing": ""}, {"row": 5, "value" : "O", "color": "blank", "isPlayed": false, "nothing": ""}, {"row": 6, "value" : "O", "color": "blank", "isPlayed": false, "nothing": ""}, {"row": 7, "value" : "O", "color": "blank", "isPlayed": false, "nothing": ""}];
        this.columnFive = [{"row": 1, "value" : "O", "color": "blank", "isPlayed": false, "nothing": ""}, {"row": 2, "value" : "O", "color": "blank", "isPlayed": false, "nothing": ""}, {"row": 3, "value" : "O", "color": "blank", "isPlayed": false, "nothing": ""}, {"row": 4, "value" : "O", "color": "blank", "isPlayed": false, "nothing": ""}, {"row": 5, "value" : "O", "color": "blank", "isPlayed": false, "nothing": ""}, {"row": 6, "value" : "O", "color": "blank", "isPlayed": false, "nothing": ""}, {"row": 7, "value" : "O", "color": "blank", "isPlayed": false, "nothing": ""}];
        this.columnSix = [{"row": 1, "value" : "O", "color": "blank", "isPlayed": false, "nothing": ""}, {"row": 2, "value" : "O", "color": "blank", "isPlayed": false, "nothing": ""}, {"row": 3, "value" : "O", "color": "blank", "isPlayed": false, "nothing": ""}, {"row": 4, "value" : "O", "color": "blank", "isPlayed": false, "nothing": ""}, {"row": 5, "value" : "O", "color": "blank", "isPlayed": false, "nothing": ""}, {"row": 6, "value" : "O", "color": "blank", "isPlayed": false, "nothing": ""}, {"row": 7, "value" : "O", "color": "blank", "isPlayed": false, "nothing": ""}];

      },
      controllerAs: "game"
    };
  });
})();