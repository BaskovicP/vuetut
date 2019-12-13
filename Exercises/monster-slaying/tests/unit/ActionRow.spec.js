import { mount } from "@vue/test-utils";
import ActionRow from "@/components/ActionRow.vue";

describe.only("ActionRow.vue", () => {
  const prepareWrapper = props => {
    return mount(ActionRow, {
      propsData: props
    });
  };

  it("should contain vue instance", () => {
    expect(prepareWrapper().isVueInstance()).toEqual(true);
  });

  it("should have a red class and monster hits player text and class red", () => {
    let wrapper = prepareWrapper({
      subject: "MONSTER",
      acusativus: "PLAYER",
      demage: 10
    });
    expect(wrapper.find("li").text()).toEqual("MONSTER HITS PLAYER FOR 10");
    expect(wrapper.find("li").classes()).toContain("red");
  });

  it(
    "should have a red class and monster hits player text and class red" +
      "and blue class if player hits monster",
    () => {
      let wrapper = prepareWrapper({
        subject: "MONSTER",
        acusativus: "PLAYER",
        demage: 10
      });
      expect(wrapper.find("li").text()).toEqual("MONSTER HITS PLAYER FOR 10");
      expect(wrapper.find("li").classes()).toContain("red");
      wrapper.setProps({
        subject: "PLAYER",
        acusativus: "MONSTER",
        demage: 10
      });
      expect(wrapper.find("li").classes()).toContain("blue");
      expect(wrapper.find("li").text()).toEqual("PLAYER HITS MONSTER FOR 10");
    }
  );
});
