import { ScoreBoard } from './scoreBoard.ts';
import {Player} from './player.ts';

export class Team {
  teamName: string;
  players: Player[] = []; 
  teamTotalScore: number;
  totalBalls: number;
  currentPlayerIndex: number;
  timerStarted:boolean = false;
  gameTimer:any;
  constructor(teamName: string, scoreBoard: ScoreBoard, innings: string) {
    this.teamName = teamName;
    this.teamTotalScore = 0;
    this.totalBalls = 1;
    this.currentPlayerIndex = 1;
    
    const teamScoreColumn = document.createElement('div');
      teamScoreColumn.setAttribute('id', 'teamScoreColumn'+this.teamName);
      teamScoreColumn.setAttribute('class', 'col-md-4 text-center p-3');

        const div = document.createElement('div');
          div.innerHTML = `${this.teamName}`;
        const p = document.createElement('p');
          p.setAttribute('id', `${this.teamName}Score`);
          p.innerHTML = '0';
        const hitButton = document.createElement('button');
          hitButton.setAttribute('id', `${this.teamName}HitButton`);
          hitButton.setAttribute('class', `btn btn-primary`);
          hitButton.innerHTML = 'HIT';
          hitButton.onclick = () => {
          
            if(!this.timerStarted){
              this.startTimerInterval();
              this.timerStarted = true;
            }          
            setTimeout(() =>{
              hitButton.disabled =  true;
              this.clearTimerInterval();
                this.timerStarted = false;
                if(innings === 'first'){
                  const index = this.findHighestScorer();
                  scoreBoard.setTeam1Score(this.teamTotalScore);
                  scoreBoard.setTeam1HighestScorer(this.players[index].getPlayerName());
                } else {
                  const index = this.findHighestScorer();
                  scoreBoard.setTeam2Score(this.teamTotalScore);
                  scoreBoard.setTeam2HighestScorer(this.players[index].getPlayerName());
                  const btn = <HTMLInputElement>document.getElementById('resultsGenerateBtn');
                  if(btn){
                    btn.disabled = false;
                  }
                }
              }, 60000);
            if(this.currentPlayerIndex < 11){
              let runScoredInABall = this.hitBall();
              this.players[this.currentPlayerIndex].addRun(runScoredInABall, this.totalBalls);
              this.totalBalls++;
              if((runScoredInABall === 0) ||(this.totalBalls === 7)){ // || (runScoredInABall === 0)
                this.totalBalls = 1;
                this.currentPlayerIndex++;
              }
              this.teamTotalScore += runScoredInABall;
              if(innings === 'second'){
                const team1TotalScore = scoreBoard.getTeam1Score();
                if(team1TotalScore < this.teamTotalScore){
                  const index = this.findHighestScorer();
                  scoreBoard.setMoMatch(this.players[index].getPlayerName());
                  scoreBoard.winningTeam = this.teamName;
                  document.getElementById(`${this.teamName}HitButton`)?.setAttribute('disabled', 'true');  
                  const btn = <HTMLInputElement>document.getElementById('resultsGenerateBtn');
                  this.clearTimerInterval();
                  if(btn){
                    btn.disabled = false;
                  }
                }
              }
            } 
            if(this.currentPlayerIndex === 11){
              this.findHighestScorer();
              document.getElementById(`${this.teamName}HitButton`)?.setAttribute('disabled', 'true');
              this.clearTimerInterval()
              if(innings === 'second'){
                const index = this.findHighestScorer();
                scoreBoard.setTeam2Score(this.teamTotalScore);
                scoreBoard.setTeam2HighestScorer(this.players[index].getPlayerName());
                const team1TotalScore = scoreBoard.getTeam1Score();
                if(team1TotalScore === this.teamTotalScore){
                  scoreBoard.setWinningTeam('Drawn');
                } else if(team1TotalScore > this.teamTotalScore){
                  scoreBoard.setWinningTeam(scoreBoard.getTeam1Name());
                  scoreBoard.setMoMatch(scoreBoard.getTeam1HighestScorer());
                } else {
                  scoreBoard.setWinningTeam(scoreBoard.getTeam2Name());
                  scoreBoard.setMoMatch(scoreBoard.getTeam2HighestScorer());
                }
                const btn = <HTMLInputElement>document.getElementById('resultsGenerateBtn');
                if(btn){
                  btn.disabled = false;
                }
                
              } else {
                const index = this.findHighestScorer();
                scoreBoard.setTeam1Name(this.teamName);
                scoreBoard.setTeam1Score(this.teamTotalScore);
                scoreBoard.setTeam1HighestScorer(this.players[index].getPlayerName());
              }
              
            }
            const score = document.getElementById(`${this.teamName}Score`);
              if(score){
                score.innerHTML = this.teamTotalScore.toString();
              }
          }
      teamScoreColumn.append(div, p, hitButton);
    document.getElementById('teamsScoreRow')?.append(teamScoreColumn);


    const teamScoreBoardColumn = document.createElement('div');
      teamScoreBoardColumn.setAttribute('class','col-lg-5 text-uppercase text-center p-3');
      teamScoreBoardColumn.setAttribute('id',`teamScoreBoardColumn${this.teamName}`);
        const teamScoreBoardTitle = document.createElement('div');
          teamScoreBoardTitle.innerHTML = `${this.teamName} Score Board`;    
        const table = document.createElement('table');
          table.setAttribute('id', `table${this.teamName}`);
          table.setAttribute('class', `table border`);
          const thead = document.createElement('thead');
            const tr = document.createElement('tr');
              const thTeamName = document.createElement('th');
                thTeamName.setAttribute('scope', 'col');
                thTeamName.innerHTML = `${this.teamName}`;
              const thBall1 = document.createElement('th');
                thBall1.setAttribute('scope', 'col');
                thBall1.innerHTML = 'B1';  
              const thBall2 = document.createElement('th');
                thBall2.setAttribute('scope', 'col');
                thBall2.innerHTML = 'B2';  
              const thBall3 = document.createElement('th');
                thBall3.setAttribute('scope', 'col');
                thBall3.innerHTML = 'B3';  
              const thBall4 = document.createElement('th');
                thBall4.setAttribute('scope', 'col');
                thBall4.innerHTML = 'B4';  
              const thBall5 = document.createElement('th');
                thBall5.setAttribute('scope', 'col');
                thBall5.innerHTML = 'B5';  
              const thBall6 = document.createElement('th');
                thBall6.setAttribute('scope', 'col');
                thBall6.innerHTML = 'B6';
              const thTotal = document.createElement('th');
                thTotal.setAttribute('scope', 'col');
                thTotal.innerHTML = 'Total';  
              tr.append(thTeamName,thBall1,thBall2,thBall3,thBall4,thBall5,thBall6, thTotal);
            thead.append(tr);
          table.append(thead);
        teamScoreBoardColumn.append(teamScoreBoardTitle, table);
        document.getElementById('teamsScoreBoardRow')?.appendChild(teamScoreBoardColumn);  

    for(let i= 1; i <= 10; i++){
      this.players[i] = new Player(`player${i}`, `${this.teamName}`);
    }
    
  }
  getTeamName() {
    return this.teamName;
  }

  getTeamTotalScore(){
    return this.teamTotalScore;
  }

  getAllPlayersNames(): string[]{
    let nameArray:string[] = [];
    this.players.forEach(player => {
      nameArray.push(player.getPlayerName());
    });
    return nameArray;
  }

  findHighestScorer():number{
    let highestScorerIndex = 0;
      let highestScore = 0;
      this.players.forEach((player, index, arr) => {
        if(highestScore < player.total){
          highestScore = player.total;
          highestScorerIndex = index;
        }
      })

    return highestScorerIndex;
  }

  hitBall():number{
    return Math.floor(Math.random() * 7);
  }

  clearTimerInterval(){
    const timer = document.getElementById('timer');
      if(timer){
        timer.innerHTML = ''+60;
      }
    clearInterval(this.gameTimer);  
  };
  
  startTimerInterval(){
    let seconds = 60;
    this.gameTimer = setInterval(() => {
      const timer = document.getElementById('timer');
      if(timer){
        timer.innerHTML = ''+--seconds;
      }
    }, 1000);
  }
  
}
