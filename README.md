# 豆瓣酱

一个豆瓣电影评分修正的 Chrome 浏览器插件

> English [README_en.md][readme-en]

## Why this project

日前关于豆瓣电影评分的疑问偶浮现于网络, 豆瓣网 CEO 阿北在这篇[豆瓣电影评分八问][douban-movie-qna]博文中提到了豆瓣电影的一个分数转换方式:

> 豆瓣的注册用户看完一部电影，心情好的话会来打个一到五星的分（有时候心情不好也会来）。比方说一部电影有42万用户打分。我们的程序把这42万个一到五星换算成零到十分，加起来除以42万，就得到了豆瓣评分。这个评分会自动出现在豆瓣各处，中间没有审核，平时也没有编辑盯着看。每过若干分钟，程序会自动重跑一遍，把最新打分的人的意见包括进来。

但在实际的处理上, 例如下面这部电影的评分, 我发现它仅仅是将**用户原始打星加权平均再乘以二**, 也就是把**一到五星换算成了二到十分**, 这与阿北的描述不符.

api.douban.com/v2/movie/subject/25980443
```json
{
  "rating": {
    "max": 10,
    "average": 8.6,
    "details": {
        "1": 86,
        "2": 487,
        "3": 5863,
        "4": 22367,
        "5": 21483
    },
    "stars": "45",
    "min": 0
  }
}
```

## How this extension works

将[**豆瓣酱**][doubanjiang-ext-page]添加到 Chrome 后它将自动转换豆瓣电影详情页面上的评分，并在原评分的右侧显示转换后的分数。


[readme-en]: https://github.com/DehuaZhao/doubanjiang/blob/master/README_en.md
[douban-movie-qna]: https://blog.douban.com/douban/2015/12/18/3060/
[doubanjiang-ext-page]: https://chrome.google.com/webstore/detail/doubanjiang/ellekillbpgmnfgpedmjllhjgngiikim
