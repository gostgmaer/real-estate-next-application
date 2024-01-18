const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  property_id: { type: String },
  name: { type: String },
  type: { type: String },
  location: {
    city: { type: String },
    state: { type: String },
    country: { type: String },
    zipcode: { type: String },
  },
  description: { type: String },
  amenities: { type: Array, default: [] },
  capacity: { type: Number, default: 0 },
  bedrooms: { type: Number, default: 0 },
  bathrooms: { type: Number, default: 0 },
  price_per_night: { type: Number, default: 0 },
  currency: { type: String },
  availability: {
    start_date: { type: String },
    end_date: { type: String },
  },
  images: { type: Array, default: [] },
  host: {
    host_id: { type: String },
    host_name: { type: String },
    host_contact: { type: String },
    host_image: { type: Array, default: [] },
  },
  year_of_construction: { type: Number, default: 0 },
  construction_status: { type: String },
  parking: { type: Boolean, default: false },
  is_furnished: { type: String },
  floor: {
    number: { type: Number, default: 0 },
    total_floors: { type: Number, default: 0 },
  },
  size: {
    area: { type: Number, default: 0 },
    unit: { type: String },
  },
  rating: { type: Number, default: 0 },
  reviews: { type: Array, default: [] },
  rules: { type: Array, default: [] },
  contact_person: {
    name: { type: String },
    email: { type: String },
    phone: { type: String },
  },
  booking_policy: { type: String },
  additional_info: { type: String, default: "" },
}, { timestamps: true }); // Add timestamps option

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
