function addMainNav(navName) {
  console.log('add ', navName);

  let pageFakeData = {
    navName: navName,
    content: '<h1>HELLO</h1>',
    subNavs: []
  };

  TREEFROG_SERVICE.saveData(pageFakeData);
}

function initButtons() {
  $('#home').click(function() {
    $('#addNav div').removeClass('active');
    $('#home div').addClass('active');

    $('#createMainNav').off();

    $('.text-wrapper').html(TREEFROG_SERVICE.getHomeContent());
    $('.btn-holder').html(TREEFROG_SERVICE.getHomeStartButton());
    addGetStartedListener();
  });

  $('.closeModal').click(function() {
    closeModal();
  });

  $('#createMainNav').click(function(e) {
    //this is where you would get data from database for nav list
    let newNavName = $('#newMainNavName')
      .val()
      .toLowerCase()
      .trim();

    TREEFROG_SERVICE.checkMainNavName(newNavName, addMainNav);

    // if (!newNavName) {
    //   alert('inside if ', newNavName);
    // } else {
    //   let isUnique = true;
    //   $.each(fakeList, function(idx, val) {
    //     console.log(val.navName);
    //     if (val.navName == newNavName) {
    //       alert('hey dumb ass it is the same. Muj did it. ');
    //       isUnique = false;
    //       return false;
    //     }
    //   });
    //   if (isUnique) {
    //     fakeList.push({ navName: newNavName });
    //     $('#newMainNavName').val('');
    //     closeModal();
    //     $('.btn-holder').html('');
    //     $('.text-wrapper').html(TREEFROG_SERVICE.getEditorText(newNavName));
    //     var toolbarOptions = [
    //       ['bold', 'italic', 'underline', 'strike'], // toggled buttons
    //       ['blockquote', 'code-block', 'image', 'link'],
    //       [{ header: 1 }, { header: 2 }], // custom button values
    //       [{ list: 'ordered' }, { list: 'bullet' }],
    //       [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
    //       [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
    //       [{ direction: 'rtl' }], // text direction
    //       [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
    //       [{ header: [1, 2, 3, 4, 5, 6, false] }],
    //       [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    //       [{ font: [] }],
    //       [{ align: [] }],
    //       ['clean'] // remove formatting button
    //     ];
    //     var quill = new Quill('.editor', {
    //       modules: {
    //         toolbar: toolbarOptions
    //       },
    //       theme: 'snow'
    //     });
    //     $('#saveData').click(function(e) {
    //       e.preventDefault();
    //       // var pageNav = $("#pageTitle").val();
    //       var justHtml = quill.root.innerHTML;
    //       $('#quillContent').html(justHtml);
    //       // setPages(justHtml);
    //       // $(".content-wrapper").css("display", "block");
    //       // $(".pageData").html(justHtml);
    //     });
    //   }
    // }
  });
}

function addCreateMNListener() {
  $('#createMainNav').click(function(e) {
    $('.modal').css('display', 'flex');
  });
}

function closeModal() {
  $('.modal').css('display', 'none');
}

function addGetStartedListener() {
  $('.get-started').click(function(e) {
    // console.log('hello');
    $('#home div').removeClass('active');
    $('#addNav div').addClass('active');

    $('.text-wrapper').html(TREEFROG_SERVICE.getGetStartedContent());
    $('.btn-holder').html(TREEFROG_SERVICE.getCreateNavButtons());
    addCreateMNListener();
    $('.get-started').off('click');
  });
}

$(document).ready(function() {
  TREEFROG_SERVICE.initFirebase();
  initButtons();
  addGetStartedListener();
});
