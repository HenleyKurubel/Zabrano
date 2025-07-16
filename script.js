
console.log('Script Loaded');

//Get the search bar and properties elements 
const searchBar = document.getElementById('search-bar');
const properties = document.querySelectorAll('.property');

if (!searchBar || properties.length === 0) {
    console.error('Search bar or properties not found');
}

// Search functionality
searchBar.addEventListener('input', () => {
    const searchQuery = searchBar.value.toLowerCase();

    properties.forEach((property) => {
        const propertyName = property.querySelector('h4').textContent.toLowerCase();
        const propertyDescription = property.querySelector('p').textContent.toLowerCase();

        if (
            propertyName.includes(searchQuery) ||
            propertyDescription.includes(searchQuery)
        ){
            property.style.display = 'block';
        } else {
            property.style.display = 'none';
        }
    });
});

// script.js
function applyFilters() {
    const maxPrice = parseInt(document.getElementById('price').value) || Infinity;
    const location = document.getElementById('location').value;
    const bedrooms = parseInt(document.getElementById('bedrooms').value) || 0;

    document.querySelectorAll('.property').forEach(property => {
        const price = parseInt(property.dataset.price);
        const propLocation = property.dataset.location;
        const beds = parseInt(property.dataset.bedrooms);

        const matches = price <= maxPrice &&
        (location === '' || location === propLocation) &&
        beds >= bedrooms;

        property.style.display = matches ? 'block' : 'none';
    });
}