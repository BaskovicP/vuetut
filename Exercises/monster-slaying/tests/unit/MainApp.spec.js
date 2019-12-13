import { mount } from "@vue/test-utils";
import App from "@/App.vue";
import HealthComponent from "@/components/HealthComponent.vue";

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
    expect(wrapper.find(".log").exists()).toBe(true);
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
});
