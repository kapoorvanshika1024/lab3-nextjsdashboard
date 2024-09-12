# Lab 2: Task Management App

A simple React app to manage tasks across different categories. This project demonstrates the use of functional components, state management with useState, and static typing using TypeScript.

# Features

Add Task: Users can add tasks under specific categories.

Filter Tasks by Category: Users can filter tasks based on the category name.

Delete Task: Users can delete specific tasks from the task list.

View Total Tasks: Displays the total number of tasks across all categories.

# Components
The app is built with the following components:

1. App.tsx
The main component that holds the application’s state. It handles the following:

Task List State: Holds an array of task categories, each containing a list of tasks.

Add Task: Allows users to add tasks to specific categories.

Delete Task: Allows users to remove tasks.

Filter Tasks: Provides functionality to filter the task list by category.

2. Header.tsx

Displays the total number of tasks and a header title.

3. Search.tsx

A search bar that allows users to filter tasks by category. It uses a controlled input to handle the search term and passes the term to the parent (App.tsx) to filter the task list.

4. AddTaskForm.tsx

A form component that allows users to add new tasks to a specific category. It takes user input for the task name and category and passes it back to App.tsx.

5. TaskList.tsx

Displays a list of tasks for each category. Each task has a delete button that allows for the removal of individual tasks.

# Challenges Faced

1. State Management Complexity

2. Handling Task Deletion

3. Dynamic Task Filtering

# Technologies Used

1. React

2. TypeScript 

3. CSS

4. Vite
