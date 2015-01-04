
Router.route('/', { where: 'server' })
  .get(function () {
//    SSR.compileTemplate('projects', Assets.getText('index.html'));
     var html = SSR.render('index');
     this.response.setHeader('Content-Type', 'text/html');
     this.response.end(html);
     
      //
    //this.response.end('asdfasfdsa');
  })
  .post(function () {
    // POST /webhooks/stripe
  })
  .put(function () {
    // PUT /webhooks/stripe
  });


// Meteor.methods({
//   sendEmail: function() {
//     var html = SSR.render("emailText", {username: "arunoda"});
//     console.log(html);
//   }
// });





