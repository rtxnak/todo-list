import sinon from 'sinon';
import chai from 'chai';
import chaiHttp from 'chai-http';
import { app } from '../app';
import Task from '../database/models/Tasks';
import { Response } from 'superagent';

import taskModelMock from './mocks/TaskModel.mock';
import newTaskModelMock from './mocks/NewTaskModel.mock';

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
      sinon.stub(Task, 'create').resolves(newTaskModelMock as Task)
      chaiHttpResponse = await request(app).post('/')
        .send({
          description: "fifth task",
          status: "ongoing",
          date: "17/10/2022",
        });
    });

    after(async () => {
      (Task.create as sinon.SinonStub).restore();
    })

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

  describe('PUT on path "/", SUCCESS updating the description and status of a task and return correct status code', () => {
    before(async () => {
      sinon.stub(Task, 'update').resolves([1])
      chaiHttpResponse = await request(app).put('/')
        .send({
          id: 1,
          description: "NEW task",
          status: "done",
        })
    });

    after(async () => {
      (Task.update as sinon.SinonStub).restore();
    })

    it('return status code "200"', () => {
      expect(chaiHttpResponse).to.have.status(200);
    });
    it('return the updated task with correct description and status', () => {
      expect(chaiHttpResponse.body.update.description).to.be.equal('NEW task');
      expect(chaiHttpResponse.body.update.status).to.be.equal('done');
    });
    it('return the message "task updated"', () => {
      expect(chaiHttpResponse.body.message).to.be.equal('task updated');
    });
  });

  describe('PUT on path "/", FAILURE updating a task and return correct status code', () => {
    before(async () => {
      sinon.stub(Task, 'update').resolves([0])
      chaiHttpResponse = await request(app).put('/')
        .send({
          id: 1,
          description: "NEW task",
          status: "done",
        })
    });

    after(async () => {
      (Task.update as sinon.SinonStub).restore();
    })

    it('return status code "400"', () => {
      expect(chaiHttpResponse).to.have.status(400);
    });
    it('return the message "task have not been updated"', () => {
      expect(chaiHttpResponse.body.message).to.be.equal('task have not been updated');
    });
  });

  describe('DELETE on path "/", SUCCESS deleting one task and return correct status code', () => {
    before(async () => {
      sinon.stub(Task, 'destroy').resolves(1)
      chaiHttpResponse = await request(app).delete('/')
        .send({
          id: 1,
        })
    });

    after(async () => {
      (Task.destroy as sinon.SinonStub).restore();
    })

    it('return status code "200"', () => {
      expect(chaiHttpResponse).to.have.status(200);
    });
    it('return the message "task updated"', () => {
      expect(chaiHttpResponse.body.message).to.be.equal('task deleted');
    });
  });

  describe('DELETE on path "/", FALIRE deleting one task and return correct status code', () => {
    before(async () => {
      sinon.stub(Task, 'destroy').resolves(0)
      chaiHttpResponse = await request(app).delete('/')
        .send({
          id: 1,
        })
    });

    after(async () => {
      (Task.destroy as sinon.SinonStub).restore();
    })

    it('return status code "200"', () => {
      expect(chaiHttpResponse).to.have.status(400);
    });
    it('return the message "task updated"', () => {
      expect(chaiHttpResponse.body.message).to.be.equal('task have not been deleted');
    });
  });
});

