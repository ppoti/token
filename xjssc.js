const url = 'https://api.api68.com/CQShiCai/getBaseCQShiCai.do?issue=&lotCode=10004';
const https = require('https');
const http = require('http');

http.createServer( (req, res) => {
    

    let  curData = '';
    https.get(url, (res) => {
        res.on('data', function(d) {
            curData = d;
        });

        res.on('end', next);
    });

    let next = () => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.writeHead(200, {
            'Content-Type': 'text/html;charset=UTF8'
        })

        res.end(curData);
    }

}).listen(3002);