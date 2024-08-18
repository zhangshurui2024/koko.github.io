var posts=["2024/08/18/hello-world/","2024/08/09/编程笔记本/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };