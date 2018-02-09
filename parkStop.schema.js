const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Mongoose Schema
const ImageSchema = new Schema ({
    parkId: {type: String, required: true},
    imgFile: {type: String, required: true},
    description: {type: String}
});

const ReviewSchema = new Schema ({
    parkId: {type: String, required: true},
    comment: {type: String, required: true},
    Ratings: {type: Number, required: true}
});

const FavoriteSchema = new Schema ({
    parkId: {type: String, required: true} 
});

const UserSchema = new Schema({
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  userImage: [{type: mongoose.Schema.ObjectId, ref: 'Image'}],
  userReview: [{type: mongoose.Schema.ObjectId, ref: 'Review'}],
  userFavorite: [FavoriteSchema]
});

let User = mongoose.model('User', UserSchema);
let Image = mongoose.model('Image', ImageSchema);
let Review = mongoose.model('Review', ReviewSchema);

module.exports = {User, Image, Review};