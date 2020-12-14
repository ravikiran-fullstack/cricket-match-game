export class Player{
  playerName: string;
  runs: number[];
  total: number;
  teamName: string;
  constructor(playerName: string, teamName: string){
    this.playerName = playerName;
    this.teamName = teamName;
    this.runs = [];
    this.total = 0;
    const tr = this.addPlayerRowToTable();
    document.getElementById(`table${this.teamName}`)?.append(tr);
  }

  addPlayerRowToTable(): HTMLElement{
    const tr = document.createElement('tr');
    const tdTeamName = document.createElement('th');
      tdTeamName.setAttribute('scope', 'col');
      tdTeamName.innerHTML = `${this.playerName}`;
    const tdBall1 = document.createElement('td');
      tdBall1.setAttribute('id', `${this.teamName}${this.playerName}B1`);
      tdBall1.innerHTML = '';  
    const tdBall2 = document.createElement('td');
      tdBall2.setAttribute('id', `${this.teamName}${this.playerName}B2`);
      tdBall2.innerHTML = '';  
    const tdBall3 = document.createElement('td');
      tdBall3.setAttribute('id', `${this.teamName}${this.playerName}B3`);
      tdBall3.innerHTML = '';  
    const tdBall4 = document.createElement('td');
      tdBall4.setAttribute('id', `${this.teamName}${this.playerName}B4`);
      tdBall4.innerHTML = '';  
    const tdBall5 = document.createElement('td');
      tdBall5.setAttribute('id', `${this.teamName}${this.playerName}B5`);
      tdBall5.innerHTML = '';  
    const tdBall6 = document.createElement('td');
      tdBall6.setAttribute('id', `${this.teamName}${this.playerName}B6`);
      tdBall6.innerHTML = '';
    const tdTotal = document.createElement('td');
      tdTotal.setAttribute('id', `${this.teamName}${this.playerName}Total`);
      tdTotal.innerHTML = '';    
    tr.append(tdTeamName,tdBall1,tdBall2,tdBall3,tdBall4,tdBall5,tdBall6, tdTotal);
    return tr;
  }

  addRun(run:number, ballCount: number){
    this.total += run;
    this.runs.push(run);
    this.updatePlayerTotal();
    const scoreDiv = document.getElementById(`${this.teamName}${this.playerName}B${ballCount}`);
    if(scoreDiv){
      scoreDiv.innerHTML = ""+run; 
    }
    
  }

  updatePlayerTotal(){
    const playerTotal = document.getElementById(`${this.teamName}${this.playerName}Total`);
    if(playerTotal){
      playerTotal.innerHTML = ""+this.total;
    }
  }

  getPlayerTotalRuns():number{
    return this.total;
  }

  getPlayerName():string{
    return this.playerName;
  }
}