(function() {

    angular.module('app')
        .controller('BooksController', ['$q', 'books', 'dataService', 'badgeService', '$cookies', '$cookieStore', '$log', BooksController]);


    function BooksController($q, books, dataService, badgeService, $cookies, $cookieStore, $log) {

        var vm = this;

        vm.appName = books.appName;
/*
        //vm.allBooks = dataService.getAllBooks();
        dataService.getAllBooks()
        	.then(getBooksSuccess, getBooksError, getBooksNote)
        	.catch(errorCallback)
        	.finally(getAllBooksComplete);

        function getBooksSuccess(books) {
        	//throw 'error in success';
        	vm.allBooks = books;
        }

        function getBooksError(result) {
        	console.log(result);
        }

        function errorCallback(result) {
        	console.log(result);
        }

        function getAllBooksComplete() {
        	console.log('All Books Complete!');
        }

        function getBooksNote(result) {
        	console.log(result);
        }


        //vm.allReaders = dataService.getAllReaders();
        dataService.getAllReaders()
        	.then(getReadersSuccess)
        	.catch(errorCallback)
        	.finally(getAllReadersComplete);

        function getReadersSuccess(readers) {
        	//throw 'error in success';
        	vm.allReaders = readers;
        }

        function getAllReadersComplete() {
        	console.log('All Readers Complete!');
        }
*/

        $q.all([dataService.getAllBooks(), dataService.getAllReaders()])
        	.then(getAllSuccess)
        	.catch(errorCallback)
        	.finally(getAllComplete);

        function getAllSuccess(result) {
        	//throw 'error in success';
        	vm.allBooks = result[0];
        	vm.allReaders = result[1];
        }

        function errorCallback(result) {
        	console.log(result);
        }

        function getAllComplete() {
        	console.log('All Books Complete!');
        }


        vm.getBadge = badgeService.retrieveBadge;

        vm.favoriteBook = $cookies.favoriteBook;

        vm.lastEdited = $cookieStore.get('lastEdited');

        $log.log('logging with log');
        $log.info('logging with info');
        $log.warn('logging with warn');
        $log.error('logging with error');
        $log.debug('logging with debug');

    }

}());