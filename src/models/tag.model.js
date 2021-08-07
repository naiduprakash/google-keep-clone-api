import mongoose from 'mongoose';

const TagSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
  },
  {
    timestamps: true,
    collation: { locale: 'en_US', strength: 1, numericOrdering: true },
  }
);

export default mongoose.model('Tag', TagSchema);
