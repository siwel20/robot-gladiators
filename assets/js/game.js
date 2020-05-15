var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// Game States
// "WIN" - Player robot has defeated all enemy robots
//      * Fight all enemy robots
//      * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less

var fight = function(enemyName) {
    // alert users that they are starting a round
    while(enemyHealth > 0 && playerHealth > 0) {
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        console.log(promptFight);
    
        // if player chooses to fight, then fight
        if (promptFight === "fight" || promptFight === "FIGHT") {
            
        // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
        enemyHealth = enemyHealth - playerAttack;
        // Log a resulting messge to the console so we know that it worked.
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
    
        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            break;
        }
    
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
    
        // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and
        playerHealth = playerHealth - enemyAttack;
        // Log a resulting message to the console so we know that it worked. 
        console.log (
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaing."
        );
    
        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        }
    
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    
        // If player skips
        } else if (promptFight === "skip" || promptFight === "SKIP") {
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                playerMoney = playerMoney - 2;
                console.log(playerMoney);
            }
            else {
                fight();
            }
            
        } else {
            window.alert("You need to pick a valid option. Try again!");
        }
    }


};

for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName)
}
