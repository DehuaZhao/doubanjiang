# doubanjiang

A Chrome extension for Douban Movie rating correction.

## Chinese [README.md][readme-zh]

## Why this project

This extension converts Douban Movie user's ratings into a more reasonable  coordinate.

As you could do some calculation yourself with the following json example. The current movie score is __weighted average user stars from 0 to 5, then multiply by 2__, which means translating star{one, two, three, four, five} into points{2, 4, 6, 8, 10}. And what this extension does, is translate those stars into points{0, 0.25, 5, 7.5, 10}.

http://api.douban.com/v2/movie/subject/25980443

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

Amusingly enough, in an [article by the CEO of Douban.com (in Chinese)][douban-movie-qna], he claims that Movie rating is translated into 0-10 from the original user stars. Unfortunately, that is not true.

## How this extension works

Add __[doubanjiang][doubanjiang-ext-page]__ to Chrome. It will auto convert using ratings shown at movie info page at movie.douban.com, putting the translated score at right side of the original score.


[readme-zh]: https://github.com/DehuaZhao/doubanjiang/blob/master/README.md
[douban-movie-qna]: https://blog.douban.com/douban/2015/12/18/3060/
[doubanjiang-ext-page]: https://chrome.google.com/webstore/detail/%E8%B1%86%E7%93%A3%E9%85%B1/ellekillbpgmnfgpedmjllhjgngiikim
