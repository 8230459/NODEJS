

mongodb 操作表数据的坑1：

mongodb 数据库表名以 s 结尾时：
假如表名为 navigations 创建表模型如下：
const Model = mongoose.model('navigations', schema);

mongodb 数据库表名不以 s 结尾时：
假如表名为 navigation 创建表模型如下：
const Model = mongoose.model('navigation', schema, 'navigation');

注: schema 是 mongoose.Schema 的实例


mongodb 操作表数据的坑2：

数据库表名不能用驼峰命名法，因为不能由大写字母，可以用 _ 连字符
