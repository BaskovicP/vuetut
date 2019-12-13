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
});
