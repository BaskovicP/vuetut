import MainApp from "@/App";
import { mount } from "@vue/test-utils";
describe("App.vue", () => {
  const prepareWrapper = props => mount(MainApp, { propsData: props });
  let wrapper = prepareWrapper();

  beforeEach(() => {
    wrapper = prepareWrapper();
  });
  it("should be defined", () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });
  it("should have the right info", async () => {
    wrapper.find("#first-name").setValue("Paulo");
    wrapper.find("#last-name").setValue("Legenda");
    wrapper.find("#mail").setValue("paulo@");
    wrapper.find("#password").setValue("passwor1");
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).not.toMatch("paulo@");
    expect(wrapper.text()).not.toMatch("passwor1");
    wrapper.find("#main-submit-button").trigger("click");
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).toMatch("paulo@");
    expect(wrapper.text()).toMatch("passwor1");
  });
});
