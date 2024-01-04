# Module 12: Bootstrapping the Angular Application

This module takes all our installed tools to bootstraps and executes an empty Angular application.


## Demo 

* To bootstrap the Angular application use the following NG CLI command : `ng new bookstore-front --skip-git --skip-commit --prefix bs --skip-tests --skip-e2e --routing true --inline-style`
* To setup Twitter Bootstrap we need the following steps * Install Bootstrap dependency `yarn add bootstrap@4.0.0-alpha.6` * In `angular-cli.json` file add : ``` "styles": [ "../node_modules/bootstrap/dist/css/bootstrap.css", "styles.css" ], "scripts": [ "../node_modules/jquery/dist/jquery.slim.js", "../node_modules/tether/dist/js/tether.js", "../node_modules/bootstrap/dist/js/bootstrap.js" ], ```
* Add Bootstrap to the main `app.component.html` page ```{{title}}ListCreateComponents will go there```
* In `app.component.ts` change the name of the title `title = 'bs works!'` to `title = 'BookStore'`
* Execute `ng serve --open` and look at the application on http://localhost:4200


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
