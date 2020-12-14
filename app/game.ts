import { ScoreBoard } from './scoreBoard.ts';
import { Team } from './team.ts';

export class Game{
  team1: Team;
  team2: Team;
  team1Score: number;
  team2Score: number;
  constructor() {
    this.team1Score = 0;
    this.team2Score = 0;
    const gameContainer = document.createElement('div');
      gameContainer.setAttribute('id', 'gameContainer');
      gameContainer.setAttribute('class', 'container mt-5');
    
        const mainHeadingRow = document.createElement('div');
        mainHeadingRow.setAttribute('class', 'row');

          const mainHeadingRowColumn = document.createElement('div');
          mainHeadingRowColumn.setAttribute('class', 'col-md-10 offset-md-1 text-center text-uppercase p-3');
          mainHeadingRowColumn.innerHTML = 'Cricket 10';
        mainHeadingRow.append(mainHeadingRowColumn);
      gameContainer.append(mainHeadingRow);
      
      const teamsScoreRow = document.createElement('div');
      teamsScoreRow.setAttribute('id', 'teamsScoreRow');
      teamsScoreRow.classList.add('row');
      gameContainer.append(teamsScoreRow);
      document.body.append(gameContainer);

      const teamsScoreBoardRow = document.createElement('div');
      teamsScoreBoardRow.setAttribute('id', 'teamsScoreBoardRow');
      teamsScoreBoardRow.setAttribute('class', 'row');
      gameContainer.append(teamsScoreBoardRow);
      document.body.append(gameContainer);

    const scoreBoard = new ScoreBoard();
    this.team1 = new Team('India', scoreBoard, 'first');
      const timerColumn = document.createElement('div');
      timerColumn.setAttribute('class', 'col-md-4 text-center p-3');
        const timerTitle = document.createElement('div');
          timerTitle.innerHTML = 'Timer';
        const timerValue= document.createElement('p');
          timerValue.setAttribute('id', 'timer'); 
          timerValue.innerHTML = '60'; 
      timerColumn.append(timerTitle, timerValue);    
      document.getElementById('teamsScoreRow')?.append(timerColumn);

      const resultsColumn = document.createElement('div');
        resultsColumn.setAttribute('class', 'col-md-2 text-center p-3');
        resultsColumn.setAttribute('id', 'resultsColumn');

        const resultsGenerateBtn = document.createElement('button');
        resultsGenerateBtn.setAttribute('id', 'resultsGenerateBtn');
        resultsGenerateBtn.setAttribute('class', 'btn btn-primary');
        resultsGenerateBtn.disabled = true;
        resultsGenerateBtn.innerHTML = 'Generate Results';
        resultsGenerateBtn.onclick = () => {
          const matchResults = (<HTMLElement>document.getElementById('matchResults'));
          matchResults.style.display = 'block';
          const resultMoM = document.getElementById('manOfTheMatchResult');
          if(resultMoM){
            resultMoM.innerHTML = scoreBoard.getMoMatch();
          }
          
          const resultWinner = document.getElementById('winnerResult');
          if(resultWinner && scoreBoard.manOfTheMatch){
            resultWinner.innerHTML = scoreBoard.winningTeam;
          }
        }
          const matchResultsDiv = document.createElement('div');
          matchResultsDiv.setAttribute('id','matchResults');
          matchResultsDiv.style.display = 'none';
            const winner = document.createElement('div');
              winner.innerHTML = 'Math Won By'
            const winnerResult = document.createElement('div');
            winnerResult.setAttribute('id', 'winnerResult');
            const manOfTheMatch = document.createElement('div');
              manOfTheMatch.innerHTML = 'Man of the Match';  
            const manOfTheMatchResult = document.createElement('div');
              manOfTheMatchResult.setAttribute('id', 'manOfTheMatchResult');  
          matchResultsDiv.append(winner, winnerResult, manOfTheMatch, manOfTheMatchResult);
        resultsColumn.append(resultsGenerateBtn, matchResultsDiv);    
      document.getElementById('teamsScoreBoardRow')?.append(resultsColumn);
    
    this.team1Score = this.team1.getTeamTotalScore();
    this.team2 = new Team('Australia', scoreBoard, 'second'); 
  }
}