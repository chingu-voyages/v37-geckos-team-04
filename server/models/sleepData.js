import mongoose from 'mongoose';

// sleepStart/sleepEnd should just store the time
//

const sleepDataSchema = mongoose.Schema({
  sleepStart: { type: Date, default: Date.now() },
  sleepEnd: { type: Date, default: Date.now() },
  date: Date,
  mood: Number,
  sleepGoal: Number,
  notes: [String],
});

export default sleepDataSchema;
