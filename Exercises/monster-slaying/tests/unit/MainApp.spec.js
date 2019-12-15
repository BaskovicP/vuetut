import { mount } from "@vue/test-utils";
import App from "@/App.vue";
import HealthComponent from "@/components/HealthComponent.vue";
import ActionRow from "@/components/ActionRow.vue";
window.confirm = jest.fn(() => true);

describe("HealthComponent.vue", () => {
  const prepareWrapper = props => {
    return mount(App, {
      propsData: props
    });
  };

  function prepareGameWrapper(prepareWrapper) {
    let wrapper = prepareWrapper({});
    wrapper.find("#start-game").trigger("click");
    return wrapper;
  }
  it("should contain vue instance", () => {
    expect(prepareWrapper().isVueInstance()).toEqual(true);
  });
  it("should have two health component", () => {
    let wrapper = prepareWrapper();
    expect(wrapper.findAll(HealthComponent).length).toEqual(2);
  });
  it("should not have the attack buttons or log visible before the users clicks start new game", () => {
    let wrapper = prepareWrapper({});
    expect(wrapper.find("#commands").exists()).toBe(false);
    expect(wrapper.find(".log").exists()).toBe(false);
  });
  it("should start the game when we click on the start new game button", () => {
    let wrapper = prepareGameWrapper(prepareWrapper);
    expect(wrapper.find("#commands").exists()).toBe(true);
    expect(wrapper.find(".log").exists()).toBe(false);
  });
  it("should reset everyhing if user gives up", () => {
    let wrapper = prepareGameWrapper(prepareWrapper);
    wrapper.find("#give-up").trigger("click");
    expect(wrapper.find("#commands").exists()).toBe(false);
    expect(wrapper.find(".log").exists()).toBe(false);
  });
  it("should decrease monster and player health if you attack", () => {
    let wrapper = prepareGameWrapper(prepareWrapper);
    wrapper.find("#attack").trigger("click");
    expect(
      wrapper
        .findAll(HealthComponent)
        .at(1)
        .props("health")
    ).toBeLessThan(100);
    expect(
      wrapper
        .findAll(HealthComponent)
        .at(0)
        .props("health")
    ).toBeLessThan(100);
  });
  it("should perform a special attack", () => {
    let wrapper = prepareGameWrapper(prepareWrapper);
    wrapper.find("#special-attack").trigger("click");
    expect(wrapper.find(ActionRow).text()).toMatch(
      /PLAYER HITS MONSTER FOR [0-9][0-9]?(.*)?/
    );
  });
  it("should have no logs when starting the game", () => {
    let wrapper = prepareGameWrapper(prepareWrapper);
    expect(wrapper.find(ActionRow).exists()).toBe(false);
  });
  it("should clear the logs when starting a new game", () => {
    let wrapper = prepareGameWrapper(prepareWrapper);
    wrapper.find("#attack").trigger("click");
    wrapper.find("#start-game").trigger("click");
    expect(wrapper.findAll(ActionRow).length).toEqual(0);
  });
  it("should create a log insert when player attacks", () => {
    let wrapper = prepareGameWrapper(prepareWrapper);
    wrapper.find("#attack").trigger("click");

    expect(wrapper.find(ActionRow).text()).toMatch(
      /PLAYER HITS MONSTER FOR [0-9][0-9]?/
    );
  });
  it("should end the game if player or monster health reaches <=0", () => {
    let wrapper = prepareGameWrapper(prepareWrapper);

    let gameOverAlertSpy = jest.fn();
    wrapper.setMethods({
      gameOverAlert: gameOverAlertSpy,
      generalAttack: function() {
        this.monsterHealth = -1;
      }
    });
    wrapper.find("#attack").trigger("click");
    expect(gameOverAlertSpy).toBeCalledTimes(1);
    expect(gameOverAlertSpy).toBeCalledWith(" win");

    expect(wrapper.find(ActionRow).exists()).toBe(false);

    wrapper.setMethods({
      generalAttack: function() {
        this.playerHealth = -1;
      }
    });
    wrapper.find("#attack").trigger("click");

    expect(gameOverAlertSpy).toBeCalledTimes(2);
    expect(gameOverAlertSpy).toBeCalledWith(" loose");
  });
  it("should make the user heal when we click on the heal button but not over 100", () => {
    let wrapper = prepareGameWrapper(prepareWrapper);
    wrapper.setMethods({
      generalAttack: jest.fn(function() {
        this.playerHealth -= 10;
      })
    });
    wrapper.find("#heal").trigger("click");
    expect(wrapper.find(HealthComponent).text()).toMatch("90");

    wrapper.find("#attack").trigger("click");
    wrapper.find("#heal").trigger("click");

    expect(wrapper.find(HealthComponent).text()).not.toMatch("70");
  });
});
