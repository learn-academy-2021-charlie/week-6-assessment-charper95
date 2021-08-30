# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating an API with a model called Animal that has_many Sightings, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: If you have already created the model, you first need to update the model with a foreign key attribute using migrations. The name of the foreign key should be animal_id. The foreign key would be a part of the sigthings model.

  Researched answer: If you have already created the model, you first need to update the model with a foreign key attribute using migrations. To do that run the command $ rails generate migration add_animal_id_to_sighting animal_id:integer. The migration file should have add_column :sightings, :animal_id, :integer. The name of the foreign key should be animal_id. The foreign key would be a part of the sigthings model, because the foriegn key always goes in the model that belongs_to the model that has_many of that model.



2. Which RESTful API routes must always be passed params? Why?

  Your answer: The RESTful API routes of show, create, destroy, edit, and update methods get passed params. Show and Edit get passed the parameter of id in order to show a specific row of the database. Create and Update get passed any params in order to update the specific attributes of the row of the database. Destroy gets passed the parameter of id in order to delete a specific row of the database.

  Researched answer: The RESTful API routes of show, create, destroy, edit, and update methods get passed params. Show and Edit get passed the parameter of id in order to show a specific row of the database. Create and Update get passed any params in order to update the specific attributes of the row of the database. Destroy gets passed the parameter of id in order to delete a specific row of the database. The parameters allowed to be passed into Create and Update are set by a method underneath the private keyword. This lets the developer limit the attributes a user can update or create.



3. Name three rails generator commands. What is created by each?

  Your answer: $ rails generate model creates a table in the database, $ rails generate migration creates a migration file in order to add, update or remove models, $ rails generate controller creates a controller file and a folder in the views folder.

  Researched answer: $ rails generate model creates a table in the database, $ rails generate migration creates a migration file in order to add, update or remove models, $ rails generate controller creates a controller file and a folder in the views folder. $ rails generate resource is another command. It creates a new model along with a migration, controller, folder in views, and it opens up all of the routes.



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET"    /students      

Controller Method: Index - Displays all rows in the Students database.

method="POST"   /students

Controller Method: Create - Creates a new row in the Students database.

method="GET"    /students/new

Controller Method: New - Displays a form to input new rows in the Students database.

method="GET"    /students/2  

Controller Method: Show - Shows the row of the Students database with the id of 2.

method="GET"    /students/edit/2   

Controller Method: Edit - Displays a form to edit the attributes of row of the Students database with the id of 2.

method="PATCH"  /students/2

Controller Method: Update - Updates the attributes of the row of the Students databse with the id of 2.

method="DELETE" /students/2      

Controller Method: Destroy - Deletes the row of the Students database with the id of 2.

5. As a developer, you want to make an application that will help you manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1. As a user, I can see all the to do list item titles in a list on the main page of the application.
2. As a user, I can click on the title of a to do list item in the list and be routed to a page where I see the title and description of the to do list item I clicked on.
3. As a user, I can navigate from the show to do list item page back to the main page.
4. As a user, I see a displayed form where I can create a new to do list item.
5. As a user, I can click a button that will take me from the main page to a page where I can create a to do list item.
6. As a user, I can go from the create to do list item form page back to the main page.
7. As a user, I can click a button that will submit my to do list item to the database.
8. As a user, I when I submit my to do list item, I am redirected to the main page.
9. As a user, I can delete my to do list item.
10. As a user, I can update my to do list item.
