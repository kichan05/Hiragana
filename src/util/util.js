export function random(start, end) {
    /* 시작값과 끝 값을 받아서 두 수 사이의 난수를 반환한다. */
    return Math.floor(Math.random() * (end - start)) + start;
}

export function shuffle(arr) {
    for(let i = 0; i < 3; i++){
        arr = arr.sort(() => Math.random() - 0.5)
    }

    return arr
}

export function randomChoice(arr){
    return shuffle(arr)[0]
}