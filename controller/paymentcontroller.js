const express = require('express')
const fpModel = require('../model/flex_payment')


const payment = async (req, res) => {
    try {

        let { uid } = req.body

        let card = await fpModel.find({
            uid: uid
        })

        if (card ?.length > 0) {
            res.json({
                message: "Success"
            })
        } else {

            let saveCard = await fpModel.create(req.body)
            res.json({
                message: "Success"
            })

        }

    } catch (error) {
        res.json({
            message: error.message
        })
    }
}

module.exports = payment