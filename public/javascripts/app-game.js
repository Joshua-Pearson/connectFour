(function() {

  var app = angular.module("app-game", []);

  app.directive("mainGame", function() {
    return {
      restrict: "E",
      templateUrl: "partials/main-game.ejs",
      controller: function() {
        this.moveCount = 1;
        var _this = this;
        this.currentPlayer = {};

        function player(playerNumber, value) {
          this.playerNumber = playerNumber;
          this.value = value;
        };

        this.playerOne = new player(1, "red")
        this.playerTwo = new player(2, "black")
        this.draw = false;
        this.winner = false;

        this.determinePlayer = function() {
          if (this.moveCount % 2 === 0) {
            this.currentPlayer = this.playerTwo;
          } else {
            this.currentPlayer = this.playerOne;
          }
          return this.currentPlayer;
        };

        this.move = function(circle) {
          this.determinePlayer();
          var movedCircle;
          var moveArray = [];
          this.board.forEach(function(array) {
            array.forEach(function(ele) {
              if (ele.index === circle.index) {
                moveArray.push(ele);
              }
              return moveArray;
            });
          });
          movedCircle = _.findLast(moveArray, { isPlayed: false });
          if (movedCircle !== undefined) {
            movedCircle.player = this.currentPlayer;
            movedCircle.isPlayed = true;
            this.moveCount ++;
            this.determinePlayer();
          } else {
            alert("illegal move")
          }
        };

        this.newGame = function() {

        };

        this.checkForWin = function() {

        };

        this.showPlaceholderOnTop = function(placeholder) {
          this.determinePlayer();
          placeholder.visible = true;
          placeholder.player = this.currentPlayer;
        };

        this.hidePlaceholderOnTop = function(placeholder) {
          placeholder.visible = false;
          placeholder.player = null;
        };

        this.showPlaceholder = function(circle) {
          var visiblePlaceholder;
          this.determinePlayer();
          this.placeholders[0].forEach(function(ele) {
            if (ele.column === circle.index) {
              visiblePlaceholder = ele;
            }
            return visiblePlaceholder;
          });
          visiblePlaceholder.visible = true;
          visiblePlaceholder.player = this.currentPlayer;
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