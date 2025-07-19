function printMessage(message) {
    console.log(message);
}

function printArray(arr) {
    arr.forEach(item => {
        console.log(item);
    });
}

function printObject(obj) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key}: ${obj[key]}`);
        }
    }
}