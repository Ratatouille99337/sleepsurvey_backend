let mongoose = require("mongoose");

var surveyResponseSchemaInstance = new mongoose.Schema({
  responses: {
    type: mongoose.Schema.Types.Mixed, // Flexible to handle arrays and objects
    required: true
  }
});

module.exports = mongoose.model("SurveyResponse", surveyResponseSchemaInstance);