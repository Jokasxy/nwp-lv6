var mongoose = require('mongoose');  
var projectsSchema = new mongoose.Schema({  
  name: String,
  description: String,
  done: String,
  start: { type: Date, default: Date.now },
  end: { type: Date, default: Date.now }
});
mongoose.model('Project', projectsSchema);
