
type Student = { name: string, ci: string }

class Core {
	private students: Student[]

	constructor() {
		this.students = [
			{ name: 'douglas', ci: '1234' },
			{ name: 'miguel', ci: '34344' },
			{ name: 'jorge', ci: '6634' }
		]
	}

	getStudents(limit: number, skip: number): Student[] {
		let from = skip
		let to = from + limit
		return this.students.slice(from, to)
	}

	getStudent(id: number): Student {
		return this.students[id]
	}
}

export default new Core()