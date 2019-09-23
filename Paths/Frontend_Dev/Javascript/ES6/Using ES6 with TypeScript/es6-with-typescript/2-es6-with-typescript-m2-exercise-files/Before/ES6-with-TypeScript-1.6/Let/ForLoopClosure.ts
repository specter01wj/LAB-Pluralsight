module ForLoopClosure {

  buttonsWithVar(3,document.getElementById("createdWithVar"));
  // buttonsWithVarAndIIFE(3,document.getElementById("createdWithVarAndIIFE"));
  // buttonsWithLet(3,document.getElementById("createdWithLet"));

  function buttonsWithVar(count, targetElement) {
    for (var i = 1; i <= count; i+= 1) {
      var button = makeButton("button " + i);

      button.onclick = function() {
        alert("This is button " + i + ".");
      };
      targetElement.appendChild(button);
    }
  }



  function makeButton(caption) {
    var button = document.createElement('button');
    button.innerText = caption;
    return button;
  }

  markIfNotImplemented(document.getElementById("createdWithVar"));
  markIfNotImplemented(document.getElementById("createdWithVarAndIIFE"));
  markIfNotImplemented(document.getElementById("createdWithLet"));

  function markIfNotImplemented(targetElement: HTMLElement) {
    if (targetElement.children.length === 0) {
      targetElement.innerHTML = "Not yet implemented.";
    }
  }
}
