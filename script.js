// ==========================================================================
// CORE LAYOUT INTERACTION
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    initMobileNav();
    initFAQDropdowns();
    initContactForm();
});

/**
 * Mobile Navigation Toggle
 */
function initMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.innerHTML = navMenu.classList.contains('active') ? '&#x2715;' : '&#x2630;';
        });
        
        // Close menu when clicking a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.innerHTML = '&#x2630;';
            });
        });
    }
}

/**
 * FAQ Collapsible Accordions
 */
function initFAQDropdowns() {
    const faqHeaders = document.querySelectorAll('.faq-header');
    
    faqHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const currentItem = header.parentElement;
            const isOpen = currentItem.classList.contains('active');
            
            // Close all items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Toggle current item
            if (!isOpen) {
                currentItem.classList.add('active');
            }
        });
    });
}

/**
 * Contact Form Validation and Processing
 */
function initContactForm() {
    const contactForm = document.getElementById('konfyContactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('formName').value.trim();
            const message = document.getElementById('formMessage').value.trim();
            
            if(!name || !message) {
                alert('Please fill out all required fields.');
                return;
            }
            
            // Redirect message seamlessly to business WhatsApp channel
            const businessPhone = "2347044792858";
            const encodedText = encodeURIComponent(`Hello KonfyHairs, my name is ${name}.\n\n${message}`);
            const whatsappUrl = `https://wa.me/${businessPhone}?text=${encodedText}`;
            
            window.open(whatsappUrl, '_blank');
        });
    }
}

// ==========================================================================
// BUSINESS & ORDER LOGIC
// ==========================================================================

/**
 * Generates instant WhatsApp order message API links for standard conversion
 */
function buildWhatsAppOrder(productName, price) {
    const businessPhone = "2347044792858";
    const textMessage = `Hello KonfyHairs, I would like to place an order for the following item:\n\n✨ Product: ${productName}\n💰 Price: ${price}\n\nPlease confirm availability.`;
    return `https://wa.me/${businessPhone}?text=${encodeURIComponent(textMessage)}`;
}

/**
 * Helper function invoked dynamically by view action blocks
 */
function orderProduct(name, price) {
    const orderUrl = buildWhatsAppOrder(name, price);
    window.open(orderUrl, '_blank');
}
