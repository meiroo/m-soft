

Template.projects.helpers({
  projects:function(){
    var projects = [
    {
      title:"3D穴位",
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

    },
    {},
    {}
    ];
    
    return projects;
  }
});



Template.projects.rendered = function () {
    
    $.material.init();
    
    
};

Template.projects.created = function () {
};