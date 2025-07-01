const arr = [584];

function uniqueNumberGenerate(){
    let arrLength = arr.length;
    while(arrLength === arr.length){
        let number = Math.floor(Math.random() * 1000);
        console.log(number);
        if(!arr.includes(number)){
            arr.push(number);
            return number;
        }
    }
}

export default uniqueNumberGenerate;