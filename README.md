# To Do List

# About project
![image](https://user-images.githubusercontent.com/88905400/187319713-8320b67f-6c5f-4295-83ff-2ac510dbbf2e.png)
This project was developed to practice the [skills](#skills) on a full stack situation.

https://www.figma.com/file/EnvCv0sWpsBNOXML70cER8/My-Todo-List?node-id=0%3A1

___

### - _Application Description_

In this application you can control your activities.To start you must add tasks on <b>Create Mode</b>, after that you can edit any task description by entering on <b>Edit Mode</b>, change the status by the <b>Actions</b>, and search a task by description on <b>Search Mode</b>, and if you want to organize by description, status or created date, use the button ![image](https://user-images.githubusercontent.com/88905400/187342392-98056e30-6b0d-4111-8e5d-d68de5a37aeb.png)![image](https://user-images.githubusercontent.com/88905400/187342531-5759e173-e89b-41a2-b6b7-ccfeed6a3452.png)

### - _Create Mode_

The Create Mode is the default mode.

To add a task, start to write the description on input bar and save by clicking on save button, after this, the task will appear in the table with the description, status, creation date and available actions

![image](https://user-images.githubusercontent.com/88905400/187320273-9253be66-5783-45ee-881d-0e130ef9399b.png)

### - _Actions_
You can change the status of your task by clicking on the images on action column (![image](https://user-images.githubusercontent.com/88905400/177244846-8b18d96d-a0c6-4c9a-b884-e4e443817e0e.png) pending,![image](https://user-images.githubusercontent.com/88905400/177244916-b0d3d558-4971-4c4f-acfe-cff5da53279d.png) ongoing, ![image](https://user-images.githubusercontent.com/88905400/177244969-f6c35499-a026-4de7-8012-422d8c15850b.png)
done) and if you prefer you can ![image](https://user-images.githubusercontent.com/88905400/177245044-a4a70f22-f87b-4cf7-bf40-bcdbdaf05617.png) delete the task.

![image](https://user-images.githubusercontent.com/88905400/187343515-bdbdbe94-dd70-482d-a217-3435c7b2f6ca.png)

### - _Edit Mode_

To edit the task Description, click on button ![image](https://user-images.githubusercontent.com/88905400/177245345-92405fe7-b8f5-4dde-8266-b37227cb37ae.png) beside of task description, on clicking you have to write the new description on input and click on update button to submit 

![image](https://user-images.githubusercontent.com/88905400/187343817-9d9c0812-5ca1-4af1-ad6c-212efe8f4036.png)

### - _Search Mode_

To search a task, you have to activate Search Mode by clicking on button![image](https://user-images.githubusercontent.com/88905400/187345901-0ed35c25-d44e-4a8e-a1f1-2aacc955b914.png)and write a key word on input bar,after that it will only show tasks with description compatible with the search, and to finish the search you have to click on ![image](https://user-images.githubusercontent.com/88905400/187346128-f677226c-c631-4a5a-acb4-aaaba1de566b.png)

![image](https://user-images.githubusercontent.com/88905400/187346232-c42a4c99-7ed5-48be-beed-806dad786a5c.png)

## Roadmap
 - [x] Show task list;
 - [x] Insert a new task;
 - [x] Remove a task;
 - [x] Update a task description;
 - [x] Update the status of the task;
 - [x] Sort the tasks by description, status or date;
 - [x] Back End integration tests;
 - [x] Front End unit tests;


## Skills 
On FrontEnd:
 - React, Next, TypeScript and Tailwindcss to create the pages;
 - React useState, useEffect and Hooks to manage state;
 - Unit test using Jest;
 
On BackEnd:
  - Use Docker and Docker-compose to manage container environment;
  - Use MSC architecture;
  - Use TypeScript and OOP(Object-Oriented Programming) with SOLID principles;
  - Use Express framework from Node.js and ORM library Sequelize for MySQL database modeling;
  - Integration tests using Mocha, chain & sinnon;

## Opening the app locally
On terminal:

1. Please install or check the version of the following services on your system:

[NPM & Node](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) on version `8.5.5` & `v16.15.0` 
```bash
  npm -v
```
```bash
  node -v
```
[Docker](https://docs.docker.com/get-docker/) on version `20.10.17`
```bash
  docker -v
```
[Docker-Compose](https://docs.docker.com/compose/install/) on version `1.29.2`
```bash
  docker-compose -v
```

2. Clone the repository

```bash
  git clone git@github.com:rtxnak/todo-list.git
```

3. Install the dependencies
  * move to app folder:
  
    ```bash
       cd todo-list
    ```
    
  * Install dependencies:
  
    ```bash
        npm run install:frontend
    ```
    ```bash
        npm run install:backend
    ```

4. build docker-compose

```bash
  npm run compose:up
```

5. The application can be accessed through:

    http://localhost:3000/

6. Finish the application

```bash
  npm run compose:down
```
