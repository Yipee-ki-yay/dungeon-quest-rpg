# Dungeon quest rpg

The dungeon-quest-rpg is a simple, lightweight vanilla JavaScript game based on FreeCodeCamp course.
It could be embeded to the page to add some oomph to it.

## Get started

1) Add element with "dungeon-quest-rpg" id to your code.

2) Import initDungeonQuest function and use whether element in DOM or once component with an appropriate id is mounted:
```import { initDungeonQuest } from 'dungeon-quest-rpg';```

3) Optional. Add ready to go styles for the game.
```import 'dungeon-quest-rpg/style.css';```

4) You are able to add your own styles. There is an html structure you'll face
```html
<div id="stats">
  <span class="stat">XP: <strong><span id="xpText">0</span></strong></span>
  <span class="stat">Health: <strong><span id="healthText">100</span></strong></span>
  <span class="stat">Gold: <strong><span id="goldText">50</span></strong></span>
</div>
<div id="controls">
  <button id="button1">Go to store</button>
  <button id="button2">Go to cave</button>
  <button id="button3">Fight dragon</button>
</div>
<div id="monsterStats">
  <span class="stat">Monster Name: <strong><span id="monsterName"></span></strong></span>
  <span class="stat">Health: <strong><span id="monsterHealth"></span></strong></span>
</div>
<div id="text">
  Welcome to Dragon Repeller. You must defeat the dragon that is preventing people from leaving the town. You are in the town square. Where do you want to go? Use the buttons above.
</div>
```
