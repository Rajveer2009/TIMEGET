const express = require('express');
express().get('/now', (req, res) => {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dob = new Date(date);
    var dobArr = dob.toDateString().split(' ');
    var dobFormat = dobArr[2] + ' ' + dobArr[1] + ' ' + dobArr[3];
    var data = { "date": date, "time": time, "stringDate": dobFormat }
    const key = req.query.key;
    if (key == 2134) {
        res.send(data);
    }
    else {
        res.send({ data: 'error' });
    };
})