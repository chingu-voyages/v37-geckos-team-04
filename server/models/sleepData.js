import mongoose from 'mongoose';

const sleepDataSchema = mongoose.Schema({
  creator: { type: String, required: true },
  sleepStart: { type: String, required: true },
  sleepEnd: String,
  date: { type: String, required: true },
  moodStart: { type: Number, required: true },
  moodWake: Number,
  sleepGoal: { type: Number, required: true },
  sleepDuration: Number,
  notes: [String],
});

export default mongoose.model('SleepData', sleepDataSchema);
