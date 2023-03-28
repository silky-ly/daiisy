const asyncHandler = require('express-async-handler');
const Goal = require('../models/goal.model');
const User = require('../models/user.model');

// @desc get goals ---- get/api/goals
const getGoals = asyncHandler(async (req, res) => {
	const goals = await Goal.find({ user: req.user.id });
	res.status(200).json(goals);
});

// @desc set goals ---- post/api/goals
const setGoal = asyncHandler(async (req, res) => {
	console.log(req.body);

	if (!req.body.goal) {
		res.status(400);
		throw new Error('please add details');
	}

	const goal = await Goal.create({
		user: req.user.id,
		goal: req.body.goal
	});

	res.status(200).json(goal);
});

// @desc update goals ---- put/api/goals/:id
const updateGoal = asyncHandler(async (req, res) => {
	const goal = await Goal.findById(req.params.id);

	if (!goal) {
		res.status(400);
		throw new Error('Goal not found');
	}

	const user = await User.findById(req.user.id)

	if (!user) {
		res.status(401)
		throw new Error('User not found')
	}

	if (goal.user.toString() !== user.id) {
		res.status(401)
		throw new Error('User not authorized')
	}

	const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	});
	res.status(200).json(updatedGoal);
});

// @desc delete goals ---- delete/api/goals/:id
const deleteGoal = asyncHandler(async (req, res) => {
	const goal = await Goal.findById(req.params.id);

	if (!goal) {
		res.status(400);
		throw new Error('Goal not found');
	}

	const user = await User.findById(req.user.id)

	if (!user) {
		res.status(401)
		throw new Error('User not found')
	}

	if (goal.user.toString() !== user.id) {
		res.status(401)
		throw new Error('User not authorized')
	}

	await goal.remove(req.params.id);

	res.status(200).json({ id: req.params.id });
});

module.exports = {
	getGoals,
	setGoal,
	updateGoal,
	deleteGoal,
};
