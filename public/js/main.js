// Fetch accessibility issues
const testAccessibility = async (e) => {
  e.preventDefault();

  const url = document.querySelector('#url').value;
  // console.log(url);

  if (url === '') {
    alert('Please add a url');
  } else {
  }
};

// Add issues to DOM

// Set loading state

// Escape HTML

document.querySelector('#form').addEventListener('submit', testAccessibility);
