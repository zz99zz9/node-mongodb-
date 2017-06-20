var mongoose = require('mongoose')  //引用建模模块

//创建数据表movieschema的结构
var MovieSchema = new mongoose.Schema({
    doctor: String,
    title: String,
    language: String,
    country: String,
    summary: String,
    flash: String,
    poster: Number,
    //meta 更新或录入数据的时间
    meta: {
        createAt: {
            type: Date,
            default:Date.now()
        },
        updateAt: {
            type: Date,
            default: Date.now()
        }
    }
})

//movieSchema.pre 表示每次存储数据之前都先调用这个方法
MovieSchema.pre('save', function(next){
    if (this.isNew) {
        this.meta.createAt = this.meta.updateAt =Date.now()
    }
    else {
        this.meta.updateAt = Date.now()
    }

    next()
})

//movieSchema 模式的静态方法
MovieSchema.statics ={
    fetch: function(cb) {
        return this
            .find({})
            .sort('meta.updateAt')
            .exec(cb)
    },
    findById: function(id, cb) {
        return this
            .findOne({_id: id})
            .exec(cb)
    }
}

//导出movieSchema模式
module.exports =movieSchema;
