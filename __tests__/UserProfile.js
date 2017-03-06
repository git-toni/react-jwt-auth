import React,{Component} from 'react';  
import sinon from 'sinon'
import {mount} from 'enzyme';
import {UserProfile} from '../src/components';
import reqAuth, {reqLogin} from '../src/requests/Auth'
import {session } from '../src/stores'

test('UserProfile renders', () => {
  const app = mount(
    <UserProfile />
  );
});
