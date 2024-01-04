# Module 07: Validating Data

To make sure the data of a book is valid, this module uses Bean Validation to add constraints to the Book model and the transactional repository.


## Demo 

* In the `Book` entity add constraints on the attributes title, description, unitCost, isbn and publicationDate
* In the `BookRepository` add constraints to the parameter of the methods find and delete
* In the `BookRepositoryTest` add extra methods to check the constraints are working `shouldFailCreatingABookWithNullTitle`, `shouldFailCreatingABookWithLowUnitCostTitle`, `shouldFailCreatingABookWithNullISBN`, `shouldFailInvokingFindByIdWithNull` and `shouldFailInvokingDeleteWithNull`
* Startup WildFly and run `mvn clean test` so the Arquillian tests pass


## Structure 

The BookStore application is divided into a Java EE REST back-end (`bookstore-back`) and an Angular front-end (`bookstore-front`).


### Bookstore Back 

The code of this module follows the [Maven](http://maven.apache.org/) directory structure. The `src/main/` directory contains the main source code while you will find the test class under `src/test/`. The `pom.xml` file is Maven specific and it describes the project and its dependencies.

Once [Maven](http://maven.apache.org/) and a [JDK 8](http://www.oracle.com/technetwork/java/javase/downloads/index.html) are installed, enter the following Maven commands:

* `mvn help:help`       : shows Maven help
* `mvn clean`           : cleans the `target` directory
* `mvn compile`         : compiles the code
* `mvn test`            : runs the test case (you need WildFly to be up and running)
* `mvn package`         : packages the code into a war file
* `mvn clean package`   : executes a clean and then a package

Once [Wildfly](http://wildfly.org/) is installed, deploy the war file and go to [http://localhost:8080/bookstore-back/]()


### Bookstore Front 

The code of this module follows the [Angular CLI](https://github.com/angular/angular-cli) directory structure. The `src/` directory contains the main source code. The `package.json` file is Node specific and it describes the project and its dependencies.

Once [Node JS](https://nodejs.org/en/) and a [Yarn](yarnpkg.com) are installed, enter the following commands:

* `yarn install`        : Installs all the dependencies (adding the node_modules directory)
* `ng serve`            : Executes the server. Go to [http://localhost:4200]()
