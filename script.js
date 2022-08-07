var descriptionError = document.getElementById("description-error");

function validateDescription() {
  var desc = document.getElementById("Service-Description").value;
  var requiredNumber = 30;
  var left = requiredNumber - desc.length;
  if (left > 0) {
    descriptionError.innerHTML = left + " more characters required";
    return false;
  } else {
    descriptionError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
  }
}
