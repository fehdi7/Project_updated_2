const express = require ("express")
const { route } = require('express/lib/application')
const Detail = require("../models/detail")
const routes = express.Router()
const path = require("path")
const userinfo = require("../models/userinfo")
const collection = require("../models/userinfo").default;
const userRoute = require('./userRouter')
routes.use(express.urlencoded({ extended: true }))

routes.use(express.json())



routes.get('/', (req,res) =>{
	res.render("login")
})
 
routes.get('/signup', (req,res) =>{
	res.render("signup")
})


routes.get('/home', async (req, res) => {
	const Details= await Detail.findOne({"id":"64517f235a5fdfd776d5cca7"})
	//console.log(Details)
		res.render("index",{
			Details:Details
		});
}) ;

routes.use('/', userRoute)

routes.get('/services',(req,res)=>{
	res.render("Services")
})
routes.get('/whyus',(req,res)=>{
	res.render("whyus")
})
routes.get('/featuredwork',(req,res)=>{
	res.render("featuredwork")
})
routes.get('/reviews',(req,res)=>{
	res.render("reviews")
})

module.exports=routes
