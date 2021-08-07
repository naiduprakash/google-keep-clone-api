import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, require: true },
    password: { type: String, require: true },
  },
  {
    timestamps: true,
    collation: { locale: 'en_US', strength: 1, numericOrdering: true },
  }
);

export default mongoose.model('User', UserSchema);
