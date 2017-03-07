import {UserIndex} from '../src/components';
import reqAuth, {reqLogin} from '../src/requests/Auth'
import {session } from '../src/stores'

test('App renders', () => {
  const app = mount(
    <UserIndex />
  );
  expect(app.html()).toMatch('USERS INDEX')
  expect(app.html()).toMatch('User 22')
  expect(app.find('a.nav-item').length).toEqual(3)

});
