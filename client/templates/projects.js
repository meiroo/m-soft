

Template.projects.helpers({
  projects:function(){
    var projects = [
    {
      title:"ImageServe : nodejs-image-management",
      description:"图片基础展示管理,Policy图片处理。"
      , 
      features:[
        {feature:"图片上传/删除（图片使用md5校验，相同二进制只存一份）"},
        {feature:"实现图片的自定义放缩,自动加水印,基于html渲染图片"},
        {feature:"客户端：bootstrap：aceadmin AngularJS RequireJS"},
        {feature:"服务端：NodeJS Express MongoDB ImageMagick PhantomJS"},
      ],
      images:[
        {url:"http://m-soft.qiniudn.com/imageserve1.jpg"},
        {url:"http://m-soft.qiniudn.com/imageserve2.jpg"},
        {url:"http://m-soft.qiniudn.com/imageserve3.jpg"},
      ],
      pc:"http://meiroo.duapp.com",
      mobile:"",
      code:"",

    },
    {
      title:"Notes : meteor knowledge managment",
      description:"基于Meteor全栈开发"
      , 
      features:[
        {feature:"功能：Notes管理，登录权限管理，文章增删查改，TAG查询，前端路由，分页，Notes导出"},
        {feature:"样式：Bootstrap MarkDown Sublime代码样式"},
        {feature:"全站缓存：可以断网环境正常使用除导出外的全部功能 网络连接后会和服务器同步"},
        {feature:"功能基于客户端JS开发完成 只有导出功能使用服务端开发"},
      ],
      images:[
        {url:"http://m-soft.qiniudn.com/notes1.jpg"},
        {url:"http://m-soft.qiniudn.com/notes2.jpg"},
      ],
      pc:"http://m-notes.meteor.com",
      mobile:"",
      code:"",

    },
    {
      title:"3D穴位 : android xuewei 3d show",
      description:"增加了任脉督脉的穴位。目前共支持14个经络共361个穴位的显示和说明。"
      , 
      features:[
        {feature:"通过3D方式展示人体所有穴位、可查看3D经络连线"},
        {feature:"通过不同颜色展示不同经络"},
        {feature:"可动态旋转缩放人体模型，支持多点触控"},
        {feature:"选中穴位有穴位具体说明"},
      ],
      images:[
        {url:"http://m-soft.qiniudn.com/xueweimobile1.jpg"},
        {url:"http://m-soft.qiniudn.com/xueweimobile2.jpg"},
        {url:"http://m-soft.qiniudn.com/xueweimobile3.jpg"},
      ],
      pc:"http://m-soft.qiniudn.com/3D穴位ver2-bin.zip",
      mobile:"http://m.163.com/android/software/329eu0.html",
      code:"",

    }

    ];
    
    return projects;
  }
});



Template.projects.rendered = function () {
    
    $.material.init();
    
    
};

Template.projects.created = function () {
};