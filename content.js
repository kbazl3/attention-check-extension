

document.addEventListener("keydown", function (event) {



  var source = document.getElementsByTagName("html")[0].innerHTML;

  var foundPayingAttention = source.indexOf("paying attention");
  var foundPleaseSelectUpper = source.indexOf("Please Select");
  var foundPleaseSelectLower = source.indexOf("please select");



  if (event.key === "`") {

    if (foundPayingAttention !== -1) {
      alert("paying attention");
    } else if (foundPleaseSelectUpper !== -1) {
      alert("please select");
    } else if (foundPleaseSelectLower !== -1) {
      alert("please select");
    }

  }



});

