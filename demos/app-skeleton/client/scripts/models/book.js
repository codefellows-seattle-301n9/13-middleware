var app = app || {};

(module => {

    const __API_URL__ = 'http://localhost:3000/api/v1/books'

    function Book() {
        // Do we need this?
    }

    function errorCallback(err) {
        console.error(err);
        module.errorView.initErrorPage(err);
    }

    Book.all = []

    Book.fetchAll = () => $.getJSON(__API_URL__).catch(errorCallback)

    Book.fetchOne = (id) => $.getJSON(__API_URL__ + '/' + id).catch(errorCallback)
    
    Book.deleteOne = id => {
        return $.ajax({
            url: __API_URL__ + '/' + id,
            method: 'DELETE'
        }).catch(errorCallback)
    }

    Book.update = book => {
        return $.ajax({
            url: __API_URL__ + '/' + book.book_id,
            method: 'PUT',
            data: book
        }).catch(errorCallback)
    }

    Book.create = book => {
        return $.post(__API_URL__, book).catch(errorCallback)
    }

    // TODO: this best place?
    Book.verify = passphrase => {
        return $.get('http://localhost:3000/api/v1/admin', {token:passphrase}).catch(errorCallback)
    }

    module.Book = Book

})(app)