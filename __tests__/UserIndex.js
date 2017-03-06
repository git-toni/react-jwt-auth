import React,{Component} from 'react';  
import sinon from 'sinon'
import {mount} from 'enzyme';
import {UserIndex} from '../src/components';
import reqAuth, {reqLogin} from '../src/requests/Auth'
import {session } from '../src/stores'

test('App renders', () => {
  const app = mount(
    <UserIndex />
  );
  //sinon.spy(aloha)
  //sinon.spy(reqLogin);
  //sinon.spy(reqAuth,'reqLogin')
  //reqAuth.reqLogin()
  console.log('session ',session.token)
  console.log('hola que tal ',aloha.called)
  console.log('hola que tal2 ',reqAuth.reqLogin.called)
  //expect(UserIndex.prototype.componentDidMount.calledOnce).to.equal(true);

});
