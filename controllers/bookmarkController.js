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

//CREATE
bookmarks.post ( '/' , async ( req , res ) => {
  try {
    const newBookmark = await Bookmark.create( req.body );
    res.status( 200 ).json( newBookmark );
  } catch ( error ) {
    res.status( 400 ).json({error : err.message});
  }
});

//DELETE
bookmarks.delete ( '/:id' , async ( req , res ) => {
  try {
    const deleteBookmark = await Bookmark.findByIdAndRemove( req.params.id );
    res.status( 200 ).json( deleteBookmark );
  } catch ( error ) {
    res.status( 400 ).json({error : error.message});
  }
});

module.exports           = bookmarks;
