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
    <section v-if="newGameInSession" class="row log">
      <div class="small-12 columns">
        <ul>
          <ActionRow></ActionRow>
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
      newGameInSession: false
    };
  },
  methods: {
    resetGame: function() {
      (this.playerHealth = 100),
        (this.monsterHealth = 100),
        (this.newGameInSession = true);
    },
    giveUp: function() {
      this.newGameInSession = false;
    },
    attack: function() {
      this.monsterHealth -= Math.round(Math.random() * 10)+1;
      this.playerHealth -= Math.round(Math.random() * 10)+1;
    },
    writeLog: function() {
      
    }
  }
};
</script>

<style></style>
