// Fetch accessibility issues
const testAccessibility = async (e) => {
  e.preventDefault();

  const url = document.querySelector('#url').value;
  // console.log(url);

  if (url === '') {
    alert('Please add a url');
  } else {
    setLoading();
  }
};

// Add issues to DOM

// Set loading state
const setLoading = (isLoading = true) => {
  const loader = document.querySelector('.loader');
  if (isLoading) {
    loader.style.display = 'block';
  } else {
    loader.style.display = 'none';
  }
};

// Escape HTML

document.querySelector('#form').addEventListener('submit', testAccessibility);
