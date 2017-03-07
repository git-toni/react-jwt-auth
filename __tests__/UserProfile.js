import {UserProfile} from '../src/components';
import reqAuth, {reqLogin} from '../src/requests/Auth'
import {session } from '../src/stores'

test('UserProfile renders', () => {
  const app = mount(
    <UserProfile />
  );
  console.log(app.html())
  //expect(app.html()).toMatch('User 22')
  //expect(app.find('a.nav-item').length).toEqual(3)
});
