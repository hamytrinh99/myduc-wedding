document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const closedCard = document.getElementById('closedCard');
    const openedCard = document.getElementById('openedCard');
    const openFormBtn = document.getElementById('openFormBtn');
    const closeFormBtn = document.getElementById('closeFormBtn');
    const rsvpSection = document.getElementById('rsvpSection');
    const rsvpForm = document.getElementById('rsvpForm');
    const successMessage = document.getElementById('successMessage');
    const viewMapBtn = document.getElementById('viewMapBtn');
    const mapButton = document.getElementById('mapButton');
    const mapModal = document.getElementById('mapModal');
    const closeMapBtn = document.getElementById('closeMapBtn');
    const closeCardBtn = document.getElementById('closeCardBtn');
    const musicToggle = document.getElementById('musicToggle');
    const backgroundMusic = document.getElementById('backgroundMusic');
    const guestCount = document.getElementById('guestCount');
    const minusBtn = document.querySelector('.minus-btn');
    const plusBtn = document.querySelector('.plus-btn');
    const guestCountGroup = document.getElementById('guestCountGroup');
    const guestNameInput = document.getElementById('guestNameInput');
    const displayGuestName = document.getElementById('displayGuestName');
    
    // Get guest name from URL
    const urlParams = new URLSearchParams(window.location.search);
    const guestName = urlParams.get('name');
    
    // Set guest name if provided in URL
    if (guestName) {
        const decodedName = decodeURIComponent(guestName);
        displayGuestName.textContent = decodedName;
        guestNameInput.value = decodedName;
    } else {
        // If no name in URL, show generic text
        displayGuestName.textContent = "Quý khách";
        guestNameInput.value = "Quý khách";
    }
    
    // Open card animation
    closedCard.addEventListener('click', function() {
        // Add opening animation
        closedCard.style.transform = 'rotateY(-180deg)';
        closedCard.style.opacity = '0';
        
        // Show opened card after delay
        setTimeout(() => {
            closedCard.style.display = 'none';
            openedCard.style.display = 'block';
            
            // Animate content appearance
            const pages = document.querySelectorAll('.page');
            pages.forEach((page, index) => {
                page.style.animationDelay = `${index * 0.2}s`;
                page.style.animation = 'openCardContent 0.8s ease-out forwards';
            });
        }, 500);
    });
    
    // Close card animation
    closeCardBtn.addEventListener('click', function() {
        // Hide opened card
        openedCard.style.display = 'none';
        
        // Reset and show closed card
        closedCard.style.display = 'block';
        setTimeout(() => {
            closedCard.style.transform = 'rotateY(0deg)';
            closedCard.style.opacity = '1';
        }, 50);
    });
    
    // Open RSVP form
    openFormBtn.addEventListener('click', function() {
        rsvpSection.style.display = 'block';
        rsvpForm.style.display = 'block';
        successMessage.style.display = 'none';
        
        // Smooth scroll to form
        rsvpSection.scrollIntoView({ behavior: 'smooth' });
    });
    
    // Close RSVP form
    closeFormBtn.addEventListener('click', function() {
        rsvpSection.style.display = 'none';
    });
    
    // Handle attendance selection
    const attendanceRadios = document.querySelectorAll('input[name="attendance"]');
    attendanceRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.value === 'yes') {
                guestCountGroup.style.display = 'block';
            } else {
                guestCountGroup.style.display = 'none';
            }
        });
    });
    
    // Handle guest count buttons
    minusBtn.addEventListener('click', function() {
        let currentValue = parseInt(guestCount.value);
        if (currentValue > 1) {
            guestCount.value = currentValue - 1;
        }
    });
    
    plusBtn.addEventListener('click', function() {
        let currentValue = parseInt(guestCount.value);
        if (currentValue < 10) {
            guestCount.value = currentValue + 1;
        }
    });
    
    // Handle form submission
    rsvpForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = {
            guest_name: formData.get('guest_name'),
            attendance: formData.get('attendance'),
            guest_count: formData.get('guest_count'),
            message: formData.get('message'),
            timestamp: new Date().toISOString()
        };
        
        // Show loading (simulated)
        showLoading();
        
        // Simulate API call
        setTimeout(() => {
            // Save to Google Sheets (you'll need to set up Google Apps Script)
            saveToGoogleSheets(data);
            
            // Hide loading
            hideLoading();
            
            // Show success message
            rsvpForm.style.display = 'none';
            successMessage.style.display = 'block';
            
            // Reset form after 3 seconds
            setTimeout(() => {
                rsvpSection.style.display = 'none';
                rsvpForm.reset();
                rsvpForm.style.display = 'block';
                successMessage.style.display = 'none';
            }, 3000);
        }, 1500);
    });
    
    // Open map modal
    function openMapModal() {
        mapModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
    
    viewMapBtn.addEventListener('click', openMapModal);
    mapButton.addEventListener('click', openMapModal);
    
    // Close map modal
    closeMapBtn.addEventListener('click', function() {
        mapModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside
    mapModal.addEventListener('click', function(e) {
        if (e.target === mapModal) {
            mapModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Music toggle
    let musicPlaying = false;
    
    musicToggle.addEventListener('click', function() {
        if (musicPlaying) {
            backgroundMusic.pause();
            musicToggle.innerHTML = '<i class="fas fa-music"></i><span>Nhạc nền</span>';
            musicPlaying = false;
        } else {
            backgroundMusic.play().catch(e => {
                console.log("Autoplay prevented. User interaction required.");
                // Show alert for user to interact first
                alert('Vui lòng ấn nút này một lần nữa để bật nhạc nền.');
            });
            musicToggle.innerHTML = '<i class="fas fa-volume-up"></i><span>Tắt nhạc</span>';
            musicPlaying = true;
        }
    });
    
    // Auto-play music on first interaction
    document.addEventListener('click', function initMusic() {
        if (!musicPlaying) {
            backgroundMusic.volume = 0.5;
            musicPlaying = true;
            document.removeEventListener('click', initMusic);
        }
    }, { once: true });
    
    // Add floating particles
    function createFloatingParticles() {
        const container = document.querySelector('.ghibli-background');
        
        for (let i = 0; i < 15; i++) {
            const particle = document.createElement('div');
            particle.classList.add('sparkle');
            
            // Random position
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            
            // Random size
            const size = Math.random() * 8 + 4;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            // Random animation delay
            particle.style.animationDelay = `${Math.random() * 5}s`;
            
            container.appendChild(particle);
        }
    }
    
    // Create particles on load
    createFloatingParticles();
    
    // Loading functions
    function showLoading() {
        // Create loading element if it doesn't exist
        let loadingEl = document.querySelector('.loading');
        if (!loadingEl) {
            loadingEl = document.createElement('div');
            loadingEl.className = 'loading';
            loadingEl.innerHTML = `
                <div class="loading-spinner"></div>
                <p>Đang gửi phản hồi...</p>
            `;
            document.body.appendChild(loadingEl);
        }
        loadingEl.style.display = 'flex';
    }
    
    function hideLoading() {
        const loadingEl = document.querySelector('.loading');
        if (loadingEl) {
            loadingEl.style.display = 'none';
        }
    }
    
    // Save to Google Sheets function
    function saveToGoogleSheets(data) {
        // This is where you would connect to Google Apps Script
        // For now, we'll log the data and provide instructions
        
        console.log('Data to save to Google Sheets:', data);
        console.log('---');
        console.log('Để kết nối với Google Sheets:');
        console.log('1. Tạo Google Apps Script từ script.google.com');
        console.log('2. Deploy as Web App');
        console.log('3. Thay thế URL trong code bằng URL của bạn');
        console.log('4. Uncomment fetch code trong hàm saveToGoogleSheets');
        
        // Example fetch code (uncomment and add your Google Apps Script URL):
        /*
        const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
        
        fetch(scriptURL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message));
        */
        
        // For now, save to localStorage as backup
        try {
            let responses = JSON.parse(localStorage.getItem('wedding_responses')) || [];
            responses.push(data);
            localStorage.setItem('wedding_responses', JSON.stringify(responses));
            console.log('Saved to localStorage as backup');
        } catch (e) {
            console.log('Could not save to localStorage');
        }
    }
    
    // Initialize
    console.log('Thiệp mời cưới Hà My & Trung Đức đã sẵn sàng!');
    console.log('Tên khách từ URL:', guestName || 'Không có');
    
    // Add some interactive effects
    const hearts = document.querySelectorAll('.fa-heart');
    hearts.forEach(heart => {
        heart.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.3)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        heart.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});
