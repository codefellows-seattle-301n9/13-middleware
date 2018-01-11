var app = app || {};

(module => {

    const bookDetailView = {}

    const $view = $('#book-detail-view')

    bookDetailView.init = () => {

        console.log('manipulate DOM as needed')

        $view.show()
    }
    
    module.bookDetailView = bookDetailView

})(app)

