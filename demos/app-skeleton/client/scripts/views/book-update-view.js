var app = app || {};

(module => {

    const bookUpdateView = {}

    const $view = $('#book-update-view')

    bookUpdateView.init = () => {

        console.log('manipulate DOM as needed')

        $view.show()
    }
    
    module.bookUpdateView = bookUpdateView

})(app)