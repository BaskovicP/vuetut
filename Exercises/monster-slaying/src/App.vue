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
        <button id="special-attack">SPECIAL ATTACK</button>
        <button id="heal">HEAL</button>
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
    attack: function() {
      let playerAttackDamage = Math.round(Math.random() * 10) + 1;
      let monsterAttackDamage = Math.round(Math.random() * 10) + 1;
      this.monsterHealth -= playerAttackDamage;
      this.playerHealth -= monsterAttackDamage;
      this.logs.push({
        subject: "PLAYER",
        acusativus: "MONSTER",
        damage: playerAttackDamage
      });
      this.logs.push({
        subject: "MONSTER",
        acusativus: "PLAYER",
        damage: monsterAttackDamage
      });
    },
    writeLog: function() {}
  }
};
</script>

<style></style>
