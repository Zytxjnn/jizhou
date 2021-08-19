function resizeListener(){
    // 定义设计图的尺寸 1920
    let designSize = 1920;
    // 获取 html 元素
    let html = document.documentElement;
    // 定义窗口的宽度
    let clientW = html.clientWidth;
    let sizeNum = 100;
    if(clientW <= 1360){
        sizeNum = 130
    }else if(clientW <= 1400){
        sizeNum = 120
    }else if(clientW <= 1600){
        sizeNum = 110
    }
    // html 的fontsize 大小
    let htmlRem = clientW * sizeNum / designSize;
    html.style.fontSize = htmlRem + 'px';
}

resizeListener();


window.addEventListener('resize',resizeListener);
