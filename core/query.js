/**
 * Created by ChenChao on 2018/1/15.
 * 车票查询
 */

var request = require('request');
request.defaults({jar: true});

var url = `https://kyfw.12306.cn/otn/leftTicket/queryZ?
	leftTicketDTO.train_date=2018-02-04&
	leftTicketDTO.from_station=SHH&
	leftTicketDTO.to_station=LLG&
	purpose_codes=ADULT`;

request(url, function(err, resp, body) {
    if (!err && resp.statusCode === 200) {
	try{
	    var jsonData = JSON.parse(body);
	    console.log(jsonData);
	}catch (e){
	    console.log(`response:\n`, body);
	}
    } else {
	console.log(`err: ${err}\n`, `Http Response Code: ${resp.statusCode}`);
    }
});