这是我自己写的一个小小模态弹窗插件（基于jQuery），界面简洁（模拟IOS模态弹窗设计），喜欢的可以拿去使用哈~~

目前只支持2种状态：确认弹窗和模态弹窗（根据status区分）

（1）确认弹窗
配置：
```
popup({
    status: 1,
    title: "提示",
    content: "正在加载中，请稍后再试哦~"
})
			        
```
![确认弹窗](https://git.oschina.net/uploads/images/2017/0922/163606_1743aa93_1036569.png "屏幕截图.png")

（2）模态弹窗
配置：
```
popup({
    status: 2,
    title: "提示",
    content: "正在加载中，请稍后再试哦~"，
    confirm： function(){
        //点“确定”后，你要处理的事情
    }
})
			        
```
![模态弹窗](https://git.oschina.net/uploads/images/2017/0922/163823_db2d7676_1036569.png "屏幕截图.png")
