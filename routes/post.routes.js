const Router = require('express')
const router = new Router()
const PostController = require('../controller/post.controller.js')

router.get('/post', PostController.getPostsByUser)
router.get('/posts', PostController.getPosts)
router.post('/post', PostController.createPost)

module.exports = router