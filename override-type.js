/*globals chrome */

function getState(callback){
  chrome.storage.sync.get('state', function(data) {
    callback(data.state);
  });
}

function toggleCSS(state){
  var overrideCSS = 'layoutShiftTextOverride';
  var body = document.querySelector('html');
  var toggle = state ? body.classList.add : body.classList.remove;
  toggle.call(body.classList, overrideCSS);
}

chrome.storage.onChanged.addListener(function (data) {
  var state = data.state.newValue;
  toggleCSS(state);
});

getState(function(state) {
  toggleCSS(state);
});
