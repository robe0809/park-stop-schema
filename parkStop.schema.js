const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Mongoose Schema
const ImageSchema = new Schema ({
    // every time a user submits an image it will POST the current park 
    // ID along with the imgFile and the description if they provided one.
    parkId: {type: String, required: true},
    imgFile: {type: String, required: true},
    description: {type: String}
});

const ReviewSchema = new Schema ({
    // every time a user submits a review it will POST the current park 
    // ID along with the comment they made and the ratings
    parkId: {type: String, required: true}, 
    comment: {type: String, required: true},
    Ratings: {type: Number, required: true}
});

const FavoriteSchema = new Schema ({
    // this will take the parkID from the current park the user
    // is on and POST the ID to the database. I will then have to GET the corresponding parks
    // information to display it on the favorites Page. 
    // (I don't know if there is an easier way. I feel like there is, I just can't think of it.) 
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