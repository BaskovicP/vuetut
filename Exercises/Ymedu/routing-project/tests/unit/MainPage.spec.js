import { mount, createLocalVue } from "@vue/test-utils";
import App from "@/App.vue";
import VueRouter from "vue-router";
import UserPage from "@/components/UserPage";
import routes from "@/routes.js";
const localVue = createLocalVue();
localVue.use(VueRouter);

describe("App.vue", () => {
  it("should go to home page from the start", async () => {
    const router = new VueRouter({ routes });
    const wrapper = mount(App, {
      localVue,
      router
    });

    router.push("/");
    await wrapper.vm.$nextTick();

    expect(wrapper.find(UserPage).exists()).toBe(true);
  });
});
