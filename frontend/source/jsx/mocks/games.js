module.exports = [
  {
    id: 1,
    title: 'Commonwealth of Independent States films',
    status: 'waiting',
    playersMax: 5,
    players: [
        {id: Math.floor(Math.random() * 10000),
            score: 0,
            avatar: 'http://semantic-ui.com/images/avatar/small/stevie.jpg',
            username: "Stevie Feliciano"},
        {id: Math.floor(Math.random() * 10000),
            score: 0,
            avatar: 'http://semantic-ui.com/images/avatar/small/jenny.jpg',
            username: "Jenny Hess"},
        {id: Math.floor(Math.random() * 10000),
            score: 0,
            avatar: 'http://semantic-ui.com/images/avatar/small/veronika.jpg',
            username: "Veronika Ossi"}
    ],
    room: 'thief',
    tags: ['Films'],
    flags: ['ua', 'belarus', 'ru'],
    started: null
  },
  {
    id: 2,
    title: 'Science fiction russian films',
    status: 'waiting',
    players: [
        {id: Math.floor(Math.random() * 10000),
            score: 0,
            avatar: 'http://semantic-ui.com/images/avatar/small/jenny.jpg',
            username: "Jenny Hess"}
    ],
    playersMax: 5,
    room: 'jostler',
    tags: ['Films'],
    flags: ['ru'],
    started: null
  },
  {
    id: 3,
    title: 'Italian Painters',
    status: 'progress',
    players: [
        {id: Math.floor(Math.random() * 10000),
            score: 0,
            avatar: 'http://semantic-ui.com/images/avatar/small/daniel.jpg',
            username: "Daniel Louise"},
        {id: Math.floor(Math.random() * 10000),
            score: 0,
            avatar: 'http://semantic-ui.com/images/avatar/small/veronika.jpg',
            username: "Veronika Ossi"}
    ],
    playersMax: 4,
    room: 'thief',
    tags: ['Arts'],
    flags: ['it'],
    started: Date.now()
  },
  {
    id: 4,
    title: 'Books of XX Century',
    status: 'progress',
    players: [
        {id: Math.floor(Math.random() * 10000),
            score: 0,
            avatar: 'http://semantic-ui.com/images/avatar/small/daniel.jpg',
            username: "Daniel Louise"},
        {id: Math.floor(Math.random() * 10000),
            score: 0,
            avatar: 'http://semantic-ui.com/images/avatar/small/stevie.jpg',
            username: "Stevie Feliciano"},
        {id: Math.floor(Math.random() * 10000),
            score: 0,
            avatar: 'http://semantic-ui.com/images/avatar/small/jenny.jpg',
            username: "Jenny Hess"},
        {id: Math.floor(Math.random() * 10000),
            score: 0,
            avatar: 'http://semantic-ui.com/images/avatar/small/veronika.jpg',
            username: "Veronika Ossi"}
    ],
    playersMax: 6,
    room: 'robber',
    tags: ['Books'],
    flags: ['gb', 'us', 'de', 'fr'],
    started: Date.now()
  },
  {
    id: 5,
    title: 'Commonwealth of Independent States films',
    status: 'waiting',
    players: [
        {id: Math.floor(Math.random() * 10000),
            score: 0,
            avatar: 'http://semantic-ui.com/images/avatar/small/veronika.jpg',
            username: "Veronika Ossi"}
    ],
    playersMax: 5,
    room: 'thief',
    tags: ['Films'],
    flags: ['ua', 'belarus', 'ru'],
    started: null
  },
  {
    id: 6,
    title: 'Science fiction russian films',
    status: 'waiting',
    players: [
        {id: Math.floor(Math.random() * 10000),
            score: 0,
            avatar: 'http://semantic-ui.com/images/avatar/small/jenny.jpg',
            username: "Jenny Hess"},
        {id: Math.floor(Math.random() * 10000),
            score: 0,
            avatar: 'http://semantic-ui.com/images/avatar/small/veronika.jpg',
            username: "Veronika Ossi"}
    ],
    playersMax: 5,
    room: 'jostler',
    tags: ['Films'],
    flags: ['ru'],
    started: null
  },
  {
    id: 7,
    title: 'Italian Painters',
    status: 'progress',
    players: [
        {id: Math.floor(Math.random() * 10000),
            score: 0,
            avatar: 'http://semantic-ui.com/images/avatar/small/daniel.jpg',
            username: "Daniel Louise"},
        {id: Math.floor(Math.random() * 10000),
            score: 0,
            avatar: 'http://semantic-ui.com/images/avatar/small/jenny.jpg',
            username: "Jenny Hess"}
    ],
    playersMax: 4,
    room: 'thief',
    tags: ['Arts'],
    flags: ['it'],
    started: Date.now()
  },
  {
    id: 8,
    title: 'Books of XX Century',
    status: 'progress',
    players: [
        {id: Math.floor(Math.random() * 10000),
            score: 0,
            avatar: 'http://semantic-ui.com/images/avatar/small/elliot.jpg',
            username: "Elliot Fu"},
        {id: Math.floor(Math.random() * 10000),
            score: 0,
            avatar: 'http://semantic-ui.com/images/avatar/small/jenny.jpg',
            username: "Jenny Hess"},
        {id: Math.floor(Math.random() * 10000),
            score: 0,
            avatar: 'http://semantic-ui.com/images/avatar/small/veronika.jpg',
            username: "Veronika Ossi"},
        {id: Math.floor(Math.random() * 10000),
            score: 0,
            avatar: 'http://semantic-ui.com/images/avatar/small/stevie.jpg',
            username: "Stevie Feliciano"}
    ],
    playersMax: 6,
    room: 'robber',
    tags: ['Books'],
    flags: ['gb', 'us', 'de', 'fr'],
    started: Date.now()
  }
];
