import ActionRow from '@/components/ActionRow.vue';
import { mount } from '@vue/test-utils';

describe('ActionRow.vue', () => {
  const prepareWrapper = props => {
    return mount(ActionRow, {
      propsData: props
    });
  };

  it('should contain vue instance', () => {
    expect(prepareWrapper().isVueInstance()).toEqual(true);
  });

  it('should have a red class and monster hits player text and class red', () => {
    const wrapper = prepareWrapper({
      msg: 'MONSTER HITS PLAYER FOR 10'
    });
    expect(wrapper.find('li').text()).toEqual('MONSTER HITS PLAYER FOR 10');
    expect(wrapper.find('li').classes()).toContain('red');
  });

  it(
    'should have a red class and monster hits player text and class red' +
      'and blue class if player hits monster',
    () => {
      const wrapper = prepareWrapper({
        msg: 'MONSTER HITS PLAYER FOR 10'
      });
      expect(wrapper.find('li').text()).toEqual('MONSTER HITS PLAYER FOR 10');
      expect(wrapper.find('li').classes()).toContain('red');
      wrapper.setProps({
        msg: 'PLAYER HITS MONSTER FOR 10'
      });
      expect(wrapper.find('li').classes()).toContain('blue');
      expect(wrapper.find('li').text()).toEqual('PLAYER HITS MONSTER FOR 10');
    }
  );
  it('should write out the critical message', () => {
    const wrapper = prepareWrapper({
      msg: 'MONSTER HITS PLAYER FOR 10 (Demage x 2)'
    });
    expect(wrapper.find('li').text()).toEqual(
      'MONSTER HITS PLAYER FOR 10 (Demage x 2)'
    );
  });
});
