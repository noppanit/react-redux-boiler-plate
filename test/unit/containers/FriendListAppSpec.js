import { renderComponent, expect } from '../testHelper';
import ReactDom from 'react-dom';
import UserListApp from '../../../src/js/containers/UserListApp/UserListApp';

describe('UserListApp', () => {

  let component;

  beforeEach(() => {
    component = renderComponent(UserListApp);
  });

  it('should a hello world div', () => {
    expect(component.find('h1')).to.exist;
  });
});
