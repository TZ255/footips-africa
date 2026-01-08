import mongoose from 'mongoose';
const { Schema } = mongoose;

const tipSchema = new Schema({
  match: {
    type: String,
    required: true
  },
  league: {
    type: String,
    required: true
  },
  tip: {
    type: String,
    required: true
  },
  score: {
    type: String,
    default: '-:-'
  },
  odds: {
    type: String,
    required: true
  },
  isPremium: {
    type: Boolean,
    default: false
  },
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'won', 'lost'],
    default: 'pending'
  }
}, {
  timestamps: true, strict: false
});

const mikekatips = mongoose.connection.useDb('mikekatips');
let correctScoreModel = mikekatips.model('tips', tipSchema);
export default correctScoreModel;
