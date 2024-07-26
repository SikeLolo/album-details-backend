const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.post('/add', async (request, response) => {
    const username = request.body.username, id = request.body.albumId
    try {
        console.log(username, id)

        const user = await User.findOneAndUpdate(
            {username: username},
            {$addToSet: {albumId: id}},
            {new: true}
        )
        return response.status(200).send(user)
    } catch (error) {
        console.error(error)
        return response.status(500).send('Server Error')
    }
})
router.get('/getAlbums', async (request, response) => {
    const username = request.query.username;
    try {
        const albumData = await User.find({ username })
        const albumId = albumData[0].albumId;
        return response.status(200).send(albumId)
    } catch (error) {
        console.error(error)
        return response.status(500).send('Server Error')
    }
})

module.exports = router