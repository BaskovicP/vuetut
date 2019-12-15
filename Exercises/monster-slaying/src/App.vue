<template>
  <div id="app">
    <section class="row">
      <HealthComponent name="YOU" :health="playerHealth" />
      <HealthComponent name="MONSTER" :health="monsterHealth" />
    </section>
    <section class="row controls">
      <div class="small-12 columns">
        <button id="start-game" @click="resetGame">START NEW GAME</button>
      </div>
    </section>
    <section v-if="newGameInSession" class="row controls">
      <div class="small-12 columns" id="commands">
        <button id="attack" @click="attack">ATTACK</button>
        <button id="special-attack" @click="specialAttack">
          SPECIAL ATTACK
        </button>
        <button id="heal" @click="heal">HEAL</button>
        <button id="give-up" @click="giveUp">GIVE UP</button>
      </div>
    </section>
    <section v-if="showLogs" class="row log">
      <div class="small-12 columns">
        <ul>
          <section v-for="(logItem, index) in logs" :key="'action' + index">
            <ActionRow
              :subject="logItem.subject"
              :acusativus="logItem.acusativus"
              :damage="logItem.damage"
              :critical="logItem.critical"
            />
          </section>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import ActionRow from "./components/ActionRow.vue";
import HealthComponent from "./components/HealthComponent.vue";

export default {
  name: "app",
  components: {
    ActionRow,
    HealthComponent
  },
  data: function() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      newGameInSession: false,
      logs: []
    };
  },
  computed: {
    showLogs: function() {
      return this.newGameInSession && this.logs.length > 0;
    }
  },
  watch: {
    playerHealth: function() {
      if (this.playerHealth <= 0) this.gameOverAlert(" loose");
    },
    monsterHealth: function() {
      if (this.monsterHealth <= 0) this.gameOverAlert(" win");
    }
  },
  methods: {
    resetGame: function() {
      (this.playerHealth = 100),
        (this.monsterHealth = 100),
        (this.newGameInSession = true),
        (this.logs = []);
    },
    giveUp: function() {
      this.newGameInSession = false;
    },
    generalAttack: function(
      playerAttackDamage,
      monsterAttackDamage,
      critical = ""
    ) {
      this.monsterHealth -= playerAttackDamage;
      this.playerHealth -= monsterAttackDamage;
      if (playerAttackDamage != 0)
        this.logs.push({
          subject: "PLAYER",
          acusativus: "MONSTER",
          damage: playerAttackDamage,
          critical: critical.player
        });
      if (monsterAttackDamage != 0)
        this.logs.push({
          subject: "MONSTER",
          acusativus: "PLAYER",
          damage: monsterAttackDamage,
          critical: critical.monster
        });
    },
    randomGenerator: function() {
      return Math.floor(Math.random() * 10) + 1;
    },
    attack: function() {
      let playerAttackDamage = this.randomGenerator();
      let monsterAttackDamage = this.randomGenerator();
      this.generalAttack(playerAttackDamage, monsterAttackDamage);
    },
    heal: function() {
      const healThisMuch = Math.round(this.randomGenerator() * 1.4);
      if (this.playerHealth + healThisMuch > 100) this.playerHealth = 100;
      else this.playerHealth += healThisMuch;
      this.generalAttack(0, this.randomGenerator());
    },
    specialAttack: function() {
      /* 20% moster deals double damage to player
      20% that user deals double damage to monster
      20% that user deals triple demage
      20% that user deals 4 times the damade
      10% that monster does a critical and kills player
      10% that monster dies from players critical*/

      // TODO: refactor this repeating code
      const randomGenerator = this.randomGenerator;
      const prefix = "--";
      const roll = Math.round(Math.random() * 10);
      if (roll === 1 || roll === 2) {
        this.generalAttack(randomGenerator(), randomGenerator() * 2, {
          monster: prefix + "2x damage"
        });
      } else if (roll === 3 || roll === 4) {
        this.generalAttack(randomGenerator() * 2, randomGenerator(), {
          player: prefix + "(x2 damage)"
        });
      } else if (roll === 5 || roll === 6) {
        this.generalAttack(randomGenerator() * 3, randomGenerator(), {
          player: prefix + "(x3)"
        });
      } else if (roll === 7 || roll === 8) {
        this.generalAttack(randomGenerator() * 4, randomGenerator(), {
          player: prefix + "(x4 damage)"
        });
      } else if (roll === 9) {
        this.generalAttack(randomGenerator(), randomGenerator() + 100, {
          monster: prefix + "(critical attack instant death)"
        });
      } else if (roll === 10) {
        this.generalAttack(randomGenerator() + 200, randomGenerator(), {
          player: prefix + "(critical attack instant death)"
        });
      }
    },
    gameOverAlert: function(result) {
      if (confirm("You" + result + " do you want to start a new game?")) {
        this.resetGame();
      } else null;
    }
  }
};
</script>

<style></style>