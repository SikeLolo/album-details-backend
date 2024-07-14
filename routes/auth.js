const express = require('express')
const router = express.Router();
const User = require('../models/User');

router.post('/login', async (request, response) => {
    const username = request.body;
    console.log(username)
    /*try {
        const user = await User.findOneAndUpdate(
            {username},
            {username},
            { new: true, upsert: true }
        )
        return res.status(200).send(user)
    } catch (error) {
        console.error(error)
        return response.status(500).send('Server Error')
    }*/
})


module.exports = router