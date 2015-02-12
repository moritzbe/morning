// var Tinder = window.Tinder || {};

// // Query Selector Function
// Tinder.query = function(selector) {
//   this.element = document.querySelector(selector);
//   return this;
// };

// // Event Listener Function
// Tinder.on = function(event, callback) {
//   this.element.addEventListener(event, callback);
//   return this;
// };


var MyQuery = function() {
  this.element;
  this.query = function(selector) {
	  this.element = document.querySelector(selector);
	  return this;
	};
  this.on = function(event, callback) {
	  this.element.addEventListener(event, callback);
	  return this;
};
}

// var mq = new MyQuery();`
// mq.query("#button").on("click", myCallbackFunction);
