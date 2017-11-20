import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from 'containers/landing-page';
import createRouterContext from 'react-router-test-context';

describe("Landing Page", () => {
  const ShallowComponent = (props) => {
    const context = createRouterContext();
    return shallow(<LandingPage {...props}/>).shallow({ context }).shallow();
  };

  it('component should render as expected', ()=> {
    const component = ShallowComponent().shallow();
    expect(component).toMatchSnapshot();
  });
});
