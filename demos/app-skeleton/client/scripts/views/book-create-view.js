var app = app || {};

(module => {

    const bookCreateView = {}

    const $view = $('#book-create-view')

    bookCreateView.init = () => {

        console.log('manipulate DOM as needed')

        $view.show()
    }
    
    module.bookCreateView = bookCreateView

})(app)

