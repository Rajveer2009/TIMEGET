function now(){
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dob = new Date(date);
    let dobArr = dob.toDateString().split(' ');
    let dobFormat = dobArr[2] + ' ' + dobArr[1] + ' ' + dobArr[3];
    let data = { "date": date, "time": time, "stringDate": dobFormat }
}