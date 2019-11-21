let express = require('express');
let app = new express();
app.use(express.static('./pages'));
app.listen(12139, function () {
    console.log('启动成功 正在监听12139端口');
})