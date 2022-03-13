import sleepData from '../models/sleepData.js';
import SleepData from '../models/sleepData.js';
import User from '../models/user.js';
// Import the user schema and use the person's id to find all sleep instances
// created by that user.

export const getSleep = async (req, res) => {
  const { userId } = req.query;
  try {
    // Query and return all sleep instances created by a person using their userId
    // all sleep instances will have 2 id fields
    // the first id is the sleep instance's own id; the 2nd id is the creator's userId
    // localhost:4000/users/sleepData?userId=<userId>
    // The query should be SleepData.findBy({ creator: userId })
    const user = await User.findById({ _id: userId });
    if (!user) return res.status(400).send('No user found with that id.');
    const data = await SleepData.find({ creator: userId });
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createSleep = async (req, res) => {
  const sleepData = req.body;
  const newSleep = new SleepData({ ...sleepData, creator: req.userId });

  try {
    await newSleep.save();
    res.status(201).json(newSleep);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export const updateSleep = async (req, res) => {
  const { sleepData } = req.body;

  try {
    const sleepInstance = await SleepData.findByIdAndUpdate(
      { _id: sleepData.id },
      { ...sleepData },
      { new: true }
    );
    res.status(202).json(sleepInstance);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteSleep = async (req, res) => {
  const { id } = req.body;

  await SleepData.findByIdAndRemove(id);

  res.status(202).json({ message: 'Sleep instance successfully deleted.' });
};
