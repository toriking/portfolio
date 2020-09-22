const target = document.getElementById('bable-rei');
for (let i=0; i<=50; i++) {
    const moveBub = Math.ceil(Math.random()*50);
    const posBub = Math.ceil(Math.random()*50);
    const scaleBub = Math.ceil(Math.random()*10);
    const shakeBub = Math.ceil(Math.random()*5);
    const movePos = document.createElement('div');
    movePos.classList.add('move'+ moveBub, 'pos' + posBub);
    const scale = document.createElement('div');
    scale.classList.add('scale' + scaleBub);
    movePos.appendChild(scale);
    const itemShake = document.createElement('div');
    itemShake.classList.add('bable-item', 'shake' + shakeBub);
    scale.appendChild(itemShake);
    target.appendChild(movePos);
}

