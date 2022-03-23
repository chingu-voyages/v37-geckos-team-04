import SleepData from '../models/sleepData.js';

export const getSleep = async (req, res) => {
  const { userId } = req.params;
  try {
    const data = await SleepData.find({ creator: userId });
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createSleep = async (req, res) => {
  const sleepData = req.body;
  const newSleep = new SleepData({ ...sleepData });

  try {
    await newSleep.save();
    res.status(201).json(newSleep);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export const updateSleep = async (req, res) => {
  const sleepData = req.body;
  const { id } = req.params;
  try {
    const sleepInstance = await SleepData.findByIdAndUpdate(
      { _id: id },
      { ...sleepData },
      { new: true }
    );
    res.status(202).json(sleepInstance);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteSleep = async (req, res) => {
  const { id } = req.params;

  await SleepData.findByIdAndRemove(id);

  res.status(202).json({ message: 'Sleep instance successfully deleted.' });
};
