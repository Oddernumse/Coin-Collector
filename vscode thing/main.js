var gameData = {
    coins: 0,
    coinsPerClick: 1,
    coinsPerClickCost: 10
}

function collectCoin() {
    gameData.coins += gameData.coinsPerClick

    document.getElementById("coinsCollected").innerHTML = gameData.coins + " Coins Collected"
}

function buyCoinsPerClick() {
    if (gameData.coins >= gameData.coinsPerClickCost)  {
        gameData.coins -= gameData.coinsPerClickCost
        gameData.coinsPerClick += 1
        gameData.coinsPerClickCost *= 2
        document.getElementById("perClickUpgrade").innerHTML = "Collect Better (level " + gameData.coinsPerClick + ") Cost: " + gameData.coinsPerClickCost + " Coins"
    }
}

var mainGameLoop = window.setInterval(function() {
    collectCoin()
  }, 1000)

  var saveGameLoop = window.setInterval(function() {
      localStorage.setItem("CoinCollectorSave", JSON.stringify(gameData))
  }, 15000)

var saveGame = JSON.parse(localStorage.getItem("CoinCollectorSave"))
if (saveGame !== null) {
    gameData = saveGame
}