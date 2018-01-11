
page('/*', (ctx, next) => {

    console.log('do anything that needs to happen for every route here')

    next()
})

page('/', () => {
    console.log('fetch book data and pass to view')
})

page('/books/new', () => {
    console.log('show new book form')
})


page('/books/:id', (ctx) => {
    console.log('fetch one book data and pass to view to show details')
})

page('/books/:id/update', (ctx) => {
    console.log('fetch one book data and pass to view to update')
})

page('/login', () => {
    console.log('show login page')
})


page.start()
