<template>
  <div id="app">
    <section class="row">
      <HealthComponent :health="playerHealth" name="YOU" />
      <HealthComponent :health="monsterHealth" name="MONSTER" />
    </section>
    <section v-if="!newGameInSession" class="row controls">
      <div class="small-12 columns">
        <button @click="resetGame" id="start-game">START NEW GAME</button>
      </div>
    </section>
    <section v-else class="row controls">
      <div id="commands" class="small-12 columns">
        <button @click="attack" id="attack">ATTACK</button>
        <button @click="specialAttack" id="special-attack">
          SPECIAL ATTACK
        </button>
        <button @click="heal" id="heal">HEAL</button>
        <button @click="giveUp" id="give-up">GIVE UP</button>
      </div>
    </section>
    <section v-if="showLogs" class="row log">
      <div class="small-12 columns">
        <ul>
          <section v-for="(logItem, index) in logs" :key="'action' + index">
            <ActionRow :msg="logItem.msg" />
          </section>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import ActionRow from './components/ActionRow';
import HealthComponent from './components/HealthComponent';

const rng = () => Math.floor(Math.random() * 10) + 1;
const dice = (roll, data, callBack) => {
  let el;
  for (let i = 0; i < data.length; i++) {
    el = data[i];
    if (el.percent >= rng() * 10) {
      callBack(el.arg[0](rng()), el.arg[1](rng()), el.msg);
      break;
    }
  }
};

export default {
  name: 'app',
  data: () => ({
    playerHealth: 100,
    monsterHealth: 100,
    newGameInSession: false,
    deathHasOccured: false,
    logs: []
  }),
  computed: {
    showLogs: vm => vm.newGameInSession && vm.logs.length > 0
  },
  methods: {
    resetGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.newGameInSession = true;
      this.logs = [];
      this.deathHasOccured = false;
    },
    giveUp() {
      this.newGameInSession = false;
    },
    generalAttack(playerAttackDamage, monsterAttackDamage, critical = {}) {
      critical.player = critical.player || '';
      critical.monster = critical.monster || '';
      this.monsterHealth -= playerAttackDamage;
      this.playerHealth -= monsterAttackDamage;
      if (playerAttackDamage !== 0) { this.attackMessage(playerAttackDamage, critical, true); }
      if (monsterAttackDamage !== 0) { this.attackMessage(monsterAttackDamage, critical); }
    },
    attackMessage(attackDamage, critical, playerMove = false) {
      const { player, monster } = critical;
      if (player === '' && monster === '') critical = '';
      else critical = player || monster;
      const message = !playerMove
        ? 'MONSTER HITS PLAYER FOR'
        : 'PLAYER HITS MONSTER FOR';
      this.logs.push({ msg: `${message} ${attackDamage} ${critical}` });
    },
    attack() {
      if (this.deathHasOccured) return;
      const playerAttackDamage = rng();
      const monsterAttackDamage = rng();
      this.generalAttack(playerAttackDamage, monsterAttackDamage);
    },
    heal() {
      if (this.deathHasOccured) return;
      const healThisMuch = Math.round(rng() * 1.2);
      if (this.playerHealth + healThisMuch > 100) {
        this.logs.push({
          msg: `PLAYER HEALS HIMSELF FOR ${100 - this.playerHealth}`
        });
        this.playerHealth = 100;
      } else {
        this.playerHealth += healThisMuch;
        this.logs.push({
          msg: `PLAYER HEALS HIMSELF FOR ${healThisMuch}`
        });
      }
      this.generalAttack(0, rng());
    },
    specialAttack() {
      if (this.deathHasOccured) return;
      const roll = Math.round(Math.random() * 10) * 10;
      dice(
        roll,
        [{ percent: 20, arg: [x => x, x => x * 2], msg: { monster: '(x2damage)' } },
          { percent: 20, arg: [x => x * 2, x => x], msg: { player: '(x3damage)' } },
          { percent: 20, arg: [x => x * 3, x => x], msg: { player: '(x4damage)' } },
          { percent: 20, arg: [x => x * 4, x => x], msg: { player: '(x2damage)' } },
          { percent: 10, arg: [x => x, x => x + 100], msg: { monster: '(instant death)' } },
          { percent: 10, arg: [x => x + 100, x => x], msg: { player: '(instant death)' } },
          { percent: 100, arg: [x => x, x => x] }
        ],
        this.generalAttack);
    },
    gameOverAlert(result) {
      const modal = confirm(
        'You' + result + ' do you want to start a new game?'
      );
      if (modal) this.resetGame();
    }
  },
  watch: {
    playerHealth(value) {
      if (value <= 0) {
        this.deathHasOccured = true;
        this.$nextTick(() => this.gameOverAlert(' loose'));
      }
    },
    monsterHealth(value) {
      if (value <= 0) {
        this.deathHasOccured = true;
        this.$nextTick(() => this.gameOverAlert(' win'));
      }
    }
  },
  components: { ActionRow, HealthComponent }
};
</script>

<style>
</style>
