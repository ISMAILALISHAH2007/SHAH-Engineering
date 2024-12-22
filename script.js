document.addEventListener('DOMContentLoaded', () => {
    const cart = [];

    // Function to update the cart display
    function updateCart() {
        const cartElement = document.getElementById('cart');
        if (cart.length === 0) {
            cartElement.innerHTML = '<li>Your cart is empty.</li>';
        } else {
            cartElement.innerHTML = cart.map(item => 
                `<li>${item.name} - $${item.price}</li>`
            ).join('');
        }
        
        // Update the total price in the cart
        const totalElement = document.getElementById('total');
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        totalElement.textContent = `Total: $${total}`;
    }

    // Function to show/hide the cart
    function showCart() {
        const cartContainer = document.querySelector('.cart-container');
        cartContainer.classList.toggle('hidden');
    }

    // Add event listeners to add-to-cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const product = button.getAttribute('data-product');
            const price = button.getAttribute('data-price');
            cart.push({ name: product, price: parseInt(price) });
            alert(`${product} has been added to your cart.`);
            updateCart();
        });
    });

    // Toggle cart visibility
    document.getElementById('toggle-cart').addEventListener('click', showCart);

    // Checkout button action
    document.getElementById('checkout-btn').addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Your cart is empty! Please add products before proceeding to checkout.');
            return;
        }
        
        // Simulate a simple checkout process
        const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);
        const cartItems = cart.map(item => `${item.name} - $${item.price}`).join('\n');
        
        const checkoutMessage = `
            Proceeding to checkout...\n
            Cart items:\n
            ${cartItems}\n
            Total amount: $${totalAmount}
        `;
        
        alert(checkoutMessage);

        // Clear the cart after checkout
        cart.length = 0; // Empty the cart
        updateCart(); // Update the cart UI
    });

    // Initial cart update on page load
    updateCart();
});

    // Event listener for form submission (contact form)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for contacting us. We will get back to you soon!');
            contactForm.reset();
        });
    }

    // Event listener for custom order form submission
    const customOrderForm = document.getElementById('custom-order-form');
    if (customOrderForm) {
        customOrderForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Your custom generator order has been submitted!');
            customOrderForm.reset();
        });
    }

    // Function to handle form validation (if needed)
    function validateForm(form) {
        const inputs = form.querySelectorAll('input, textarea');
        let valid = true;
        inputs.forEach(input => {
            if (!input.value.trim()) {
                valid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });
        return valid;
    }

    // Adding a validation on form submit (optional)
    if (contactForm || customOrderForm) {
        const forms = [contactForm, customOrderForm].filter(form => form !== null);
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                if (!validateForm(form)) {
                    alert('Please fill out all fields.');
                    e.preventDefault();
                }
            });
        });
    }

    // 