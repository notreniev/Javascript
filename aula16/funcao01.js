function parOuImpar(n){
    if (n%2==0){
        return 'Par!'
    }else{
        return 'Ímpar!'
    }
}

let res = parOuImpar(8)

console.log(res)