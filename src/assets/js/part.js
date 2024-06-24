// JavaScript for comment form submission and rating
document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var commenterName = document.getElementById('commenterName').value;
    var commentText = document.getElementById('commentText').value;
    var commentRating = document.getElementById('commentRating').value;
  
    var commentSection = document.querySelector('.comments');
    var newComment = document.createElement('div');
    newComment.classList.add('comment', 'mb-3');
    var starRating = '⭐'.repeat(commentRating) + '☆'.repeat(5 - commentRating);
    newComment.innerHTML = '<strong>' + commenterName + '</strong><p>' + commentText + '</p><p>Rating: ' + starRating + ' (' + commentRating + '/5)</p>';
    commentSection.appendChild(newComment);
  
    // Clear form
    document.getElementById('commentForm').reset();
  });
  