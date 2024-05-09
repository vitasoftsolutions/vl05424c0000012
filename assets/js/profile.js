$(document).ready(function () {
  $(".image-upload").change(function () {
    $(".settings-upload-img").html(""); // Clear previous images
    for (var i = 0; i < $(this)[0].files.length; i++) {
      // Append new images
      $(".settings-upload-img").append(
        '<img src="' + window.URL.createObjectURL(this.files[i]) + '">'
      );
    }
  });
});
