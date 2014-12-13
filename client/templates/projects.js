

Template.projects.helpers({
  projects:function(){
    var projects = [
    {
      title:"ImageServe : nodejs-site-image-management",
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
      site:"http://meiroo.duapp.com",
      android:"http://m-soft.qiniudn.com/duapp.apk",
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
      images3:[
        {url:"http://m-soft.qiniudn.com/notes1.jpg"},
        {url:"http://m-soft.qiniudn.com/notes2.jpg"},
      ],
      site:"http://m-notes.meteor.com",
      android:"http://m-notes.qiniudn.com/notes.apk",
      wp8:"http://m-notes.qiniudn.com/notes.xap",
      code:"",

    },
    {
      title:"3D穴位 : android/win  c++ xuewei 3d show",
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
      win:"http://m-soft.qiniudn.com/3D穴位ver2-bin.zip",
      android:"http://m.163.com/android/software/329eu0.html",
      code:"",

    },

    {
      title:"Web3D : webgl,canvas,three.js,css3",
      description:"web3d demos"
      , 
      features:[
        {feature:"基于three.js webgl场景,canvas场景"},
        {feature:"webgl数据并行计算和结果3D展示"},
        {feature:"blender to json => HTML5平台解析并展示"},
        {feature:"canvas视频拼图,全景,photosnyth"},
        {feature:"css3 html 3d animation"},
      ],
      images:[
        {url:"http://m-soft.qiniudn.com/pic1.jpg"},
        {url:"http://m-soft.qiniudn.com/pic2.jpg"},
        {url:"http://m-soft.qiniudn.com/pic3.jpg"},
      ],
      images2:[
        {url:"http://m-soft.qiniudn.com/pic6.jpg"},
        {url:"http://m-soft.qiniudn.com/pic7.jpg"},
        {url:"http://m-soft.qiniudn.com/pic8.jpg"},
      ],
      site:"http://meiroo.sinaapp.com/",
      site2:"http://ozweb.sinaapp.com/",
      code:"",

    },

    {
      title:"MGL-Engine : c++  opengl/dx11 android/win simple render",
      description:"OpenGL学习中逐渐完善的简单渲染引擎。跨android和win平台。"
      , 
      features:[
        {feature:"基础模块：Point,Rect,RawImage,Plane...等基础类型"},
        {feature:"渲染模块：Render接口采用　ES1.1 / ES2.0 / ES3.0 / DX11 等四种方式实现"},
        {feature:"动画模块：实现简单的属性动画。线性插值。以及动画播放控制流程"},
        {feature:"窗口部分：基于GLUT　基于WindowsAPI　基于Android GLSurfaceView等三种窗口实现"},
        {feature:"模型加载：3ds简单解析模块，3ds模型动画解析模块，ply解析，blender导出动画解析模块"},
        {feature:"图片加载 : 基于stb解析bmp,jpg模块, 基于libpng解析png图片,基于freetype解析ttf字体文件模块"},
        {feature:"图元管理：添加管理多个图元，统一绘制，用于构建布线图，大批图元绘制效率优化。"},
        {feature:"模型buffer:　基于属性的模型buffer管理。便于统一创建.  VBO,PBO,FBO,UBO等操作封装。"},
        {feature:"场景：多个测试场景。文字／图片／多个图元／地形创建／3ds模型动画/ OpenCL绘制/blender场景　等等。"},
         {feature:"Android：Android下文字生成纹理，GLSurfaceView Render管理等。"},
      ],
      images:[
        {url:"http://m-soft.qiniudn.com/gl4.jpg"},
        {url:"http://m-soft.qiniudn.com/gl5.jpg"},
      ],
      images3:[
        {url:"http://m-soft.qiniudn.com/gl1.jpg"},
        {url:"http://m-soft.qiniudn.com/gl2.jpg"},
      ],
      images4:[
        {url:"http://m-soft.qiniudn.com/gl3.jpg"},
      ],
      site:"",
      android:"",
      code:"",

    }

    ];
    
    return projects;
  }
});


Template.project.events({

  "click .thumbnail":function(event,template){

     event.preventDefault();
     var imgsrc = event.target.src;
     $('#image').modal('show');
     $('#image').find('img').attr("src",imgsrc);
    
},

});

Template.projects.rendered = function () {
    
    $.material.init();
    
    
};

Template.projects.created = function () {
};