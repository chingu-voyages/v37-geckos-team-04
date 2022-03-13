import mongoose from 'mongoose';

// sleepStart/sleepEnd should just store the time
// creator is the id of the person's profile id creating the sleep instance

const sleepDataSchema = mongoose.Schema({
  creator: String,
  sleepStart: { type: Date, default: Date.now() },
  sleepEnd: { type: Date, default: null },
  date: { type: Date, default: Date.now() },
  moodStart: Number,
  moodWake: Number,
  sleepGoal: Number,
  notes: [String],
});

export default mongoose.model('SleepData', sleepDataSchema);
