const http = require('http')

const port = 5000;
const server = http.createServer((req, res) => {

    const url = req.url;
    console.log(url)
    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write("<h2>Index Sayfasina hosgeldiniz</h2>")

    }
    else if (url === '/hakkimda') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write("<h2>Hakkimda Sayfasina hosgeldiniz</h2>")

    }
    else if (url === '/iletisim') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write("<h2>Iletisim Sayfasina hosgeldiniz</h2>")
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.write("404")

    }
    res.end();
});


server.listen(port, () => {
    console.log(`Server ${port} portunda calisiyor`);
})