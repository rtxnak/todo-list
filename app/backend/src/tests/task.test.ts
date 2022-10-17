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

  describe('POST on path "/", SUCCESS creating new task and correct status code', () => {
    before(async () => {
      chaiHttpResponse = await request(app).post('/')
        .send({
          description: "fifth task",
          status: "ongoing",
          date: "17/10/2022",
        });
    });

    it('return status code "201"', () => {
      expect(chaiHttpResponse).to.have.status(201);
    });
    it('return the new task with id', () => {
      expect(chaiHttpResponse.body).to.have.property('id');
    });
    it('return the new task with correct description, date and pending status', () => {
      expect(chaiHttpResponse.body.description).to.be.equal('fifth task');
      expect(chaiHttpResponse.body.status).to.be.equal('pending');
      expect(chaiHttpResponse.body.date).to.be.equal('17/10/2022');
    });
  });
});

