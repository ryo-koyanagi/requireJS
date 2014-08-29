define(function (require) { 
  var button = document.createElement("button");
  button.onClick = function () {
    var alerter = require(["alerter"], function(alerter) {
      alerter("new_alerter")
    });
  }

  button.textContent = "click!!";
  document.body.appendChild(button);
})
