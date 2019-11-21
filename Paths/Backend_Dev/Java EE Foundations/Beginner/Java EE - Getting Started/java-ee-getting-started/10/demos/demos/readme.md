# Module 09: Exposing a REST Service

This module adds a REST API in front of the book repository to allow HTTP calls to interact with the back-end with JSon format.


## Demo 

* In the `com.pluralsight.bookstore.rest` package create the `JAXRSConfiguration` class to configure the REST api to the `api` web root
* In the `com.pluralsight.bookstore.rest` package create the `BookEndpoint` and define the methods createBook (POST), getBook (GET), deleteBook (DELETE), getBooks (GET) and countBooks (GET)
* In the directory `src/main/resources` create an `import.sql` to add data to the database (make sure to add a `sql-load-script-source` property in the `persistence.xml` file
* Once the application deployed on Wildfly you can use the following cURL commands to interact with the `BookEndpoint`:
* * `curl -X GET "http://localhost:8080/bookstore-back/api/books" -v`
* * `curl -X GET "http://localhost:8080/bookstore-back/api/books/count" -H "accept: text/plain" -v`
* * `curl -X GET "http://localhost:8080/bookstore-back/api/books/1001" -H "accept: application/json" -v`
* * `curl -X DELETE "http://localhost:8080/bookstore-back/api/books/1001" -H "accept: application/json" -v`
* * `curl -X POST "http://localhost:8080/bookstore-back/api/books" -H "accept: application/json" -H "Content-Type: application/json" -d "{ \"title\": \"H2G2\", \"description\": \"Best scifi book\", \"unitCost\": 1, \"isbn\": \"1234-5678\", \"nbOfPages\": 423, \"language\": \"ENGLISH\"}" -v`


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
