function generate_pdf() {
  document.querySelector(".add-btn").classList.add("hide");
  var element = document.getElementById("target");

  // New Promise-based usage:

  var opt = {
    margin: 0.1,
    filename: "myfile.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
  };
  html2pdf().from(element).set(opt).save().then(removeClass);
}

function removeClass() {
  document.querySelector(".add-btn").classList.remove("hide");
}

document.getElementById("pdf-gen").onclick = generate_pdf;
