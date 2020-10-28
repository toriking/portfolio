// タブスイッチの指定クラス全取得
const tabSwitch = document.querySelectorAll('.js-tab-switch');
// タブアイテムの指定クラス全取得
const tabItem = document.querySelectorAll('.work__item');
// タブコンテンツの指定ID取得
const all = document.getElementById('all');
// for文で
for (let i = 0; i < tabSwitch.length; i++) {
// タブメニュークリック時
  tabSwitch[i].addEventListener('click', (e)=>{
// クリックされた要素を取得
      const currentMenu = e.currentTarget;
// タブスイッチのactive-lightクラスを全削除
      for(let i = 0; i < tabSwitch.length; i++){
          tabSwitch[i].classList.remove('active-light');
      }
      currentMenu.classList.add('active-light');
      const currentContent = document.querySelectorAll(currentMenu.dataset.id);
      // すべてのタブメニューの'is-active'クラスを削除
      for(let i = 0; i < tabSwitch.length; i++){
          tabSwitch[i].classList.remove('active-light');
      }
      // クリックしたタブメニューに'is-active'クラスを追加
      currentMenu.classList.add('active-light');
    // すべてのタブコンテンツのクラスを削除
      for (let i = 0; i < tabItem.length; i++) {
        tabItem[i].classList.remove('is-active'); 
    }   
    // dataとidが一致してたらis-activeクラスを付与
            if(currentContent !== null) {
                for(let i = 0; i < currentContent.length; i++){

                currentContent[i].classList.add('is-active');
            }
        }
    });
}
all.addEventListener('click', ()=>{
  for(let i = 0; i < tabItem.length; i++){
    tabItem[i].classList.add('is-active'); 
}   
});
