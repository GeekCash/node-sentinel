module.exports = {

    version: '1.2.1',
    coins: [
        {
            id: 'MN-01',
            rpc: {
                url: 'http://127.0.0.1:6888/',
                method: 'POST',
                auth: {
                    username: 'root',
                    password: 'pass'
                },
            }
        },
        {
            id: 'MN-02',
            rpc: {
                url: 'http://127.0.0.1:6888/',
                method: 'POST',
                auth: {
                    username: 'root',
                    password: 'pass'
                },
            }
        }

    ]

}