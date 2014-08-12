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
          var currentPlayer = this.currentPlayer;
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
          if (movedCircle === undefined) {
            alert("illegal move");
            return;
          }
          if (movedCircle !== undefined && movedCircle.row !== 0) {
            var anotherCircle = movedCircle;
            var anotherArray = moveArray;
            var counter = 0;
            setInterval(function() { counter++; if (counter <= movedCircle.row) { someAnimation(currentPlayer, anotherCircle, anotherArray, counter); } }, 100);
            this.moveCount ++;
            this.determinePlayer();
          } else {
            movedCircle.player = currentPlayer;
            movedCircle.animation = true;
            movedCircle.isPlayed = true;
            this.moveCount ++;
            this.determinePlayer();
          }
        };

        var someAnimation = function(player, circle, array, counter) {
          if (array[counter].row === circle.row) {
            array[counter].player = player;
            array[counter].animation = true;
            array[counter].isPlayed = true;
            if (array[counter - 1]) {
              array[counter - 1].animation = false;
              array[counter - 1].player = 0;
              array[counter - 1].isPlayed = false;
            }
          } else if (array[counter].animation === false) {
            array[counter].player = player;
            array[counter].animation = true;
            array[counter].isPlayed = true;
            if (array[counter - 1]) {
              array[counter - 1].animation = false;
              array[counter - 1].player = 0;
              array[counter - 1].isPlayed = false;
            }
          } else {
            array[counter].animation = false;
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
          placeholder.player = 0;
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
              ele.player = 0;
            }
          });
        };

        this.placeholders = [
          [{visible: false, user: "", player: 0, column: 0}, {visible: false, user:"", player: 0, column: 1}, {visible: false, user:"", player: 0, column: 2}, {visible: false, user:"", player: 0, column: 3}, {visible: false, user:"", player: 0, column: 4}, {visible: false, user:"", player: 0, column: 5}, {visible: false, user:"", player: 0, column: 6}]    
        ];

        this.board = [
          [{isPlayed: false, animation: false, player: 0, row: 0, index: 0}, {isPlayed: false, animation: false, player: 0, row: 0, index: 1}, {isPlayed: false, animation: false, player: 0, row: 0, index: 2}, {isPlayed: false, animation: false, player: 0, row: 0, index: 3}, {isPlayed: false, animation: false, player: 0, row: 0, index: 4}, {isPlayed: false, animation: false, player: 0, row: 0, index: 5}, {isPlayed: false, animation: false, player: 0, row: 0, index: 6}],
          [{isPlayed: false, animation: false, player: 0, row: 1, index: 0}, {isPlayed: false, animation: false, player: 0, row: 1, index: 1}, {isPlayed: false, animation: false, player: 0, row: 1, index: 2}, {isPlayed: false, animation: false, player: 0, row: 1, index: 3}, {isPlayed: false, animation: false, player: 0, row: 1, index: 4}, {isPlayed: false, animation: false, player: 0, row: 1, index: 5}, {isPlayed: false, animation: false, player: 0, row: 1, index: 6}],
          [{isPlayed: false, animation: false, player: 0, row: 2, index: 0}, {isPlayed: false, animation: false, player: 0, row: 2, index: 1}, {isPlayed: false, animation: false, player: 0, row: 2, index: 2}, {isPlayed: false, animation: false, player: 0, row: 2, index: 3}, {isPlayed: false, animation: false, player: 0, row: 2, index: 4}, {isPlayed: false, animation: false, player: 0, row: 2, index: 5}, {isPlayed: false, animation: false, player: 0, row: 2, index: 6}],
          [{isPlayed: false, animation: false, player: 0, row: 3, index: 0}, {isPlayed: false, animation: false, player: 0, row: 3, index: 1}, {isPlayed: false, animation: false, player: 0, row: 3, index: 2}, {isPlayed: false, animation: false, player: 0, row: 3, index: 3}, {isPlayed: false, animation: false, player: 0, row: 3, index: 4}, {isPlayed: false, animation: false, player: 0, row: 3, index: 5}, {isPlayed: false, animation: false, player: 0, row: 3, index: 6}],
          [{isPlayed: false, animation: false, player: 0, row: 4, index: 0}, {isPlayed: false, animation: false, player: 0, row: 4, index: 1}, {isPlayed: false, animation: false, player: 0, row: 4, index: 2}, {isPlayed: false, animation: false, player: 0, row: 4, index: 3}, {isPlayed: false, animation: false, player: 0, row: 4, index: 4}, {isPlayed: false, animation: false, player: 0, row: 4, index: 5}, {isPlayed: false, animation: false, player: 0, row: 4, index: 6}],
          [{isPlayed: false, animation: false, player: 0, row: 5, index: 0}, {isPlayed: false, animation: false, player: 0, row: 5, index: 1}, {isPlayed: false, animation: false, player: 0, row: 5, index: 2}, {isPlayed: false, animation: false, player: 0, row: 5, index: 3}, {isPlayed: false, animation: false, player: 0, row: 5, index: 4}, {isPlayed: false, animation: false, player: 0, row: 5, index: 5}, {isPlayed: false, animation: false, player: 0, row: 5, index: 6}]
        ];
      },
      controllerAs: "game"
    };
  });
})();