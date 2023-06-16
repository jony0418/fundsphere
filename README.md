# E-Commerce Back End

## Description
This is a back end application for an e-commerce site which is built using Express.js API and Sequelize to interact with a MySQL database. This application allows the user to view, add, update, and delete categories, products, and tags in the database.

## User Story
As a manager at an internet retail company, I want a back end for my e-commerce website that uses the latest technologies, so that my company can compete with other e-commerce companies.

## Acceptance Criteria
- A functional Express.js API.
- Ability to connect to a database using Sequelize when database name, MySQL username, and MySQL password are added to an environment variable file.
- A development database is created and is seeded with test data when schema and seed commands are entered.
- Server starts and Sequelize models sync to the MySQL database when the command to invoke the application is entered.
- Data for each of these routes (categories, products, tags) is displayed in a formatted JSON when API GET routes are opened in Insomnia.
- Ability to successfully create, update, and delete data in the database when API POST, PUT, and DELETE routes are tested in Insomnia.

## Mock-Up
The application's GET, POST, PUT, and DELETE routes for categories, products, and tags being tested in Insomnia. 

## Walkthrough Video

Click the thumbnail below to view the walkthrough video of this application.

[![E-Commerce Back End Walkthrough](http://img.youtube.com/vi/5g0Tpf-pH_Y/0.jpg)](http://www.youtube.com/watch?v=5g0Tpf-pH_Y "E-Commerce Back End Walkthrough")

## Getting Started
To get started, you will need to install the following packages to your environment:
- MySQL2
- Sequelize
- dotenv

You will also need to set up an environment variable file to store sensitive data like your MySQL username, password, and database name.

## Database Models
The database consists of four models:
- `Category`
- `Product`
- `Tag`
- `ProductTag`

## Associations
The relationships between the models are:
- Product belongs to Category, and Category has many Product models, as a category can have multiple products but a product can only belong to one category.
- Product belongs to many Tag models, and Tag belongs to many Product models. 

## API Routes
You can perform RESTful CRUD operations on the following routes:
- `product-routes.js`
- `tag-routes.js`
- `category-routes.js`

## Seed the Database
Run `npm run seed` to seed data to your database so that you can test your routes.

## Sync Sequelize to the Database on Server Start
To sync the Sequelize models to the MySQL database on server start, refer to the code in `server.js`.

## Contributing
This project is open for contributions. Before making a contribution, please discuss the changes via issue.

## License
This project is licensed under the terms of the MIT license.