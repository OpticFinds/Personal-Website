document.getElementById('searchInput').addEventListener('keyup', debounce(function() {
    let filter = this.value.toLowerCase().trim(); // Trim whitespace for accurate comparison
    let productCards = document.getElementsByClassName('product-card');
    let noResultsMessage = document.querySelector('.no-results-message');

    let foundResults = false;

    Array.from(productCards).forEach(function(card) {
        let title = card.getElementsByTagName('h2')[0].textContent.toLowerCase();
        let keywords = card.getAttribute('data-keywords').toLowerCase();
        if (title.includes(filter) || keywords.includes(filter)) {
            card.style.display = '';
            foundResults = true;
        } else {
            card.style.display = 'none';
        }
    });

    if (foundResults) {
        noResultsMessage.style.display = 'none';
    } else {
        noResultsMessage.style.display = 'block';
    }
}, 300));

function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

function toggleDescription(button) {
  let description = button.closest('.product-card').querySelector('.description');
  if (description.classList.contains('expanded')) {
    description.classList.remove('expanded');
  } else {
    description.classList.add('expanded');
  }
  // We don't modify the display property of the product card here.
}

document.addEventListener('DOMContentLoaded', function() {
    let starsContainers = document.querySelectorAll('.stars');
    starsContainers.forEach(function(container) {
        let rating = parseFloat(container.parentElement.getAttribute('data-rating'));
        if (!isNaN(rating)) {
            container.style.setProperty('--star-rev', Math.round(rating));
        }
    });
});
