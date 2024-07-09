# HOMEWORKS ARE STILL WORKING IN PROGRESS, FOR BETTER STUDENT EXPERIENCE

# Introduction
In this repository, we have the `homework` and `tests` folder. Both folders will be used in the process of _homeworking_.

## Folder Homework
This folder will contains some predfined JavaScript files, all of them with a Arrow Function that's being exported. You can notice that the function is empty, and it's where you will write the code to be tested.

## Folder Tests
This folder contains automated tests that will run the `Homework` exported function. THE CONTENT OF THIS FOLDER SHOULD NOT BE EDITED.

# How to run tests
You can use the command `npm run test tests/<homework-file-name>.js`. E.g, `npm run test tests/sum.js`.
Alternatively, you can run `npm run test tests/<homework-folder-name>.js` to run all tests in that folder. E.g `npm run test tests/variables-n-functions.js`

## Possible mistakes
if you see:
```
      AssertionError: expected +0 to equal 1
      + expected - actual

      -0
      +1
```
You're propably suposed to use `console.log` function in your resolution

if you see:
```
TypeError: Cannot read properties of undefined (reading 'should')
```

Your function should be returining something

In worst cases, just test file by file