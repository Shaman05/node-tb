/**
 * Created by ChenChao on 2018/1/15.
 */

var request = require('request');

var url = `https://kyfw.12306.cn/otn/leftTicket/queryZ?leftTicketDTO.train_date=2018-02-04&leftTicketDTO.from_station=SHH&leftTicketDTO.to_station=LLG&purpose_codes=ADULT`;
request(url, function(err, resp, body) {
    try {
	if (!err && resp.statusCode === 200) {
	    console.log(body);
	} else {
	    console.log(`err: ${err}\n`, `Http Response Code: ${resp.statusCode}`);
	}
    } catch (e) {
	console.log(chalk.bgRed(e));
    }
});