var SmartRPC = require('smart-rpc'),
    CronJob = require('cron').CronJob,
    config = require('./config');

var client = SmartRPC.create(config.coin);

new CronJob('0 */1 * * * *', function () {   
    client.sentinelPing(config.version).then((val) => {
        console.log('%s ping %s', new Date(), val);
    });
}, null, true);