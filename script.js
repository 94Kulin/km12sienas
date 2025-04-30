function showZoom(imageName) {
  const zoomedView = document.getElementById('zoomedView');
  const zoomedImg = document.getElementById('zoomedImg');
  zoomedImg.src = `images/${imageName}.jpeg`;
  zoomedView.style.display = 'block';
}

function hideZoom() {
  const zoomedView = document.getElementById('zoomedView');
  zoomedView.style.display = 'none';
}
