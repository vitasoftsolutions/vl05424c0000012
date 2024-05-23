$(document).ready(function () {
  $(".profile_image_upload").change(function () {
    $(".profile_settings_upload_img").html(""); // Clear previous images
    for (var i = 0; i < $(this)[0].files.length; i++) {
      // Append new images
      $(".profile_settings_upload_img").append(
        '<img src="' + window.URL.createObjectURL(this.files[i]) + '">'
      );
    }
  });
});
