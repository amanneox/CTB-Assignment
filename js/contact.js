$(function() {

  $("form[name='ctb']").validate({

    rules: {

      firstname: "required",
      lastname: "required",
      email: {
        required: true,

        email: true
      },
      message: {
        required: true,
        minlength: 5
      }
    },

    messages: {
      firstname: "We need your firstname",
      lastname: "We need your lastname",
      message: {
        required: "Sorry, Your mesage can't be empty",
        minlength: "Your message must be at least 5 characters long"
      },
      email: "Please use a valid e-mail address"
    },

    invalidHandler: function(form, validator) {
      $('#failed').show();

    },
    success: function(label) {
      label.addClass("valid");
      label.remove();
    },
    submitHandler: function(form) {
      form.submit();
      $('#myform').remove();
      $('#failed').remove();
      $('#success').show();
      e.preventDefault();
    },
    highlight: function(element, errorClass, validClass) {
      $('label').addClass('up-arrow');
    },

  });

});
