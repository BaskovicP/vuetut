import MainApp from "@/App"
import {mount} from '@vue/test-utils'
describe('App.vue', () => {
    const prepareWrapper= props => mount(MainApp,{ propsData: props})
    let wrapper = prepareWrapper();

    beforeEach(()=> {
     wrapper = prepareWrapper();
    })
    it('should be defined', () => {
        expect(wrapper.isVueInstance()).toBe(true);
    });
});