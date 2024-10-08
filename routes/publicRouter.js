const company = require("./company")
const member = require('./member')
const team = require('./team')
const product = require('./product')

const publicRouter = (app) =>{
app.use('/api/company', company)
app.use('/api', company) //For login
app.use('/api/member', member)
app.use('/api/teams', team)
app.use('/api/products', product)
}

module.exports = publicRouter;