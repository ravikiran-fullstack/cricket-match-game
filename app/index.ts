import {Game} from './game.ts';
const btn = <HTMLButtonElement>document.getElementById('startGame');
if(btn){
  btn.onclick = () => {
    btn.disabled = true;
    const game = new Game();
  }
}

