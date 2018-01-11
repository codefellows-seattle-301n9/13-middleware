var app = app || {};

(module => {

    const adminView = {}

    const $view = $('#admin-view')

    adminView.init = () => {

        console.log('manipulate DOM as needed')

        $view.show()
    }
    
    module.adminView = adminView

})(app)

