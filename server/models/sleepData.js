import mongoose from 'mongoose';

const sleepDataSchema = mongoose.Schema({
  creator: { type: String, required: true },
  date: { type: Date, required: true },
  sleepStart: { type: Date, required: true },
  sleepEnd: Date,
  moodStart: { type: Number, required: true },
  moodWake: Number,
  sleepGoal: { type: Number, required: true },
  sleepDuration: String,
  notesSleep: { type: String, default: '' },
  notesWake: { type: String, default: '' },
});

export default mongoose.model('SleepData', sleepDataSchema);
