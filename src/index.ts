let srcm = require('source-map-support');
srcm.install();

import express from 'express'
import core from './core'

(async () => {
	const app = express()
	const port = 3000

	const printReq = 
		(req: express.Request, 
			res: express.Response, 
			next: express.NextFunction) => 
		{ 
			
			console.log(req);
			next()
		}

	app.use(printReq)

	app.route('/students')
		.get((req, res) => {
			let limit = Number(req.query.limit)
			let skip = Number(req.query.skip)
			
			let student = core.getStudents(limit, skip)
			res.json(student)
		})
		.post()

	app.route('/students/:id')
		.get((req, res) => {
			let id = Number(req.params.id)
			let student = core.getStudent(id)
			res.json(student)
		})
		.post()

	app.listen(port, () => {
		console.log('app listen in: http://localhost:' + port)
	})
})()