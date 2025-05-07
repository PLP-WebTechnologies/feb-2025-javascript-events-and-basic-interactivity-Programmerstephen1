// 1. Button Click and Hover Effects
const clickButton = document.getElementById('clickButton');
clickButton.addEventListener('click', () => {
  clickButton.textContent = "You clicked me!";  // Change button text
  clickButton.style.backgroundColor = "#f39c12";  // Change button color
});

// 2. Secret Action (Double-click or Long Press)
const secretArea = document.getElementById('secretArea');

// Double-click event
secretArea.addEventListener('dblclick', () => {
  alert("Secret action triggered via double-click!");
});

// Long press (touchstart and touchend for mobile)
let timer;
secretArea.addEventListener('touchstart', () => {
  timer = setTimeout(() => {
    alert("Secret action triggered via long press!");
  }, 1000); // 1 second long press
});

secretArea.addEventListener('touchend', () => {
  clearTimeout(timer);
});

// 3. Image Gallery with Hover Effect
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    alert("You clicked an image!");
  });
});

// 4. Tabs/Accordion Content
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Hide all tab contents
    tabContents.forEach(content => content.style.display = 'none');

    // Show the clicked tab content
    const tabId = button.getAttribute('data-tab');
    document.getElementById(tabId).style.display = 'block';

    // Add active class to the clicked tab
    tabButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

// 5. Form Validation
const form = document.getElementById('validationForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('errorMessage');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission

  let valid = true;
  errorMessage.textContent = "";

  // Check if the name is filled out
  if (document.getElementById('name').value.trim() === "") {
    errorMessage.textContent += "Name is required.\n";
    valid = false;
  }

  // Check email format
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailRegex.test(emailInput.value)) {
    errorMessage.textContent += "Please enter a valid email.\n";
    valid = false;
  }

  // Check password length
  if (passwordInput.value.length < 8) {
    errorMessage.textContent += "Password must be at least 8 characters long.\n";
    valid = false;
  }

  if (valid) {
    alert("Form submitted successfully!");
  } else {
    errorMessage.style.display = 'block';
  }
});
