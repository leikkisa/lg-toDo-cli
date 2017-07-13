# toDo-cli
Command Line To Do List with Callbacks

Learners Guild Phase 2 Exercise

To add tasks:
```
$ node task.js add "Buy milk"
Created task 1, 'Buy Milk'.

$ node task.js add "Say hello to the world"
Created task 2, 'Say hello to the world'.

$ node task.js add "Shoot for the moon"
Created task 3, 'Shoot for the moon'.

$ node task.js add "Eat some mac n cheese"
Created task 4, 'Eat some mac n cheese'.
```

To view incomplete tasks:
```
$ node task.js list

 ID   Description
---- -------------
  1   Buy milk
  2   Say hello to the world
  3   Shoot for the moon
  4   Eat some mac n cheese

4 tasks.
```
To complete a task:
```
$ node task.js complete 1
Completed the task 'Buy milk'

$ node task.js complete 3
Completed the task 'Shoot for the moon'

$ node task.js list

 ID   Description
---- -------------
  2   Say hello to the world
  4   Eat some mac n cheese

2 tasks.
```
