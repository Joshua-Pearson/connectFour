(function() {

  var app = angular.module("app-game", []);

  app.directive("mainGame", function() {
    return {
      restrict: "E",
      templateUrl: "partials/main-game.ejs",
      controller: function($scope, $interval) {
        this.moveCount = 1;
        this.draw = false;
        this.winner = false;
        var _this = this;

        function player(playerNumber, playerNumberMoves) {
          this.playerNumber = playerNumber;
          this.playerNumberMoves = playerNumberMoves
        };

        this.playerOne = new player(1, []);
        this.playerTwo = new player(2, []);
        this.currentPlayer = this.playerOne;

        this.determinePlayer = function() {
          if (this.moveCount % 2 === 0) {
            this.currentPlayer = this.playerTwo;
          } else {
            this.currentPlayer = this.playerOne;
          }
          return this.currentPlayer;
        };

        this.move = function(circle) {
          if (this.winner !== false) {
            alert("game over!");
            return
          }
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
          //var movedCircle will either be undefined if the entire row is played or will be the lowest circle not played.
          movedCircle = _.findLast(moveArray, { isPlayed: false });
          if (movedCircle === undefined) {
            alert("illegal move");
            return;
          }
          //this does a basic animation by coloring each circle for 100ms with currentPlayer's color and then taking it away.
          if (movedCircle !== undefined && movedCircle.row !== 0) {
            var counter = 0;
            $interval(function() {
              counter++; 
              if (counter <= movedCircle.row) { 
                animate(currentPlayer, movedCircle, moveArray, counter);
              } 
            }, 100);
            movedCircle.player = currentPlayer;
            movedCircle.isPlayed = true;
            currentPlayer.playerNumberMoves.push(movedCircle);
            if (this.moveCount > 6) {
              this.checkForWin(currentPlayer, movedCircle);
            }
            this.moveCount ++;
            this.determinePlayer();
          } else {
            //this applies only to the last move in each row, no need for animation.
            movedCircle.player = currentPlayer;
            movedCircle.animation = true;
            movedCircle.isPlayed = true;
            currentPlayer.playerNumberMoves.push(movedCircle);
            if (this.moveCount > 6) {
              this.checkForWin(currentPlayer, movedCircle);
            }
            this.moveCount ++;
            this.determinePlayer();
          }
        };

        var animate = function(player, circle, array, counter) {
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
          this.moveCount = 1;
          this.currentPlayer = this.playerOne;
          this.draw = false;
          this.winner = false;
          this.placeholders = [
            [{visible: false, player: 0, column: 0}, {visible: false, player: 0, column: 1}, {visible: false, player: 0, column: 2}, {visible: false, player: 0, column: 3}, {visible: false, player: 0, column: 4}, {visible: false, player: 0, column: 5}, {visible: false, player: 0, column: 6}]    
          ];
          this.board = [
            [{isPlayed: false, animation: false, player: 0, row: 0, index: 0}, {isPlayed: false, animation: false, player: 0, row: 0, index: 1}, {isPlayed: false, animation: false, player: 0, row: 0, index: 2}, {isPlayed: false, animation: false, player: 0, row: 0, index: 3}, {isPlayed: false, animation: false, player: 0, row: 0, index: 4}, {isPlayed: false, animation: false, player: 0, row: 0, index: 5}, {isPlayed: false, animation: false, player: 0, row: 0, index: 6}],
            [{isPlayed: false, animation: false, player: 0, row: 1, index: 0}, {isPlayed: false, animation: false, player: 0, row: 1, index: 1}, {isPlayed: false, animation: false, player: 0, row: 1, index: 2}, {isPlayed: false, animation: false, player: 0, row: 1, index: 3}, {isPlayed: false, animation: false, player: 0, row: 1, index: 4}, {isPlayed: false, animation: false, player: 0, row: 1, index: 5}, {isPlayed: false, animation: false, player: 0, row: 1, index: 6}],
            [{isPlayed: false, animation: false, player: 0, row: 2, index: 0}, {isPlayed: false, animation: false, player: 0, row: 2, index: 1}, {isPlayed: false, animation: false, player: 0, row: 2, index: 2}, {isPlayed: false, animation: false, player: 0, row: 2, index: 3}, {isPlayed: false, animation: false, player: 0, row: 2, index: 4}, {isPlayed: false, animation: false, player: 0, row: 2, index: 5}, {isPlayed: false, animation: false, player: 0, row: 2, index: 6}],
            [{isPlayed: false, animation: false, player: 0, row: 3, index: 0}, {isPlayed: false, animation: false, player: 0, row: 3, index: 1}, {isPlayed: false, animation: false, player: 0, row: 3, index: 2}, {isPlayed: false, animation: false, player: 0, row: 3, index: 3}, {isPlayed: false, animation: false, player: 0, row: 3, index: 4}, {isPlayed: false, animation: false, player: 0, row: 3, index: 5}, {isPlayed: false, animation: false, player: 0, row: 3, index: 6}],
            [{isPlayed: false, animation: false, player: 0, row: 4, index: 0}, {isPlayed: false, animation: false, player: 0, row: 4, index: 1}, {isPlayed: false, animation: false, player: 0, row: 4, index: 2}, {isPlayed: false, animation: false, player: 0, row: 4, index: 3}, {isPlayed: false, animation: false, player: 0, row: 4, index: 4}, {isPlayed: false, animation: false, player: 0, row: 4, index: 5}, {isPlayed: false, animation: false, player: 0, row: 4, index: 6}],
            [{isPlayed: false, animation: false, player: 0, row: 5, index: 0}, {isPlayed: false, animation: false, player: 0, row: 5, index: 1}, {isPlayed: false, animation: false, player: 0, row: 5, index: 2}, {isPlayed: false, animation: false, player: 0, row: 5, index: 3}, {isPlayed: false, animation: false, player: 0, row: 5, index: 4}, {isPlayed: false, animation: false, player: 0, row: 5, index: 5}, {isPlayed: false, animation: false, player: 0, row: 5, index: 6}]
          ];
        };

        this.checkForWin = function(currentPlayer, lastMove) {
          var checkedRow = lastMove.row;
          var checkedColumn = lastMove.index;
          var playersColumns = [];
          var playersRows = [];
          var playersRightDiagonals = [];
          var playersLeftDiagonals = [];
          var allCurrentPlayersPreviousMoves = currentPlayer.playerNumberMoves;
          allCurrentPlayersPreviousMoves.forEach(function(currentPlayersPreviousMove) {
            if (checkedRow === currentPlayersPreviousMove.row && Math.abs(lastMove.index - currentPlayersPreviousMove.index) <= 3 && currentPlayersPreviousMove !== lastMove) {
              playersRows.push(currentPlayersPreviousMove);
            } else if (checkedColumn === currentPlayersPreviousMove.index && Math.abs(checkedRow - currentPlayersPreviousMove.row) <= 3 && currentPlayersPreviousMove !== lastMove) {
              playersColumns.push(currentPlayersPreviousMove);
            } else if ((checkedRow - currentPlayersPreviousMove.row === -1 && checkedColumn - currentPlayersPreviousMove.index === 1) || (checkedRow - currentPlayersPreviousMove.row === 1 && checkedColumn - currentPlayersPreviousMove.index === -1)) {
              playersLeftDiagonals.push(currentPlayersPreviousMove);
            } else if ((checkedRow - currentPlayersPreviousMove.row === -2 && checkedColumn - currentPlayersPreviousMove.index === 2) || (checkedRow - currentPlayersPreviousMove.row === 2 && checkedColumn - currentPlayersPreviousMove.index === -2)) {
              playersLeftDiagonals.push(currentPlayersPreviousMove);
            } else if ((checkedRow - currentPlayersPreviousMove.row === -3 && checkedColumn - currentPlayersPreviousMove.index === 3) || (checkedRow - currentPlayersPreviousMove.row === 3 && checkedColumn - currentPlayersPreviousMove.index === -3)) {
              playersLeftDiagonals.push(currentPlayersPreviousMove);
            } else if ((checkedRow - currentPlayersPreviousMove.row === 1 && checkedColumn - currentPlayersPreviousMove.index === -1) || (checkedRow - currentPlayersPreviousMove.row === -1 && checkedColumn - currentPlayersPreviousMove.index === 1)) {
              playersRightDiagonals.push(currentPlayersPreviousMove);
            } else if ((checkedRow - currentPlayersPreviousMove.row === 2 && checkedColumn - currentPlayersPreviousMove.index === -2) || (checkedRow - currentPlayersPreviousMove.row === -2 && checkedColumn - currentPlayersPreviousMove.index === 2)) {
              playersRightDiagonals.push(currentPlayersPreviousMove);
            } else if ((checkedRow - currentPlayersPreviousMove.row === 3 && checkedColumn - currentPlayersPreviousMove.index === -3) || (checkedRow - currentPlayersPreviousMove.row === -3 && checkedColumn - currentPlayersPreviousMove.index === 3)) {
              playersRightDiagonals.push(currentPlayersPreviousMove);
            }
            return playersColumns;
            return playersRows;
            return playersDiagonals;
          });
          playersRows.push(lastMove);
          playersColumns.push(lastMove);
          playersLeftDiagonals.push(lastMove);
          playersRightDiagonals.push(lastMove);
          console.log(playersRows);
          console.log(playersColumns);
          console.log(playersLeftDiagonals);
          console.log(playersRightDiagonals);
          if (playersRows.length > 3 || playersLeftDiagonals.length > 3 || playersColumns.length > 3 || playersRightDiagonals > 3) {
            this.winner = currentPlayer;
            alert("Player " + currentPlayer.playerNumber + " is the winner");
          }
        };

        this.giveUp = function() {
          if (this.moveCount % 2 === 0) {
            this.winner = this.playerOne;
          } else {
            this.winner = this.playerTwo;
          }
          return this.winner;
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
          [{visible: false, player: 0, column: 0}, {visible: false, player: 0, column: 1}, {visible: false, player: 0, column: 2}, {visible: false, player: 0, column: 3}, {visible: false, player: 0, column: 4}, {visible: false, player: 0, column: 5}, {visible: false, player: 0, column: 6}]    
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