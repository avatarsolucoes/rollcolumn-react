import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import RollColumn, { Column, LabelColumn, gotoColumn } from '..';

function Test() {
  function goto(columnNumber) {
    gotoColumn('myName', columnNumber, true);
  }

  function change(obj, ord) {
    // eslint-disable-next-line no-console
    console.log(ord, obj);
  }

  return (
    <RollColumn name="myName" onColumnChange={change}>
      <Column order={1}>
        <p>Content 1</p>
        <LabelColumn to={2}>goto 2</LabelColumn>
        <button type="button" className="goto" onClick={() => goto(2)}>
          GOTO 2
        </button>
      </Column>
      <Column order={2}>
        <p>Content 1</p>
        <LabelColumn to={1}>back to 1</LabelColumn>
        <LabelColumn to={3}>back to 3</LabelColumn>

        <button type="button" className="goto" onClick={() => goto(1)}>
          GOTO 1
        </button>
      </Column>
      <Column order={3}>
        <p>Content 3</p>
        <LabelColumn to={1}>back to 1</LabelColumn>
        <LabelColumn to={2}>back to 2</LabelColumn>
      </Column>
    </RollColumn>
  );
}

describe('Test formats', () => {
  it('is truthy', () => {
    expect(RollColumn).toBeTruthy();
  });

  it('render RollColumn', () => {
    const wrapper = mount(<Test />);
    wrapper
      .find('.goto')
      .at(0)
      .simulate('click');
    wrapper.update();
    wrapper
      .find('.goto')
      .at(1)
      .simulate('click');
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });

  it('render renderer RollColumn', () => {
    const wrapper = {
      text: renderer.create(<Test />).toJSON(),
    };
    expect(wrapper).toMatchSnapshot();
  });

  it(`Test shallow `, () => {
    const wrapper = shallow(<Test />).html();
    expect(wrapper).toMatchSnapshot();
  });
});
