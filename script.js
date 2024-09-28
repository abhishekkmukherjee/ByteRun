function compile() {
  var html = document.getElementById("htmlCode").value;
  var css = document.getElementById("cssCode").value;
  var js = document.getElementById("jsCode").value;
  var output = document.getElementById("output").contentWindow.document;

  output.open();
  output.write(
      html + "<style>" + css + "</style>" + "<script>" + js + "<\/script>"
  );
  output.close();
}

function copy(text) {
  navigator.clipboard.writeText(text).then(() => {
      console.log('Content copied to clipboard');
  }, () => {
      console.error('Failed to copy');
  });
}

function copyContent(type) {
  let text = document.getElementById(type).value;
  copy(text);
}
