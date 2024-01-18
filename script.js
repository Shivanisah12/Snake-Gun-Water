function playGame() {
    var userChoice = prompt("Enter 5 for Snake, W for Water, or G for Gun (case-insensitive):").toLowerCase();
    var computerChoice = generateComputerChoice();
    var result = determineWinner(userChoice, computerChoice);

    alert("Your choice: " + userChoice + "\nComputer's choice: " + computerChoice + "\nResult: " + result);
  }

  function generateComputerChoice() {
    var choices = ['5', 'w', 'g'];
    var randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  }

  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "It's a tie!";
    }

    if (
      (userChoice === '5' && computerChoice === 'g') ||
      (userChoice === 'w' && computerChoice === '5') ||
      (userChoice === 'g' && computerChoice === 'w')
    ) {
      return "You win!";
    } else {
      return "You lose!";
    }
  }