function CustomLoadingScreen( /* variables needed, for example:*/ text) {
  //init the loader
  this.loadingUIText = text;
}
CustomLoadingScreen.prototype.displayLoadingUI = function() {
  alert(this.loadingUIText);
};
CustomLoadingScreen.prototype.hideLoadingUI = function() {
  alert("Loaded!");
};