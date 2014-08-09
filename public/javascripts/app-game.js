(function() {

  var app = angular.module("app-game", []);

  app.directive("mainGame", function() {
    return {
      restrict: "E",
      templateUrl: "partials/main-game.ejs",
      controller: function() {
        this.moveCount = 0;
        var _this = this;
        
        function player(playerNumber, value) {
          this.playerNumber = playerNumber;
          this. value = value;
        };

        this.playerOne = new player("One", "red")
        this.playerTwo = new player("Two", "blue")
        this.draw = false;
        this.winner = false;

        this.currentPlayer = this.playerOne;       

        this.move = function(circle) {
          if (this.currentPlayer === this.playerOne && circle.isPlayed === false) {
            console.log(this.board.reverse());
            console.log(circle.index);
            circle.isPlayed = true;
            circle.color = this.currentPlayer.value;
            this.currentPlayer = this.playerTwo;
            this.moveCount ++;
          } else if (this.currentPlayer === this.playerTwo && circle.isPlayed === false)  {
            console.log(circle);
            console.log(circle.index);
            circle.isPlayed = true;
            circle.color = this.currentPlayer.value;
            this.currentPlayer = this.playerOne;
            this.moveCount ++;
          } else {
            alert("illegal move")
          }
        };

        this.newGame = function() {

        };

        this.showPlaceholderOnTop = function(placeholder) {
          placeholder.visible = true;
          placeholder.player = 1;
        };

        this.hidePlaceholderOnTop = function(placeholder) {
          placeholder.visible = false;
          placeholder.player = null;
        };

        this.showPlaceholder = function(circle) {
          this.placeholders[0].forEach(function(ele) {
            if (ele.column === circle.index) {
              ele.visible = true;
              ele.player = 1;
            }
          });
        };

        this.hidePlaceholder = function(circle) {
          this.placeholders[0].forEach(function(ele) {
            if (ele.column === circle.index) {
              ele.visible = false;
              ele.player = null;
            }
          });
        };

        this.placeholders = [
          [{visible: false, user:"", player: 0, column: 0}, {visible: false, user:"", player: 0, column: 1}, {visible: false, user:"", player: 0, column: 2}, {visible: false, user:"", player: 0, column: 3}, {visible: false, user:"", player: 0, column: 4}, {visible: false, user:"", player: 0, column: 5}, {visible: false, user:"", player: 0, column: 6}]    
        ];

        this.board = [
          [{isPlayed: false, user:"", player: 0, row: 0, index: 0}, {isPlayed: false, user:"", player: 0, row: 0, index: 1}, {isPlayed: false, user:"", player: 0, row: 0, index: 2}, {isPlayed: false, user:"", player: 0, row: 0, index: 3}, {isPlayed: false, user:"", player: 0, row: 0, index: 4}, {isPlayed: false, user:"", player: 0, row: 0, index: 5}, {isPlayed: false, user:"", player: 0, row: 0, index: 6}],
          [{isPlayed: false, user:"", player: 0, row: 1, index: 0}, {isPlayed: false, user:"", player: 0, row: 1, index: 1}, {isPlayed: false, user:"", player: 0, row: 1, index: 2}, {isPlayed: false, user:"", player: 0, row: 1, index: 3}, {isPlayed: false, user:"", player: 0, row: 1, index: 4}, {isPlayed: false, user:"", player: 0, row: 1, index: 5}, {isPlayed: false, user:"", player: 0, row: 1, index: 6}],
          [{isPlayed: false, user:"", player: 0, row: 2, index: 0}, {isPlayed: false, user:"", player: 0, row: 2, index: 1}, {isPlayed: false, user:"", player: 0, row: 2, index: 2}, {isPlayed: false, user:"", player: 0, row: 2, index: 3}, {isPlayed: false, user:"", player: 0, row: 2, index: 4}, {isPlayed: false, user:"", player: 0, row: 2, index: 5}, {isPlayed: false, user:"", player: 0, row: 2, index: 6}],
          [{isPlayed: false, user:"", player: 0, row: 3, index: 0}, {isPlayed: false, user:"", player: 0, row: 3, index: 1}, {isPlayed: false, user:"", player: 0, row: 3, index: 2}, {isPlayed: false, user:"", player: 0, row: 3, index: 3}, {isPlayed: false, user:"", player: 0, row: 3, index: 4}, {isPlayed: false, user:"", player: 0, row: 3, index: 5}, {isPlayed: false, user:"", player: 0, row: 3, index: 6}],
          [{isPlayed: false, user:"", player: 0, row: 4, index: 0}, {isPlayed: false, user:"", player: 0, row: 4, index: 1}, {isPlayed: false, user:"", player: 0, row: 4, index: 2}, {isPlayed: false, user:"", player: 0, row: 4, index: 3}, {isPlayed: false, user:"", player: 0, row: 4, index: 4}, {isPlayed: false, user:"", player: 0, row: 4, index: 5}, {isPlayed: false, user:"", player: 0, row: 4, index: 6}],
          [{isPlayed: false, user:"", player: 0, row: 5, index: 0}, {isPlayed: false, user:"", player: 0, row: 5, index: 1}, {isPlayed: false, user:"", player: 0, row: 5, index: 2}, {isPlayed: false, user:"", player: 0, row: 5, index: 3}, {isPlayed: false, user:"", player: 0, row: 5, index: 4}, {isPlayed: false, user:"", player: 0, row: 5, index: 5}, {isPlayed: false, user:"", player: 0, row: 5, index: 6}]
        ];
      },
      controllerAs: "game"
    };
  });
})();