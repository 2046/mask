#Mask

全屏遮罩层组件，这是一个单列组件，继承自 Widget。

##使用

下载项目中 dist 目录里面的文件，并配置好模块相关信息（如：路径，别名），使用如下示例代码即可开始使用。

```
seajs.use(['mask'], function(mask){
  mask.show();
});

require(['mask'], function(mask){
  mask.show();
});
```

##使用说明

###show ``mask.show()``

显示遮罩层

```
var mask = require('mask');

mask.show();
```

###hide ``mask.hide()``

隐藏遮罩层

```
var mask = require('mask');

mask.hide();
```

###className ``mask.set('className', 'ui-mask')``

给遮罩层添加 class

```
var mask = require('mask');

mask.set('className', 'ui-mask');
```
