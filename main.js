const date = new Date()
let sec = date.getSeconds()
let min = date.getMinutes()
let hours = date.getHours()

exports.gettime = function() {
    const date = new Date()

    let sec = date.getSeconds()
    let min = date.getMinutes()
    let hours = date.getHours()

    time = hours + ":" + min + ":" + sec

    console.log(time);
}

exports.time = hours + ":" + min + ":" + sec