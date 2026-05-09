// 網頁讀取完成後執行
document.addEventListener('DOMContentLoaded', () => {

  // 找出所有 # 開頭的連結，並啟用平滑滑動
  document
    .querySelectorAll('a[href^="#"]')
    .forEach(a => {

      a.addEventListener('click', e => {
        const id = a.getAttribute('href');

        if (id.length > 1) {
          const el = document.querySelector(id);

          if (el) {
            e.preventDefault();
            el.scrollIntoView({ behavior:'smooth' });
          }
        }
      });

    });


  // Catering 服務流程輪播
  const flowItems = document.querySelectorAll('.flow-item');
  const flowImage = document.getElementById('flowImage');

  const flowImages = [
    'images/catering/flow-01.webp',
    'images/catering/flow-02.webp',
    'images/catering/flow-03.webp',
    'images/catering/flow-04.webp'
  ];

  let flowIndex = 0;

  function setFlow(index){
    if(!flowItems.length || !flowImage) return;

    flowItems.forEach(item => item.classList.remove('active'));
    flowItems[index].classList.add('active');

    flowImage.style.opacity = '0';

    setTimeout(() => {
      flowImage.src = flowImages[index];
      flowImage.style.opacity = '1';
    }, 180);

    flowIndex = index;
  }

  flowItems.forEach(item => {
    item.addEventListener('click', () => {
      setFlow(Number(item.dataset.flow));
    });
  });

  if(flowItems.length && flowImage){
    setInterval(() => {
      flowIndex = (flowIndex + 1) % flowItems.length;
      setFlow(flowIndex);
    }, 5000);
  }

});
