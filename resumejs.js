var myState = {
  pdf: null,
  currentPage: 1,
  zoom: 1,
};

pdfjsLib
  .getDocument("https://art-apurv.github.io/Portfolio/Apurv Krishna (4).pdf")
  .then((pdf) => {
    myState.pdf = pdf;
    render();
  });

function render() {
  myState.pdf.getPage(myState.currentPage).then((page) => {
    var canvas = document.getElementById("pdf_renderer");
    var ctx = canvas.getContext("2d");

    var viewport = page.getViewport(myState.zoom);

    canvas.width = viewport.width;
    canvas.height = viewport.height;

    page.render({
      canvasContext: ctx,
      viewport: viewport,
    });
  });
}
