const db = require('../db')

class PostController {

    async createPost(request, response) {
        const { name, content, userId } = request.body
        const newPost = await db.query(
            'INSERT INTO post (name, content, user_id) values ($1, $2, $3) RETURNING *',
            [name, content, userId]
        )
        response.send(newPost.rows[0])
    }

    async getPosts(request, response) {
        const posts = await db.query('SELECT * FROM post')
        response.send(posts.rows)
    }

    // получаем все посты которые пренадлежат данному user_id
    async getPostsByUser(request, response) {
        const id = request.query.id
        const posts = await db.query('SELECT * FROM post WHERE user_id = $1', [id])
        response.send(posts.rows)
    }

}

module.exports = new PostController()