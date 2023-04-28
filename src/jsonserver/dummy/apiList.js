module.exports = [
  {
    name: 'home',
    url: '/api/home',
    method: 'get',
  },
  {
    name: 'exhibition',
    url: '/app/exhibition/:gallery_id',
    method: 'get',
  },
  {
    name: 'exhibitionartworks',
    url: '/app/exhibitionartworks/:exhibition_id',
    method: 'get',
  }
];
