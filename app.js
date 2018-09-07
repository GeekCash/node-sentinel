var SmartRPC = require('smart-rpc'),
    CronJob = require('cron').CronJob,
    config = require('./config');



new CronJob('0 */5 * * * *', function () {

    for (let i = 0; i < config.coins.length; i++) {
        setTimeout(function () {
            const o = config.coins[i];
            var client = SmartRPC.create(o);
            client.sentinelPing(config.version).then((val) => {
                console.log(o.id, new Date(), val);
            });
        }, i * 2000);

    }


}, null, true);