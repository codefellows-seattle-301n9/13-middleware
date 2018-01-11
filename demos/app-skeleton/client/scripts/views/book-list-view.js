var app = app || {};

(module => {

    const bookListView = {}

    const $view = $('#book-list-view')

    bookListView.init = () => {

        console.log('manipulate DOM as needed')

        $view.show()
    }
    
    module.bookListView = bookListView

})(app)

