const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://SudoOscu:Hack2025@cluster0.6qpln4n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ MongoDB connected successfully');
})
.catch(err => {
  console.error('❌ MongoDB connection error:', err.message);
});