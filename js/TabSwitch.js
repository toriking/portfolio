const startTime = performance.now();

const tabSwitch = document.querySelectorAll('.js-tab-switch');
const tabTargets = document.querySelectorAll('.js-tab-target');
const all = document.getElementById('all');
for (let i = 0; i < tabSwitch.length; i++) {
  // タブメニュークリック時
  tabSwitch[i].addEventListener('click', (e) => {
      // クリックされた要素（メニュー要素[トリガー要素]）を取得
      let currentMenu = e.currentTarget;
      // ターゲットとなる要素（タブメニューdata属性値と等しいid値を持つコンテンツ要素[ターゲット要素]）を取得
      let currentContent = document.getElementById(currentMenu.dataset.id);

      // すべてのタブメニューの'is-active'クラスを削除
      for (let i = 0; i < tabSwitch.length; i++) {
          tabSwitch[i].classList.remove('active-light');
      }
      
      // クリックしたタブメニューに'is-active'クラスを追加
      currentMenu.classList.add('active-light');
  
    
      for (let i = 0; i < tabTargets.length; i++) {
        tabTargets[i].classList.add('is-close');
      
    }
     
       
        
            if(currentContent !== null) {
                currentContent.classList.remove('is-close');
            }
            
        
        
        
      
   
               
        
      
      
      // 対象コンテンツ(指定したIDの要素があったら)を表示させる
      
     
  });
  all.addEventListener('click', () => {
    
    
    
    for (let i = 0; i < tabTargets.length; i++) {
        tabTargets[i].classList.remove('is-close');
      
    }

});

}


// tabSwitch.addEventListener('click', () => {
//     for (let i = 0; i < tabTargets.length; i++) {
//         tabTargets[i].classList.remove('is-close');
      
//     }
// });

const endTime = performance.now();
console.log(endTime - startTime);