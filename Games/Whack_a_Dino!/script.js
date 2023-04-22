html,
body {
  height: 100%;
}

body {
  background-color: #4dbd76;
  background: rgb(77,189,118);
  background: radial-gradient(circle, rgba(77,189,118,1) 0%, rgba(60,136,143,1) 100%);
  font-family: "Open Sans", Arial, Helvetica, sans-serif;
}

.game {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: auto 1fr 40px;
  justify-items: center;
  padding: 20px 10px;
}

.title {
  font-family: Modak, sans-serif;
  color: #ff8c00;
  font-size: 36px;
  letter-spacing: 2px;
  text-shadow: 1px 1px rgb(123, 67, 0);
  text-transform: uppercase;
}

.scoreboard {
  width: 100%;
  text-align: center;
  color: #FFF;
  font-size: 18px;
  display: flex;
  justify-content: space-around;
}

.start {
  position: relative;
  top: -20px;
  background-color: darkorange;
  color: #FFF;
  letter-spacing: 2px;
  font-weight: 600;
  font-size: 20px;
  border-radius: 4px;
  padding: 6px 20px;
  border: none;
  box-sizing: border-box;
  height: 40px;
  width: 200px;
  box-shadow: 2px 2px 4px rgb(123, 67, 0);
  text-shadow: -1px -1px rgba(0,0,0,0.3);
  cursor: pointer;
}

.start:focus {
  outline: none;
}

.start:active {
  box-shadow: inset 1px 1px 1px rgba(123, 67, 0, 0.49);
  outline: none;
}

@keyframes shake {
  45% { transform: translateX(0); }
  50% { transform: translateX(-6px); }
  60% { transform: translateX(6px); }
  65% { transform: translateX(0); }
}

.shake {
  animation: shake 300ms linear;
}

.field {
  width: 100%;
  max-width: 360px;
  margin: auto;
  position: relative;
  top: -30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-content: center;
}

.dino {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 110px;
  position: relative;
}

.dino:nth-child(3n),
.dino:nth-child(3n+1){
  position: relative;
  top: 60px;
}

.dino:last-child {
  grid-column-start: 2;
  top: 0;
}

@keyframes fadeUp {
  from { 
    transform: translateY(0) scale(1); 
    opacity: 0;
  }
  to { 
    transform: translateY(-15px) scale(1.2); 
    opacity: 1;
  }
}

.fadeUp {
  animation: fadeUp 500ms ease-out;
}

.points {
  position: absolute;
  top: 0;
  opacity: 0;
  color: #ffeb3b;
  text-shadow: 1px 1px #000;
  font-family: monospace;
  font-size: 1.4em;
  font-weight: bold;
  z-index: 1;
  pointer-events: none;
}

.points--red {
  color: #EF5350;
}

@keyframes slowly-peeking {
  0% { transform: translateY(80%); }
  20% { transform: translateY(80%); }
  40% { transform: translateY(10%); }
  42% { transform: translateY(25%); }
  70% { transform: translateY(25%); }
  90% { transform: translateY(-26%); }
  97.5% { transform: translateY(-26%); }
  99% { transform: translateY(-34%); }
  100% { transform: translateY(80%); }
}

@keyframes peeking {
  10% { transform: translateY(80%); }
  25% { transform: translateY(-26%); }
  27.5% { transform: translateY(-26%); }
  29% { transform: translateY(-26%); }
  30% { transform: translateY(-26%); }
  34% { transform: translateY(-34%); }
  36% { transform: translateY(80%); }
}

.dino #Dino {
  transform: translateY(80%);
  animation: slowly-peeking 10s infinite;
}

.no-touch .dino #Dino {
  cursor: pointer;
}

svg {
  user-select: none;
  outline: none;
}

.hide {
  visibility: hidden;
  pointer-events: none;
}
