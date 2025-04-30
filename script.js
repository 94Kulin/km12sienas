function showZoom(imageName) {
  console.log("Hover detected:", imageName); // Add this line
  const zoomedView = document.getElementById('zoomedView');
  const zoomedImg = document.getElementById('zoomedImg');
  zoomedImg.src = `images/${imageName}.jpeg`;
  zoomedView.style.display = 'block';
}

function hideZoom() {
  const zoomedView = document.getElementById('zoomedView');
  zoomedView.style.display = 'none';
}
