import mongoose from 'mongoose';

const NoteSchema = new mongoose.Schema(
  {
    title: { type: String, default: '' },
    todos: [{ text: { type: String }, checked: { type: Boolean, default: false } }],
    tags: [{ tagId: { type: mongoose.Schema.ObjectId } }],
    color: { type: String, default: '#ffffff' },
    isPinned: { type: Boolean, default: false },
    isTrashed: { type: Boolean, default: false },
    isArchived: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    collation: { locale: 'en_US', strength: 1, numericOrdering: true },
  }
);

export default mongoose.model('Note', NoteSchema);
