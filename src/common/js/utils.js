export function _chunk(arr,num){
    const len = arr.length,
          _arr = [];
    let index = 0;

    while(index < len){
        _arr.push(arr.slice(index,(index+=num)))
    }
    return _arr;
}