const app               = angular.module('bookmarkd', []);

app.controller( 'mainController' , ['$http' , function ( $http ){
  this.form  = {};

  this.addBookmark = () => {
    $http({
      method      : 'POST',
      url         : '/bookmarks',
      data        : this.form
    }).then ( response => {
      this.bookmarks.push( response.data );
      this.alertClass = 'alert';
      this.alertText = 'bookmark added';
      setTimeout ( ( ) =>{
        this.alertClass = '';
        this.alertText = '';
      }, 1000);
      this.form = {};
    }
  )
  }
}]);
