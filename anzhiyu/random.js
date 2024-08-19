var posts=["2024/08/18/hello-world/","2024/08/09/编程笔记本/","2024/08/11/网站相关/","2024/08/09/hexo博客部署AI摘要（TianLiGPT）教程/","2024/08/10/部署轻笑前端/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };