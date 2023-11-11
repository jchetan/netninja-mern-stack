const express = require('express');
const Workout = require('../models/Workout');
const router = express.Router();
const mongoose = require('mongoose');

router.get(
    '/',
    async (req, res) => {
        try {
            const workouts = await Workout.find({});
            res.status(200).json(workouts);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
);

router.get(
    '/:id',
    async (req, res) => {
        const {id} = req.params;
        if (mongoose.Types.ObjectId.isValid(id)) {
            try {
                const workout = await Workout.findById(id);
                if (!workout) {
                    res.status(404).json({ error: 'No such workout' });
                } else {
                    res.status(200).json(workout);
                }            
            } catch (error) {
                res.status(400).json({ error: error.message });
            }
        } else {
            res.status(404).json({ error: 'No such workout' });
        }
        
    }
);

router.delete(
    '/:id',
    async (req, res) => {
        const {id} = req.params;
        if (mongoose.Types.ObjectId.isValid(id)) {
            try {
                const workout = await Workout.findOneAndDelete({_id: id});
                if (!workout) {
                    res.status(404).json({ error: 'No such workout' });
                } else {
                    res.status(200).json(workout);
                }            
            } catch (error) {
                res.status(400).json({ error: error.message });
            }
        } else {
            res.status(404).json({ error: 'No such workout' });
        }
        
    }
);

router.patch(
    '/:id',
    async (req, res) => {
        const {id} = req.params;
        const { title, load, reps } = req.body;
        if (mongoose.Types.ObjectId.isValid(id)) {
            try {
                const workout = await Workout.findOneAndUpdate({_id: id}, {title, load, reps});
                if (!workout) {
                    res.status(404).json({ error: 'No such workout' });
                } else {
                    res.status(200).json(workout);
                }            
            } catch (error) {
                res.status(400).json({ error: error.message });
            }
        } else {
            res.status(404).json({ error: 'No such workout' });
        }        
    }
);

router.post(
    '/',
    async (req, res) => {
        const { title, load, reps } = req.body;
        try {
            const workout = await Workout.create({ title, load, reps });
            res.status(200).json(workout);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
);

module.exports = router;