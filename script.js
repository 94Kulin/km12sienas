function showZoom(id) {
  document.getElementById('zoomedImg').src = 'images/' + id + '.jpg';
  document.getElementById('zoomedView').style.display = 'block';
}

function hideZoom() {
  document.getElementById('zoomedView').style.display = 'none';
}
