const db = require('../db.js')

class UserController {

    async createUser(request, response) {
        const { name, surname } = request.body
        const newPerson = await db.query('INSERT INTO person (name, surname) values ($1, $2) RETURNING *', [name, surname])
        response.json(newPerson.rows[0])
    }

    async getUsers(request, response) {
        const useres = await db.query('SELECT * FROM person')
        response.json(useres.rows)
    }

    async getOneUser(request, response) {
        const id = request.params.id
        const user = await db.query('SELECT * FROM person WHERE id = $1', [id])
        response.json(user.rows[0])
    }

    async updateUser(request, response) {
        const { id, name, surname } = request.body
        const newUser = await db.query(
            'UPDATE person SET name = $1, surname = $2 WHERE id = $3 RETURNING *',
            [name, surname, id]
        )
        response.json(newUser.rows[0])
    }

    async deleteUser(request, response) {
        const newUser = await db.query('DELETE FROM person WHERE id = $1', [request.params.id])
        response.json(newUser.rows[0])
    }
}

module.exports = new UserController()