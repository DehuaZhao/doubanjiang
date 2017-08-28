# doubanjiang

A Chrome extension for Douban Movie rating correction.

> Chinese [README.md][readme-zh]

## Why this project

This extension converts ratings from Douban Movie users into a more reasonable coordinate.

As you can see from the following JSON from Douban Movie API, the current score is done by calculating __weighted average user stars then multiply it by 2__. By doing that, the stars ranging from 1 to 5 are translated into points in the set {2, 4, 6, 8, 10}. However, the stars are supposed to be mapped into the range of {0, 0.25, 5, 7.5, 10}. This extension provides such a way to perform the desired transformation.

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

Ironically, the CEO of Douban.com claimed in an [article (in Chinese)][douban-movie-qna], the movie ratings on Douban is translated into the scale of 0 to 10 from the original stars that users give out. Unfortunately, that is not exactly how they implement this.

## How this extension works

Add __[doubanjiang][doubanjiang-ext-page]__ to Chrome. It will automatically put a corrected score on the right-hand side of the original score at every Douban Movie info page.


[readme-zh]: https://github.com/DehuaZhao/doubanjiang/blob/master/README.md
[douban-movie-qna]: https://blog.douban.com/douban/2015/12/18/3060/
[doubanjiang-ext-page]: https://chrome.google.com/webstore/detail/doubanjiang/ellekillbpgmnfgpedmjllhjgngiikim
