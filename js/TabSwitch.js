// タブメニューの全クラス取得
const tabSwitch = document.querySelectorAll('.js-tab-switch');
// タブコンテンツの全クラス取得
const tabTargets = document.querySelectorAll('.js-tab-target');
// 全表示させるID取得
const all = document.getElementById('all');
// for文で
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
        tabTargets[i].classList.remove('is-active'); 
    }   
    // dataとidが一致してたらis-activeクラスを付与
            if(currentContent !== null) {
                currentContent.classList.add('is-active');
            }
  });
}
// 全部is-activeを加える
all.addEventListener('click', () => {
    for (let i = 0; i < tabTargets.length; i++) {
        tabTargets[i].classList.add('is-active'); 
    }
});