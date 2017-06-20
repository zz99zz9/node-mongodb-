var express = require('express')
var path = require('path')
var port = process.env.PORT || 3000
// process是个全局变量，用来获取环境中的变量
var app = express()

app.set('views', './views/pages')
// 设置视图的根目录
app.set('view engine', 'pug')
// 设置默认的模板引擎
// app.use(express.bodyParser());   过版本语法，现已不支持
app.use(bodyParser.urlencoded());
//将表单里的数据进行格式化
//app.use(express.static(path.join(__dirname,'node_modules')))  过去版语法，现已不支持
app.use(serveStatic('node_modules'));
// 设置静态目录，其实就是使view中引入的东西路径正确
app.listen(port)

console.log('started on prot 3000')

//index page
app.get('/', function (req, res) {
    res.render('index', {
        title: 'rgtitle',
        movies:[{ Title: 'robocop', _id: 1, Poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5' }, { Title: 'robocop', _id: 2, Poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5' }, { Title: 'robocop', _id: 3, Poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5' }, { Title: 'robocop', _id: 4, Poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5' }, { Title: 'robocop', _id: 5, Poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5' }]
    })
})

app.get('/movie/:id', function (req, res) {
    res.render('detail', {
        title: 'rgtitle detail',
        movie: {
      doctor: '何塞趴地利亚',
      country: '美国',
      title: '机械战警',
      year: 2014,
      poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
      language: '英语',
      flash: 'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
      summary: '这是一部科幻片'
    }
    })
})

app.get('/admin/list', function (req, res) {
    res.render('list', {
        title: 'rgtitle list',
        movies: [{
      title: '机械战警',
      _id: 1,
      doctor: '何塞趴地利亚',
      country: '美国',
      year: 2014,
      language: '英语',
      flash: 'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
      meta:{
        createdAt:2017-5-10
      }
    },{
      title: '机械战警2',
      _id: 2,
      doctor: '何塞趴地利亚',
      country: '美国',
      year: 2014,
      language: '英语',
      flash: 'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
    //   meta:{
    //     createdAt:2017-5-10
    //   }
    }]
    })
})

app.get('/admin/movie', function (req, res) {
    res.render('admin', {
        title: 'rgtitle admin',
        movie: {
      title: '',
      doctor: '',
      country: '',
      year: '',
      poster: '',
      flash: '',
      summary: '',
      language: ''
    }
    })
})