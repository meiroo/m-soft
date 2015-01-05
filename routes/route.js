
Router.route('/', { where: 'server' })
  .get(function () {
     var html = SSR.render('index');
     this.response.setHeader('Content-Type', 'text/html');
     this.response.end(html);
  });





