var express = require('express')
var port = process.env.PORT || 3000
var app = express()

app.set('views', './views/pages')
app.set('view engine', 'jade')
app.listen(port)

console.log('started on prot 3000')

//index page
app.get('/', function (req, res) {
    res.render('index', {
        title: 'rgtitle'
    })
})

app.get('/movie/:id', function (req, res) {
    res.render('detail', {
        title: 'rgtitle detail'
    })
})

app.get('/admin/list', function (req, res) {
    res.render('list', {
        title: 'rgtitle list'
    })
})

app.get('/admin/movie', function (req, res) {
    res.render('admin', {
        title: 'rgtitle admin'
    })
})