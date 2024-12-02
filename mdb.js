const mongoose = require('mongoose');

const ContentSchema = new mongoose.Schema({
    userId: String,
    keywords: String,
    content: String,
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Content', ContentSchema);
