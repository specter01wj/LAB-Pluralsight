# Module 06: Testing the Java EE Application

This module uses JUnit and Arquillian frameworks to test the first components of our BookStore application


## Demo 

* In the `src/test/java` directory create a `com.pluralsight.bookstore.repository` package with a `BookRepositoryTest` test class. This should test the repository with methods such as shouldGetNoBook, shouldCreateABook, shouldFindTheCreatedBook, shouldGetOneBook, shouldDeleteTheCreatedBook, shouldGetNoMoreBook
* Add the `src/test/resources/META-INF/test-persistence.xml` file for test purpose
* Add the `src/test/resources/arquillian.xml` file for Arquillian test with the `arquillian-wildfly-remote` qualifier
* The `pom.xml` should add the new JUnit and Arquillian dependencies with the following dependency versions:
* * `<version.junit>4.12</version.junit>`
* * `<version.arquillian>1.4.1.Final</version.arquillian>`
* * `<version.arquillian.wildfly>2.1.1.Final</version.arquillian.wildfly>`
* If you now execute the test by running `mvn clean test` the test will fail with a `java.net.ConnectException: Connection refused` exception. That's because the Arquillian test tries to deploy the archive on Wildfly and Wildfly is not up and running
* Startup WildFly (with `$WILDFLY_HOME/bin/standalone.sh`) and run `mvn clean test` again. The Arquillian tests pass


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
