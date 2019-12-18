<template>
  <div id="app">
    <section class="row">
      <HealthComponent :health="playerHealth" name="YOU"/>
      <HealthComponent :health="monsterHealth" name="MONSTER" />
    </section>
    <section v-if="!newGameInSession" class="row controls">
      <div class="small-12 columns">
        <button id="start-game" @click='resetGame'>START NEW GAME</button>
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
import ActionRow from "./components/ActionRow";
import HealthComponent from "./components/HealthComponent";

const rng = () => Math.floor(Math.random() * 10) + 1

export default {
  name: 'app',
  data: () => ({
    playerHealth: 100,
    monsterHealth: 100,
    newGameInSession: false,
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
    },
    giveUp() {
      this.newGameInSession = false;
    },
    generalAttack(playerAttackDamage, monsterAttackDamage, critical={}) {
      critical.player = critical.player || '';
      critical.monster = critical.monster || '';
      this.monsterHealth -= playerAttackDamage;
      this.playerHealth -= monsterAttackDamage;
      if (playerAttackDamage != 0) this.attackMessage(playerAttackDamage, critical,true);
      if (monsterAttackDamage != 0) this.attackMessage(monsterAttackDamage, critical);
    },
    attackMessage(attackDamage, critical,playerMove = false) {
      const { player,monster } = critical;
      if(player==='' && monster==='') critical=''
      else critical = player ? player : monster;
      const message = !playerMove? 'MONSTER HITS PLAYER FOR': 'PLAYER HITS MONSTER FOR';
      this.logs.push(
        { msg: `${message} ${attackDamage} ${critical}`});
    },
    attack() {
      let playerAttackDamage = rng();
      let monsterAttackDamage = rng();
      this.generalAttack(playerAttackDamage, monsterAttackDamage);
    },
    heal() {
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
      /* 20% moster deals double damage to player
      20% that user deals double damage to monster
      20% that user deals triple demage
      20% that user deals 4 times the damade
      10% that monster does a critical and kills player
      10% that monster dies from players critical*/
      // TODO: refactor this repeating code
      const prefix = ' ';
      const roll = Math.round(Math.random() * 10);
      if (roll === 1 || roll === 2) {
        this.generalAttack(rng(), rng() * 2, {
          monster: prefix + "(2x damage)"
        });
      } else if (roll === 3 || roll === 4) {
        this.generalAttack(rng() * 2, rng(), {
          player: prefix + "(x2 damage)"
        });
      } else if (roll === 5 || roll === 6) {
        this.generalAttack(rng() * 3, rng(), {
          player: prefix + "(x3)"
        });
      } else if (roll === 7 || roll === 8) {
        this.generalAttack(rng() * 4, rng(), {
          player: prefix + "(x4 damage)"
        });
      } else if (roll === 9) {
        this.generalAttack(rng(), rng() + 100, {
          monster: prefix + "(critical attack instant death)"
        });
      } else if (roll === 10) {
        this.generalAttack(rng() + 200, rng(), {
          player: prefix + "(critical attack instant death)"
        });
      }
    },
    gameOverAlert(result) {
      const modal = confirm("You" + result + " do you want to start a new game?");
      if (modal) this.resetGame();
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0) this.$nextTick(() => this.gameOverAlert(' loose'));
    },
    monsterHealth(value) {
      if (value <= 0) this.$nextTick(() => this.gameOverAlert(' win'));
    }
  },
  components: { ActionRow, HealthComponent }
};
</script>

<style></style>
