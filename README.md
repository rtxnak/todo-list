# To Do List

# About project
![image](https://user-images.githubusercontent.com/88905400/177243847-b950ce07-941c-4cce-bf3d-8f1dbc282837.png)

This project was developed to practice the [skills](#skills) on a full stack situation.

in this application you can control your pending activities. To start you must add a task by writing on input bar and saving by clicking on save button,
after that you can change the status of your task by clicking on the images on action column (![image](https://user-images.githubusercontent.com/88905400/177244846-8b18d96d-a0c6-4c9a-b884-e4e443817e0e.png) pending,![image](https://user-images.githubusercontent.com/88905400/177244916-b0d3d558-4971-4c4f-acfe-cff5da53279d.png) ongoing, ![image](https://user-images.githubusercontent.com/88905400/177244969-f6c35499-a026-4de7-8012-422d8c15850b.png)
done) and if you prefer you can ![image](https://user-images.githubusercontent.com/88905400/177245044-a4a70f22-f87b-4cf7-bf40-bcdbdaf05617.png) delete the task.

After inputed a task, you can also edit the task Description by clicking on button ![image](https://user-images.githubusercontent.com/88905400/177245345-92405fe7-b8f5-4dde-8266-b37227cb37ae.png)
 beside of task description, on clicking you have to write the new description on input and click on update button to submit 
![image](https://user-images.githubusercontent.com/88905400/177245662-aab83727-da55-4dca-88a8-4af0aa9d42e2.png)

To search a task, you have to write a key word on input bar and click on search button, after that it will only show tasks with description compatible with the search, and to finish the search you have to click on cancel button.
![image](https://user-images.githubusercontent.com/88905400/177246127-1691c9f9-bd97-4ab5-a5c9-8c57fe39964b.png)

# Roadmap
 - [x] Show task list;
 - [x] Insert a new task;
 - [x] Remove a task;
 - [x] Update a task description;
 - [x] Update the status of the task;
 - [ ] Sort the tasks by description, status or date;
 - [ ] Front End tests;
 - [ ] Back End tests;

## Skills 
On FrontEnd:
 - React, Next, TypeScript and Tailwindcss to create the pages;
 - React useState, useEffect and Hooks to manage state;
 
On BackEnd:
  - Use Docker and Docker-compose to manage container environment;
  - Use MSC architecture;
  - Use TypeScript and OOP(Object-Oriented Programming) with SOLID principles;
  - Use Express framework from Node.js and ORM library Sequelize for MySQL database modeling;

## Opening the app locally
On terminal:

1. Please install or check the version of the following services on your system:

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
        npm install
    ```

4. build docker-compose

```bash
  npm run compose:up
```

5. The application can be accessed through:

http://localhost:3000/
