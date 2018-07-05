(function() {

    angular.module('app')
        .controller('BooksController', ['books', 'dataService', 'badgeService', BooksController]);


    function BooksController(books, dataService, badgeService) {

        var vm = this;

        vm.appName = books.appName;

        //vm.allBooks = dataService.getAllBooks();
        dataService.getAllBooks().then(getBooksSuccess, getBooksError, getBooksNote);

        function getBooksSuccess(books) {
        	vm.allBooks = books;
        }

        function getBooksError(result) {
        	console.log(result);
        }

        function getBooksNote(result) {
        	console.log(result);
        }


        vm.allReaders = dataService.getAllReaders();

        vm.getBadge = badgeService.retrieveBadge;

    }

}());