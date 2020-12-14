import {Player} from './player.ts';
export class ScoreBoard{
  team1Name: string;
  team1Score: number;
  team1HighestScorer: string;
  team2Name: string;
  team2Score: number;
  team2HighestScorer: string;
  winningTeam: string;
  manOfTheMatch:string;
  constructor(){
    this.team1Name = '';
    this.team2Name = '';
    this.winningTeam = '';
    this.manOfTheMatch = '';
    this.team1HighestScorer = '';
    this.team2HighestScorer = '';
    this.team1Score = 0;
    this.team2Score = 0;
  }

  setTeam1Name(name: string){
    this.team1Name = name;
  }

  getTeam1Name(){
    return this.team1Name;
  }

  setTeam2Name(name: string){
    this.team2Name = name;
  }

  getTeam2Name(){
    return this.team2Name;
  }

  setTeam1Score(team1Score: number){
    this.team1Score = team1Score;
  }

  getTeam1Score(){
    return this.team1Score;
  }

  setTeam2Score(team2Score: number){
    this.team2Score = team2Score;
  }

  getTeam2Score(){
    return this.team2Score;
  }

  setTeam1HighestScorer(name: string){
    this.team1HighestScorer = name;
  }

  getTeam1HighestScorer(){
    return this.team1HighestScorer;
  }

  setTeam2HighestScorer(name: string){
    this.team2HighestScorer = name;
  }

  getTeam2HighestScorer(){
    return this.team2HighestScorer;
  }

  setWinningTeam(name: string){
    this.winningTeam = name;
  }

  setMoMatch(playerName: string){
    this.manOfTheMatch = playerName;
  }

  getMoMatch(){
    return this.manOfTheMatch;
  }
}