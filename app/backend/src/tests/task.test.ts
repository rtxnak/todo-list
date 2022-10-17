import sinon from 'sinon';
import chai from 'chai';
import chaiHttp from 'chai-http';
import { app } from '../app';
import Task from '../database/models/Tasks';
import { Response } from 'superagent';

import taskModelMock from './mocks/TaskModel.mock'

chai.use(chaiHttp);

const { expect, request } = chai;

describe('todo list API test', () => {
  let chaiHttpResponse: Response;

  describe('GET on path "/", SUCCESS in returning task list and status code', () => {
    before(async () => {
      sinon.stub(Task, 'findAll').resolves(taskModelMock as Task[])
      chaiHttpResponse = await request(app).get('/');
    });

    after(() => {
      (Task.findAll as sinon.SinonStub).restore();
    })

    it('return status code "200"', () => {
      expect(chaiHttpResponse).to.have.status(200);
    });
    it('return a array with all tasks', () => {
      expect(chaiHttpResponse.body).to.be.deep.eq(taskModelMock);
    });
  });
});
