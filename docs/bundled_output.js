/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/game.ts":
/*!*********************!*\
  !*** ./app/game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Game\": () => /* binding */ Game\n/* harmony export */ });\n/* harmony import */ var _scoreBoard_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scoreBoard.ts */ \"./app/scoreBoard.ts\");\n/* harmony import */ var _team_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./team.ts */ \"./app/team.ts\");\n\r\n\r\nclass Game {\r\n    constructor() {\r\n        var _a, _b;\r\n        this.team1Score = 0;\r\n        this.team2Score = 0;\r\n        const gameContainer = document.createElement('div');\r\n        gameContainer.setAttribute('id', 'gameContainer');\r\n        gameContainer.setAttribute('class', 'container mt-5');\r\n        const mainHeadingRow = document.createElement('div');\r\n        mainHeadingRow.setAttribute('class', 'row');\r\n        const mainHeadingRowColumn = document.createElement('div');\r\n        mainHeadingRowColumn.setAttribute('class', 'col-md-10 offset-md-1 text-center text-uppercase p-3');\r\n        mainHeadingRowColumn.innerHTML = 'Cricket 10';\r\n        mainHeadingRow.append(mainHeadingRowColumn);\r\n        gameContainer.append(mainHeadingRow);\r\n        const teamsScoreRow = document.createElement('div');\r\n        teamsScoreRow.setAttribute('id', 'teamsScoreRow');\r\n        teamsScoreRow.classList.add('row');\r\n        gameContainer.append(teamsScoreRow);\r\n        document.body.append(gameContainer);\r\n        const teamsScoreBoardRow = document.createElement('div');\r\n        teamsScoreBoardRow.setAttribute('id', 'teamsScoreBoardRow');\r\n        teamsScoreBoardRow.setAttribute('class', 'row');\r\n        gameContainer.append(teamsScoreBoardRow);\r\n        document.body.append(gameContainer);\r\n        const scoreBoard = new _scoreBoard_ts__WEBPACK_IMPORTED_MODULE_0__.ScoreBoard();\r\n        this.team1 = new _team_ts__WEBPACK_IMPORTED_MODULE_1__.Team('India', scoreBoard, 'first');\r\n        const timerColumn = document.createElement('div');\r\n        timerColumn.setAttribute('class', 'col-md-4 text-center p-3');\r\n        const timerTitle = document.createElement('div');\r\n        timerTitle.innerHTML = 'Timer';\r\n        const timerValue = document.createElement('p');\r\n        timerValue.setAttribute('id', 'timer');\r\n        timerValue.innerHTML = '0';\r\n        timerColumn.append(timerTitle, timerValue);\r\n        (_a = document.getElementById('teamsScoreRow')) === null || _a === void 0 ? void 0 : _a.append(timerColumn);\r\n        const resultsColumn = document.createElement('div');\r\n        resultsColumn.setAttribute('class', 'col-md-2 text-center p-3');\r\n        resultsColumn.setAttribute('id', 'resultsColumn');\r\n        resultsColumn.innerHTML = 'Results';\r\n        const resultsGenerateBtn = document.createElement('button');\r\n        resultsGenerateBtn.setAttribute('id', 'resultsGenerateBtn');\r\n        resultsGenerateBtn.setAttribute('class', 'btn btn-primary');\r\n        resultsGenerateBtn.disabled = true;\r\n        resultsGenerateBtn.innerHTML = 'Generate Results';\r\n        resultsGenerateBtn.onclick = () => {\r\n            const matchResults = document.getElementById('matchResults');\r\n            matchResults.style.display = 'block';\r\n            const resultMoM = document.getElementById('manOfTheMatchResult');\r\n            if (resultMoM) {\r\n                resultMoM.innerHTML = scoreBoard.getMoMatch();\r\n            }\r\n            const resultWinner = document.getElementById('winnerResult');\r\n            if (resultWinner && scoreBoard.manOfTheMatch) {\r\n                resultWinner.innerHTML = scoreBoard.winningTeam;\r\n            }\r\n        };\r\n        const matchResultsDiv = document.createElement('div');\r\n        matchResultsDiv.setAttribute('id', 'matchResults');\r\n        matchResultsDiv.style.display = 'none';\r\n        const winner = document.createElement('div');\r\n        winner.innerHTML = 'Math Won By';\r\n        const winnerResult = document.createElement('div');\r\n        winnerResult.setAttribute('id', 'winnerResult');\r\n        const manOfTheMatch = document.createElement('div');\r\n        manOfTheMatch.innerHTML = 'Man of the Match';\r\n        const manOfTheMatchResult = document.createElement('div');\r\n        manOfTheMatchResult.setAttribute('id', 'manOfTheMatchResult');\r\n        matchResultsDiv.append(winner, winnerResult, manOfTheMatch, manOfTheMatchResult);\r\n        resultsColumn.append(resultsGenerateBtn, matchResultsDiv);\r\n        (_b = document.getElementById('teamsScoreBoardRow')) === null || _b === void 0 ? void 0 : _b.append(resultsColumn);\r\n        this.team1Score = this.team1.getTeamTotalScore();\r\n        this.team2 = new _team_ts__WEBPACK_IMPORTED_MODULE_1__.Team('Australia', scoreBoard, 'second');\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://cricket-match-weekly-assessment-week-5/./app/game.ts?");

/***/ }),

/***/ "./app/index.ts":
/*!**********************!*\
  !*** ./app/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.ts */ \"./app/game.ts\");\n\r\nconst btn = document.getElementById('startGame');\r\nif (btn) {\r\n    btn.onclick = () => {\r\n        btn.disabled = true;\r\n        const game = new _game_ts__WEBPACK_IMPORTED_MODULE_0__.Game();\r\n    };\r\n}\r\n\n\n//# sourceURL=webpack://cricket-match-weekly-assessment-week-5/./app/index.ts?");

/***/ }),

/***/ "./app/player.ts":
/*!***********************!*\
  !*** ./app/player.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => /* binding */ Player\n/* harmony export */ });\nclass Player {\r\n    constructor(playerName, teamName) {\r\n        var _a;\r\n        this.playerName = playerName;\r\n        this.teamName = teamName;\r\n        this.runs = [];\r\n        this.total = 0;\r\n        const tr = this.addPlayerRowToTable();\r\n        (_a = document.getElementById(`table${this.teamName}`)) === null || _a === void 0 ? void 0 : _a.append(tr);\r\n    }\r\n    addPlayerRowToTable() {\r\n        const tr = document.createElement('tr');\r\n        const tdTeamName = document.createElement('th');\r\n        tdTeamName.setAttribute('scope', 'col');\r\n        tdTeamName.innerHTML = `${this.playerName}`;\r\n        const tdBall1 = document.createElement('td');\r\n        tdBall1.setAttribute('id', `${this.teamName}${this.playerName}B1`);\r\n        tdBall1.innerHTML = '';\r\n        const tdBall2 = document.createElement('td');\r\n        tdBall2.setAttribute('id', `${this.teamName}${this.playerName}B2`);\r\n        tdBall2.innerHTML = '';\r\n        const tdBall3 = document.createElement('td');\r\n        tdBall3.setAttribute('id', `${this.teamName}${this.playerName}B3`);\r\n        tdBall3.innerHTML = '';\r\n        const tdBall4 = document.createElement('td');\r\n        tdBall4.setAttribute('id', `${this.teamName}${this.playerName}B4`);\r\n        tdBall4.innerHTML = '';\r\n        const tdBall5 = document.createElement('td');\r\n        tdBall5.setAttribute('id', `${this.teamName}${this.playerName}B5`);\r\n        tdBall5.innerHTML = '';\r\n        const tdBall6 = document.createElement('td');\r\n        tdBall6.setAttribute('id', `${this.teamName}${this.playerName}B6`);\r\n        tdBall6.innerHTML = '';\r\n        const tdTotal = document.createElement('td');\r\n        tdTotal.setAttribute('id', `${this.teamName}${this.playerName}Total`);\r\n        tdTotal.innerHTML = '';\r\n        tr.append(tdTeamName, tdBall1, tdBall2, tdBall3, tdBall4, tdBall5, tdBall6, tdTotal);\r\n        return tr;\r\n    }\r\n    addRun(run, ballCount) {\r\n        this.total += run;\r\n        this.runs.push(run);\r\n        this.updatePlayerTotal();\r\n        const scoreDiv = document.getElementById(`${this.teamName}${this.playerName}B${ballCount}`);\r\n        if (scoreDiv) {\r\n            scoreDiv.innerHTML = \"\" + run;\r\n        }\r\n    }\r\n    updatePlayerTotal() {\r\n        const playerTotal = document.getElementById(`${this.teamName}${this.playerName}Total`);\r\n        if (playerTotal) {\r\n            playerTotal.innerHTML = \"\" + this.total;\r\n        }\r\n    }\r\n    getPlayerTotalRuns() {\r\n        return this.total;\r\n    }\r\n    getPlayerName() {\r\n        return this.playerName;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://cricket-match-weekly-assessment-week-5/./app/player.ts?");

/***/ }),

/***/ "./app/scoreBoard.ts":
/*!***************************!*\
  !*** ./app/scoreBoard.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ScoreBoard\": () => /* binding */ ScoreBoard\n/* harmony export */ });\nclass ScoreBoard {\r\n    constructor() {\r\n        this.team1Name = '';\r\n        this.team2Name = '';\r\n        this.winningTeam = '';\r\n        this.manOfTheMatch = '';\r\n        this.team1HighestScorer = '';\r\n        this.team2HighestScorer = '';\r\n        this.team1Score = 0;\r\n        this.team2Score = 0;\r\n    }\r\n    setTeam1Name(name) {\r\n        this.team1Name = name;\r\n    }\r\n    getTeam1Name() {\r\n        return this.team1Name;\r\n    }\r\n    setTeam2Name(name) {\r\n        this.team2Name = name;\r\n    }\r\n    getTeam2Name() {\r\n        return this.team2Name;\r\n    }\r\n    setTeam1Score(team1Score) {\r\n        this.team1Score = team1Score;\r\n    }\r\n    getTeam1Score() {\r\n        return this.team1Score;\r\n    }\r\n    setTeam2Score(team2Score) {\r\n        this.team2Score = team2Score;\r\n    }\r\n    getTeam2Score() {\r\n        return this.team2Score;\r\n    }\r\n    setTeam1HighestScorer(name) {\r\n        this.team1HighestScorer = name;\r\n    }\r\n    getTeam1HighestScorer() {\r\n        return this.team1HighestScorer;\r\n    }\r\n    setTeam2HighestScorer(name) {\r\n        this.team2HighestScorer = name;\r\n    }\r\n    getTeam2HighestScorer() {\r\n        return this.team2HighestScorer;\r\n    }\r\n    setWinningTeam(name) {\r\n        this.winningTeam = name;\r\n    }\r\n    setMoMatch(playerName) {\r\n        this.manOfTheMatch = playerName;\r\n    }\r\n    getMoMatch() {\r\n        return this.manOfTheMatch;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://cricket-match-weekly-assessment-week-5/./app/scoreBoard.ts?");

/***/ }),

/***/ "./app/team.ts":
/*!*********************!*\
  !*** ./app/team.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Team\": () => /* binding */ Team\n/* harmony export */ });\n/* harmony import */ var _player_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.ts */ \"./app/player.ts\");\n\r\nclass Team {\r\n    constructor(teamName, scoreBoard, innings) {\r\n        var _a, _b;\r\n        this.players = [];\r\n        this.timerStarted = false;\r\n        this.teamName = teamName;\r\n        this.teamTotalScore = 0;\r\n        this.totalBalls = 1;\r\n        this.currentPlayerIndex = 1;\r\n        const teamScoreColumn = document.createElement('div');\r\n        teamScoreColumn.setAttribute('id', 'teamScoreColumn' + this.teamName);\r\n        teamScoreColumn.setAttribute('class', 'col-md-4 text-center p-3');\r\n        const div = document.createElement('div');\r\n        div.innerHTML = `${this.teamName}Score`;\r\n        const p = document.createElement('p');\r\n        p.setAttribute('id', `${this.teamName}Score`);\r\n        p.innerHTML = '0';\r\n        const hitButton = document.createElement('button');\r\n        hitButton.setAttribute('id', `${this.teamName}HitButton`);\r\n        hitButton.setAttribute('class', `btn btn-primary`);\r\n        hitButton.innerHTML = 'HIT';\r\n        hitButton.onclick = () => {\r\n            var _a, _b;\r\n            if (!this.timerStarted) {\r\n                this.startTimerInterval();\r\n                this.timerStarted = true;\r\n            }\r\n            setTimeout(() => {\r\n                hitButton.disabled = true;\r\n                this.clearTimerInterval();\r\n                this.timerStarted = false;\r\n                if (innings === 'first') {\r\n                    const index = this.findHighestScorer();\r\n                    scoreBoard.setTeam1Score(this.teamTotalScore);\r\n                    scoreBoard.setTeam1HighestScorer(this.players[index].getPlayerName());\r\n                }\r\n                else {\r\n                    const index = this.findHighestScorer();\r\n                    scoreBoard.setTeam2Score(this.teamTotalScore);\r\n                    scoreBoard.setTeam2HighestScorer(this.players[index].getPlayerName());\r\n                    const btn = document.getElementById('resultsGenerateBtn');\r\n                    if (btn) {\r\n                        btn.disabled = false;\r\n                    }\r\n                }\r\n            }, 60000);\r\n            if (this.currentPlayerIndex < 11) {\r\n                let runScoredInABall = this.hitBall();\r\n                this.players[this.currentPlayerIndex].addRun(runScoredInABall, this.totalBalls);\r\n                this.totalBalls++;\r\n                if ((runScoredInABall === 0) || (this.totalBalls === 7)) { // || (runScoredInABall === 0)\r\n                    this.totalBalls = 1;\r\n                    this.currentPlayerIndex++;\r\n                }\r\n                this.teamTotalScore += runScoredInABall;\r\n                if (innings === 'second') {\r\n                    const team1TotalScore = scoreBoard.getTeam1Score();\r\n                    if (team1TotalScore < this.teamTotalScore) {\r\n                        const index = this.findHighestScorer();\r\n                        scoreBoard.setMoMatch(this.players[index].getPlayerName());\r\n                        scoreBoard.winningTeam = this.teamName;\r\n                        (_a = document.getElementById(`${this.teamName}HitButton`)) === null || _a === void 0 ? void 0 : _a.setAttribute('disabled', 'true');\r\n                        const btn = document.getElementById('resultsGenerateBtn');\r\n                        this.clearTimerInterval();\r\n                        if (btn) {\r\n                            btn.disabled = false;\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n            if (this.currentPlayerIndex === 11) {\r\n                this.findHighestScorer();\r\n                (_b = document.getElementById(`${this.teamName}HitButton`)) === null || _b === void 0 ? void 0 : _b.setAttribute('disabled', 'true');\r\n                this.clearTimerInterval();\r\n                if (innings === 'second') {\r\n                    const index = this.findHighestScorer();\r\n                    scoreBoard.setTeam2Score(this.teamTotalScore);\r\n                    scoreBoard.setTeam2HighestScorer(this.players[index].getPlayerName());\r\n                    const team1TotalScore = scoreBoard.getTeam1Score();\r\n                    if (team1TotalScore === this.teamTotalScore) {\r\n                        scoreBoard.setWinningTeam('Drawn');\r\n                    }\r\n                    else if (team1TotalScore > this.teamTotalScore) {\r\n                        scoreBoard.setWinningTeam(scoreBoard.getTeam1Name());\r\n                        scoreBoard.setMoMatch(scoreBoard.getTeam1HighestScorer());\r\n                    }\r\n                    else {\r\n                        scoreBoard.setWinningTeam(scoreBoard.getTeam2Name());\r\n                        scoreBoard.setMoMatch(scoreBoard.getTeam2HighestScorer());\r\n                    }\r\n                    const btn = document.getElementById('resultsGenerateBtn');\r\n                    if (btn) {\r\n                        btn.disabled = false;\r\n                    }\r\n                }\r\n                else {\r\n                    const index = this.findHighestScorer();\r\n                    scoreBoard.setTeam1Name(this.teamName);\r\n                    scoreBoard.setTeam1Score(this.teamTotalScore);\r\n                    scoreBoard.setTeam1HighestScorer(this.players[index].getPlayerName());\r\n                }\r\n            }\r\n            const score = document.getElementById(`${this.teamName}Score`);\r\n            if (score) {\r\n                score.innerHTML = this.teamTotalScore.toString();\r\n            }\r\n        };\r\n        teamScoreColumn.append(div, p, hitButton);\r\n        (_a = document.getElementById('teamsScoreRow')) === null || _a === void 0 ? void 0 : _a.append(teamScoreColumn);\r\n        const teamScoreBoardColumn = document.createElement('div');\r\n        teamScoreBoardColumn.setAttribute('class', 'col-lg-5 text-uppercase text-center p-3');\r\n        teamScoreBoardColumn.setAttribute('id', `teamScoreBoardColumn${this.teamName}`);\r\n        const teamScoreBoardTitle = document.createElement('div');\r\n        teamScoreBoardTitle.innerHTML = `${this.teamName} Score Board`;\r\n        const table = document.createElement('table');\r\n        table.setAttribute('id', `table${this.teamName}`);\r\n        table.setAttribute('class', `table border`);\r\n        const thead = document.createElement('thead');\r\n        const tr = document.createElement('tr');\r\n        const thTeamName = document.createElement('th');\r\n        thTeamName.setAttribute('scope', 'col');\r\n        thTeamName.innerHTML = `${this.teamName}`;\r\n        const thBall1 = document.createElement('th');\r\n        thBall1.setAttribute('scope', 'col');\r\n        thBall1.innerHTML = 'B1';\r\n        const thBall2 = document.createElement('th');\r\n        thBall2.setAttribute('scope', 'col');\r\n        thBall2.innerHTML = 'B2';\r\n        const thBall3 = document.createElement('th');\r\n        thBall3.setAttribute('scope', 'col');\r\n        thBall3.innerHTML = 'B3';\r\n        const thBall4 = document.createElement('th');\r\n        thBall4.setAttribute('scope', 'col');\r\n        thBall4.innerHTML = 'B4';\r\n        const thBall5 = document.createElement('th');\r\n        thBall5.setAttribute('scope', 'col');\r\n        thBall5.innerHTML = 'B5';\r\n        const thBall6 = document.createElement('th');\r\n        thBall6.setAttribute('scope', 'col');\r\n        thBall6.innerHTML = 'B6';\r\n        const thTotal = document.createElement('th');\r\n        thTotal.setAttribute('scope', 'col');\r\n        thTotal.innerHTML = 'Total';\r\n        tr.append(thTeamName, thBall1, thBall2, thBall3, thBall4, thBall5, thBall6, thTotal);\r\n        thead.append(tr);\r\n        table.append(thead);\r\n        teamScoreBoardColumn.append(teamScoreBoardTitle, table);\r\n        (_b = document.getElementById('teamsScoreBoardRow')) === null || _b === void 0 ? void 0 : _b.appendChild(teamScoreBoardColumn);\r\n        for (let i = 1; i <= 10; i++) {\r\n            this.players[i] = new _player_ts__WEBPACK_IMPORTED_MODULE_0__.Player(`player${i}`, `${this.teamName}`);\r\n        }\r\n    }\r\n    getTeamName() {\r\n        return this.teamName;\r\n    }\r\n    getTeamTotalScore() {\r\n        return this.teamTotalScore;\r\n    }\r\n    getAllPlayersNames() {\r\n        let nameArray = [];\r\n        this.players.forEach(player => {\r\n            nameArray.push(player.getPlayerName());\r\n        });\r\n        return nameArray;\r\n    }\r\n    findHighestScorer() {\r\n        let highestScorerIndex = 0;\r\n        let highestScore = 0;\r\n        this.players.forEach((player, index, arr) => {\r\n            if (highestScore < player.total) {\r\n                highestScore = player.total;\r\n                highestScorerIndex = index;\r\n            }\r\n        });\r\n        return highestScorerIndex;\r\n    }\r\n    hitBall() {\r\n        return Math.floor(Math.random() * 7);\r\n    }\r\n    clearTimerInterval() {\r\n        const timer = document.getElementById('timer');\r\n        if (timer) {\r\n            timer.innerHTML = '' + 0;\r\n        }\r\n        clearInterval(this.gameTimer);\r\n    }\r\n    ;\r\n    startTimerInterval() {\r\n        let seconds = 1;\r\n        this.gameTimer = setInterval(() => {\r\n            const timer = document.getElementById('timer');\r\n            if (timer) {\r\n                timer.innerHTML = '' + seconds++;\r\n            }\r\n        }, 1000);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://cricket-match-weekly-assessment-week-5/./app/team.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./app/index.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;