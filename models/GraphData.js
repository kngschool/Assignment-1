var mongoose = require('mongoose');

var GraphDataSchema = new mongoose.Schema({
  
  countriesID: String,
  countries: String,
  numberOfCompanies: String
  
}, 
{
  collection: 'countries-data-collection'
});

mongoose.model('GraphData', GraphDataSchema);
