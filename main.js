let sec = 0
let min = 0
let hours = 0
let time = ""

const date = new Date()
sec = date.getSeconds()
min = date.getMinutes()
hours = date.getHours()

exports.gettime = function() {
    const date = new Date()

    sec = date.getSeconds()
    min = date.getMinutes()
    hours = date.getHours()

    time = hours + ":" + min + ":" + sec

    console.log(time);
}

exports.time = hours + ":" + min + ":" + sec