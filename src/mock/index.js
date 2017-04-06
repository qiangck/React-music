import Mock, { Random } from 'mockjs'
Mock.mock(/\.json/, {
    'dataType|1-10': [
        {
            'name': '123',
            'des': '123213123123',
            'imgUrl': Random.image('50x50'),
            'musicUrl': 'http://mr1.doubanio.com/d8e6003537c2f38d21d51dba6ac99c05/0/fm/song/p2326233_128k.mp3',
            'isPlay': true
        }
    ]
});