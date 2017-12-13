const express           = require ( 'express' );
const bookmarks          = express.Router();

const Bookmark          = require ( '../models/bookmarks.js' );


// INDEX
bookmarks.get ( '/' , async ( req , res ) => {
  try {
    const bookmarks = await Bookmark.find();
    res.status( 200 ).json( bookmarks );
  } catch ( error ) {
    res.status( 400 ).json({error : err.message});
  }
});

module.exports           = bookmarks;
