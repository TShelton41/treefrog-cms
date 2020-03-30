function init() {
  $('#addData').click(function(e) {
    e.preventDefault();
    let nName = $('#nav-input')
      .val()
      .trim()
      .toLowerCase();

    if (nName != '') {
      PRACTICE_SERVICE.checkPages(nName, alertUser);
      $('#nav-input').val('');
    } else {
      alert('add name');
    }
    //get info from input box lowercase data and then submit to practice
  });

  // $('#checkPages').click(function(e) {
  //   e.preventDefault();
  //   console.log('check data');
  //   PRACTICE_SERVICE.checkPages('address');
  // });
}

function alertUser(result) {
  alert(result);
}

$(document).ready(function() {
  PRACTICE_SERVICE.initFirebase(init);
});
