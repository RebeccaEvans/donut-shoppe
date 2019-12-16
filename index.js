let express = require('express')
let layouts = ('express-ejs-layouts')
let app = express()

app.set('view engine', 'ejs')
app.use(layouts())

app.get('/', (req, res) => {
	res.send('Hello!')
})

app.listen(process.env.PORT || 3000)