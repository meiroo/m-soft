
Router.route('/', function () {
  Session.set('_id', null);
  this.render('index');  
});

Router.route('/note/:_id', function () {
  this.render('single');
  Session.set('_id', this.params._id);
});

Router.route('/about', function () {
  Router.go('/note/kpNvwdsHtt6js3SeA');
});

Router.route('/mypost',function(){
	Session.set("status", "1");
    Session.set("current_page",1);
    this.render('index'); 
});

Router.route('/allpost',function(){
	Session.set("status", "0");
    Session.set("current_page",1);
    this.render('index');
});

Router.route('/filter',function(){
	$(".filter input").val('');
	Session.set("filter", 'blog');
    Session.set("current_page",1);
    this.render('index');
});

Router.route('/filter/:_tag',function(){
	$(".filter input").val(this.params._tag);
	var filtervalue = this.params._tag;
    Session.set("filter", filtervalue);
    Session.set("current_page",1);
    this.render('index');
});

// Router.route('/download', function () {
//   var req = this.request;
//   var res = this.response;
//   res.end('hello from the server\n');
//   this.render('json');
// }, {where: 'server'});
Router.route('/exportJSON', function () {
  var r = this;
  if (Meteor.user()) {
     var msg = Meteor.call('exportJSON',function(err,str){
        r.render('json',{
          data:{"content":str}      
        });
      });
   }else { 
    alert('登录后才能导出自己的Notes...');
    this.next(); 
  }
  
});


Router.route('/download', { where: 'server' })
  .get(function () {
    // GET /webhooks/stripe
      //  var string = '';
     s = Meteor.call('download');
     this.response.setHeader('Content-Type', 'text/plain');
     this.response.setHeader('content-disposition', "attachment; filename=notes.json");
     s.pipe(this.response);
     
      //
    //this.response.end('asdfasfdsa');
  })
  .post(function () {
    // POST /webhooks/stripe
  })
  .put(function () {
    // PUT /webhooks/stripe
  });




