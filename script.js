document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signupForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const savedName = document.getElementById("savedName");
    const savedEmail = document.getElementById("savedEmail");
    const clearDataButton = document.getElementById("clearData");

    // Load saved data when the page loads
    if (localStorage.getItem("userName")) {
        savedName.textContent = "Name: " + localStorage.getItem("userName");
        savedEmail.textContent = "Email: " + localStorage.getItem("userEmail");
    }

    signupForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim(); // Not saving password

        if (name && email) {
            // Save user data in localStorage
            localStorage.setItem("userName", name);
            localStorage.setItem("userEmail", email);

            // Display saved data
            savedName.textContent = "Name: " + name;
            savedEmail.textContent = "Email: " + email;
            alert("Sign-up successful! Data saved.");

            // Clear input fields after saving
            nameInput.value = "";
            emailInput.value = "";
            passwordInput.value = "";
        }
    });

    // Clear data button
    clearDataButton.addEventListener("click", () => {
        localStorage.clear();
        savedName.textContent = "";
        savedEmail.textContent = "";
        alert("Data cleared.");
    });
});


// Rating functionality
const ratingStars = document.querySelectorAll(".rating-star");
const ratingValue = document.getElementById("ratingValue");

ratingStars.forEach((star, index) => {
    star.addEventListener("click", () => {
        // Set the rating value
        const selectedRating = index + 1;
        ratingValue.textContent = "Rating: " + selectedRating;

        // Save the rating in localStorage
        localStorage.setItem("userRating", selectedRating);

        // Highlight the selected stars
        ratingStars.forEach((s, i) => {
            if (i < selectedRating) {
                s.classList.add("selected");
            } else {
                s.classList.remove("selected");
            }
        });
    });
});

// Load saved rating when the page loads
const savedRating = localStorage.getItem("userRating");
if (savedRating) {
    ratingValue.textContent = "Rating: " + savedRating;
    ratingStars.forEach((star, index) => {
        if (index < savedRating) {
            star.classList.add("selected");
        }
    });
}


  const slider = document.getElementById("slider");
  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");

  const slides = slider.children;
  const totalSlides = slides.length;

  let currentSlide = 0;

  function updateSlide() {
    const slideWidth = slides[0].offsetWidth;
    slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  }

  nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlide();
  });

  prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlide();
  });

  window.addEventListener("resize", updateSlide); // Keeps layout responsive

  updateSlide(); // Initial setup



function darkMood() {
    let element = document.getElementById("body");
    element.classList.toggle("cls");
  };

const searchButton = document.getElementById("search");

searchButton.addEventListener("click",() => {
    alert("Search button clicked!");
});


function validateForm() {
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const confirmPassword = document.getElementById('confirmPassword');

    const usernameValid = check(username.value, 'username', /^[a-zA-Z0-9]{3,15}$/, 'Username must be 3-15 alphanumeric characters.');
    const emailValid = check(email.value, 'email', /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Enter a valid email address.');
    const passwordValid = check(passwordField.value, 'password',/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,'Password must be at least 8 characters with letters and numbers.');
    const confirmPasswordValid = check(confirmPassword.value, 'confirmPassword', new RegExp(`^${passwordField.value}$`), 'Passwords do not match.');

    if (usernameValid && emailValid && passwordValid && confirmPasswordValid) {
        saveToLocal();
        alert('Registration successful!');
    } else {
        scrollToFirstError();
    }
}



// const reviewForm = document.getElementById("reviewForm");
// const reviewText = document.getElementById("reviewText");
// const output = document.getElementById("output");

// reviewForm.addEventListener("submit", (event) => {
//     event.preventDefault();

//     if (selectedRating === 0 || reviewText.value.trim() === "") {
//         alert("Please select a rating and write a review.");
//         return;
//     }

//     output.innerHTML = `
//         <p><strong>Your Rating:</strong> ${"⭐".repeat(selectedRating)}</p>
//         <p><strong>Your Review:</strong> ${reviewText.value.trim()}</p>
//     `;

    // Reset form
//     reviewText.value = "";
//     selectedRating = 0;
//     updateStars(0);
// });
let autoSlideIndex = 0;

function autoSlide() {
    const slides = slider.children;
    const totalSlides = slides.length;
    autoSlideIndex = (autoSlideIndex + 1) % totalSlides;
    slider.style.transform = `translateX(-${autoSlideIndex * 100}%)`;
}

setInterval(autoSlide, 3000); // Change slide every 3 seconds



let selectedRating = 0;

// Handle star hover and click
const stars = document.querySelectorAll(".star");

stars.forEach((star) => {
  star.addEventListener("click", () => {
    selectedRating = parseInt(star.getAttribute("data-value"));
    updateStarColors(selectedRating);
  });
});

function updateStarColors(rating) {
  stars.forEach((star, index) => {
    if (index < rating) {
      star.classList.remove("text-gray-300");
      star.classList.add("text-yellow-400");
    } else {
      star.classList.add("text-gray-300");
      star.classList.remove("text-yellow-400");
    }
  });
}

function submitReview() {
  const reviewText = document.getElementById("reviewText").value.trim();
  const output = document.getElementById("output");

  if (selectedRating === 0 || reviewText === "") {
    output.innerHTML = `<p class="text-red-600">Please provide a star rating and a review.</p>`;
    return;
  }

  output.innerHTML = `
    <h3 class="font-semibold">Your Review:</h3>
    <p><strong>Rating:</strong> ${selectedRating} star${selectedRating > 1 ? 's' : ''}</p>
    <p><strong>Review:</strong> ${reviewText}</p>
  `;

  // Reset form
  document.getElementById("reviewText").value = "";
  selectedRating = 0;
  updateStarColors(selectedRating);
}




document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function(event) {
        if (this.textContent.trim() === 'BUY') {
            alert('Redirecting to payment method...');
            // You can replace the alert with actual redirection or modal logic
            window.location.href = '/payment-method.html'; // Example redirection
        }
    });
});


document.getElementById("search").addEventListener("click", function () {
    const query = document.querySelector("input[type='text']").value.trim();

    if (query === "") {
      alert("Please enter a book title to search.");
      return;
    }

    // For now, we'll log the query. You can connect this to a backend or filter a book list later.
    alert("Searching for:", query);

    // Optionally display the search term
    let resultDiv = document.getElementById("search-result");
    if (resultDiv) {
      resultDiv.innerHTML = `<p class="text-white mt-4">You searched for: <strong>${query}</strong></p>`;
    }
  });