import sinon from 'sinon';
import chai from 'chai';
import chaiHttp from 'chai-http';
import { app } from '../app';
import Task from '../database/models/Tasks';
import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('todo list API test', () => {
  let chaiHttpResponse: Response;

  describe('GET on path "/", SUCCESS in returning task list and status code', () => {
    before(async () => {
      sinon.stub(Task, 'findAll').resolves([])
      chaiHttpResponse = await chai.request(app).get('/');
    });

    after(() => {
      (Task.findAll as sinon.SinonStub).restore();
    })

    it('retorna status code "200"', () => {
      expect(chaiHttpResponse).to.have.status(200);
    });

  });
});
