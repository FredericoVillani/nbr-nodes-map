const app = require('express')();
const locations = require('./locations');

locations.cacheLocations();
setInterval(locations.cacheLocations, 140000); // next to 3 minutes

app.set('view engine', 'ejs');
app.set("views", __dirname + "/views");

// blog home page
app.get('/', async (req, res) => {
    res.render('home', { locations: await locations.getCachedLocations() });
    setInterval(locations.getCachedLocations, 12000); // 20 seconds
});


app.listen(8081);

console.log('listening on port 8081');
