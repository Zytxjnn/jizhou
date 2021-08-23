export function _chunk(arr,num){
    const len = arr.length,
          _arr = [];
    let index = 0;

    while(index < len){
        _arr.push(arr.slice(index,(index+=num)))
    }
    return _arr;
}

export function setStorage(key,data){
    localStorage.setItem(key,JSON.stringify(data));
}

export function getStorage(key){

    return JSON.parse(localStorage.getItem(key));
}
