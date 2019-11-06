import { shallowMount } from '@vue/test-utils';
import LottoBall from '@/components/shared/LottoBall.vue';

describe('LottoBall.vue', () => {
  it('renders LottoBall component successfully when passed all valid props', () => {
    const size = 'large';
    const faded = false;
    const selected = true;
    const value = 55;
    const wrapper = shallowMount(LottoBall, {
      propsData: {
        size, faded, selected, value,
      },
    });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.text()).toMatch('55');
    expect(wrapper.html()).toMatch('<div><div class="ball ball-large ball-selected "><span class="ball-text-large ">55</span></div></div>');
    expect(wrapper.attributes()).toMatchObject({});
    expect(wrapper.classes()).toMatchObject([]);
  });
});
