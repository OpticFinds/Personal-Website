document.getElementById('searchInput').addEventListener('keyup', function() {
    let filter = this.value.toLowerCase();
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

    if (!foundResults) {
        noResultsMessage.style.display = 'block';
    } else {
        noResultsMessage.style.display = 'none';
    }
});

function toggleDescription(button) {
    let description = button.previousElementSibling;
    if (description.classList.contains('expanded')) {
        description.classList.remove('expanded');
        button.textContent = 'More';
    } else {
        description.classList.add('expanded');
        button.textContent = 'Less';
    }
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
