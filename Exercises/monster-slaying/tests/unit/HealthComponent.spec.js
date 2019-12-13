import { mount } from "@vue/test-utils";
import HealthComponent from "@/components/HealthComponent.vue";

describe("HealthComponent.vue", () => {
  const prepareWrapper = props => {
    return mount(HealthComponent, {
      propsData: props
    });
  };

  it("should contain the vue instance", () => {
    expect(prepareWrapper({ name: "You" }).isVueInstance()).toEqual(true);
  });
  it("render a name when passed as prop", () => {
    let wrapper = prepareWrapper({ name: "YOU" });
    expect(wrapper.findAll("h1").length).toEqual(1);
    expect(wrapper.find("h1").text()).toEqual("YOU");
  });
  it("should change the health by changing the components prop", () => {
    let wrapper = prepareWrapper({ name: "YOU", health: 10 });
    expect(wrapper.find("#YOU").text()).toEqual("10");
  });
});
