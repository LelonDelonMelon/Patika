const Koa = require("koa");
const app = new Koa();

// response
app.use((ctx) => {
    if (ctx.path === "/") {
        ctx.body = "<h1>İndex sayfasina hosgeldiniz</h1>";
    } else if (ctx.path === "/hakkimda") {
        ctx.body = "<h1>Hakkımda sayfasina hosgeldiniz</h1>";
    } else if (ctx.path === "/iletisim") {
        ctx.body = "<h1>Iletisim sayfasina hosgeldiniz</h1>";
    }
    else {
        ctx.body = "<h2>404 not found</h2>"
    }
});
const port = 3000;

app.listen(port, () => {
    console.log(`Server ${port} portunda calisiyor `);
});