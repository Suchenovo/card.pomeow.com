$('.kz-nav-btn').on('click', function() {
  let btn = $(this);
  let content = btn.data('href')
  window.open('_blank').location = content
});

console.log(
    "\n" +
      " %c KZHomePage v1.2.0 by kaygb " +
      " %c https://blog.170601.xyz/archives/25.html " +
      "\n" + " 看板娘来自这里：https://juku.live2dcs.jp/" +
      "\n" ,
    "color: #fff; background: #fd79a8; padding:5px 0;",
    "background: #FFF; padding:5px 0;"
  );

fetch('https://v1.hitokoto.cn')
    .then(response => response.json())
    .then(data => {
      const hitokoto = document.getElementById('hitokoto_text')
      hitokoto.href = 'https://hitokoto.cn/?uuid=' + data.uuid
      hitokoto.innerText = data.hitokoto
    })
    .catch(console.error)