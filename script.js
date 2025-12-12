/* ===== RESET & BASE STYLES ===== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Cormorant Garamond', serif;
    background: linear-gradient(135deg, #e8f4f8 0%, #f0f8ff 50%, #e6f0fa 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #1a365d;
    position: relative;
    overflow-x: hidden;
    line-height: 1.6;
}

/* ===== BACKGROUND ANIMATION ===== */
.background-animation {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: none;
}

.particle {
    position: absolute;
    background: linear-gradient(45deg, #6a8caf, #8aa8c9);
    border-radius: 50%;
    opacity: 0.15;
    animation: float 20s infinite linear;
}

.particle:nth-child(1) {
    width: 80px;
    height: 80px;
    top: 10%;
    left: 10%;
    animation-delay: 0s;
    background: linear-gradient(45deg, #6a8caf, #8aa8c9);
}

.particle:nth-child(2) {
    width: 60px;
    height: 60px;
    top: 70%;
    left: 80%;
    animation-delay: 5s;
    background: linear-gradient(45deg, #8aa8c9, #a8c6e3);
}

.particle:nth-child(3) {
    width: 100px;
    height: 100px;
    top: 40%;
    left: 20%;
    animation-delay: 10s;
    background: linear-gradient(45deg, #a8c6e3, #c6d8f0);
}

.particle:nth-child(4) {
    width: 50px;
    height: 50px;
    top: 80%;
    left: 40%;
    animation-delay: 15s;
    background: linear-gradient(45deg, #8aa8c9, #6a8caf);
}

@keyframes float {
    0% {
        transform: translateY(0) rotate(0deg);
    }
    25% {
        transform: translateY(-20px) rotate(90deg);
    }
    50% {
        transform: translateY(0) rotate(180deg);
    }
    75% {
        transform: translateY(20px) rotate(270deg);
    }
    100% {
        transform: translateY(0) rotate(360deg);
    }
}

/* ===== CARD CONTAINER ===== */
.card-wrapper {
    width: 100%;
    max-width: 900px;
    margin: 20px;
    perspective: 1500px;
}

/* ===== CLOSED CARD ===== */
.invitation-card.closed-card {
    background: linear-gradient(145deg, #ffffff, #f8fbff);
    border-radius: 4px;
    box-shadow: 
        0 10px 40px rgba(26, 54, 93, 0.15),
        0 2px 8px rgba(26, 54, 93, 0.08),
        inset 0 1px 0 rgba(255, 255, 255, 0.8);
    padding: 40px 30px;
    cursor: pointer;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    transform-style: preserve-3d;
    transform-origin: center left;
    border: 1px solid rgba(106, 140, 175, 0.1);
}

.invitation-card.closed-card:hover {
    transform: translateY(-5px);
    box-shadow: 
        0 15px 50px rgba(26, 54, 93, 0.2),
        0 4px 12px rgba(26, 54, 93, 0.12),
        inset 0 1px 0 rgba(255, 255, 255, 0.8);
}

.card-inner {
    position: relative;
    z-index: 2;
}

/* Decorative corners */
.decor-corner {
    position: absolute;
    width: 40px;
    height: 40px;
}

.decor-corner.tl {
    top: 15px;
    left: 15px;
}

.decor-corner.tr {
    top: 15px;
    right: 15px;
    transform: rotate(90deg);
}

.decor-corner.bl {
    bottom: 15px;
    left: 15px;
    transform: rotate(-90deg);
}

.decor-corner.br {
    bottom: 15px;
    right: 15px;
    transform: rotate(180deg);
}

.decor-line {
    position: absolute;
    width: 20px;
    height: 1px;
    background: #8a6bc9;
    top: 20px;
    left: 0;
}

.decor-dot {
    position: absolute;
    width: 6px;
    height: 6px;
    background: #8a6bc9;
    border-radius: 50%;
    top: 17px;
    left: 22px;
}

/* RIBBON TIM Header */
.ribbon-header {
    text-align: center;
    margin-bottom: 40px;
}

.ribbon-text {
    font-family: 'Playfair Display', serif;
    font-size: 18px;
    letter-spacing: 8px;
    color: #4a6fa5;
    margin-bottom: 8px;
    font-weight: 600;
}

.ribbon-char {
    display: inline-block;
    animation: charFloat 3s ease-in-out infinite;
}

.ribbon-char:nth-child(1) { animation-delay: 0.1s; }
.ribbon-char:nth-child(2) { animation-delay: 0.2s; }
.ribbon-char:nth-child(3) { animation-delay: 0.3s; }
.ribbon-char:nth-child(4) { animation-delay: 0.4s; }
.ribbon-char:nth-child(5) { animation-delay: 0.5s; }
.ribbon-char:nth-child(6) { animation-delay: 0.6s; }
.ribbon-char:nth-child(8) { animation-delay: 0.7s; }
.ribbon-char:nth-child(9) { animation-delay: 0.8s; }
.ribbon-char:nth-child(10) { animation-delay: 0.9s; }

.ribbon-line {
    width: 120px;
    height: 1px;
    background: linear-gradient(90deg, transparent, #4a6fa5, transparent);
    margin: 0 auto;
}

@keyframes charFloat {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-3px);
    }
}

/* Wedding heading */
.wedding-heading {
    text-align: center;
    margin-bottom: 40px;
}

.heading-main {
    font-family: 'Playfair Display', serif;
    font-size: 42px;
    font-weight: 400;
    color: #1a365d;
    letter-spacing: -1px;
    line-height: 1.1;
    margin-bottom: 10px;
}

.heading-underline {
    width: 80px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #8a6bc9, transparent);
    margin: 0 auto;
}

/* Center quote with code style */
.center-quote {
    margin: 50px 0;
    text-align: center;
}

.code-container {
    font-family: 'Source Code Pro', monospace;
    font-size: 18px;
    padding: 25px 40px;
    background: rgba(138, 107, 201, 0.05);
    border: 1px solid rgba(138, 107, 201, 0.2);
    border-radius: 8px;
    display: inline-block;
    position: relative;
    color: #1a365d;
}

.code-keyword {
    color: #4a6fa5;
    font-weight: 600;
}

.code-operator {
    color: #8a6bc9;
    margin: 0 8px;
}

.code-string {
    color: #6a8caf;
    font-style: italic;
}

.code-semicolon {
    color: #8a6bc9;
}

/* Bottom decoration */
.bottom-decoration {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin: 40px 0 30px;
}

.flower-icon {
    font-size: 20px;
    color: #8a6bc9;
    opacity: 0.7;
    animation: flowerRotate 4s ease-in-out infinite;
}

.flower-icon:nth-child(2) { animation-delay: 0.5s; }
.flower-icon:nth-child(3) { animation-delay: 1s; }

@keyframes flowerRotate {
    0%, 100% {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(180deg);
    }
}

/* Open hint */
.open-hint {
    text-align: center;
    margin-top: 30px;
    color: #4a6fa5;
    font-size: 14px;
    letter-spacing: 2px;
}

.arrow-down {
    margin-top: 10px;
    font-size: 20px;
    color: #8a6bc9;
    animation: bounce 2s infinite;
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-10px);
    }
    60% {
        transform: translateY(-5px);
    }
}

/* ===== OPENED CARD ===== */
.invitation-card.opened-card {
    display: none;
}

.card-inner.opened {
    display: flex;
    min-height: 650px;
    background: linear-gradient(145deg, #ffffff, #f8fbff);
    border-radius: 4px;
    box-shadow: 
        0 20px 60px rgba(26, 54, 93, 0.2),
        0 4px 16px rgba(26, 54, 93, 0.1);
    overflow: hidden;
    border: 1px solid rgba(106, 140, 175, 0.1);
}

/* Card pages */
.card-page {
    flex: 1;
    padding: 40px;
    position: relative;
}

.left-page {
    border-right: 1px solid rgba(138, 107, 201, 0.2);
    background: linear-gradient(to right, #ffffff, #fafcff);
}

.right-page {
    background: linear-gradient(to left, #ffffff, #fafcff);
}

.page-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

/* Inside ribbon header */
.ribbon-header.inside {
    margin-bottom: 30px;
}

.ribbon-header.inside .ribbon-text {
    font-size: 16px;
    letter-spacing: 6px;
    color: #4a6fa5;
}

.ribbon-header.inside .ribbon-line {
    width: 100px;
    background: linear-gradient(90deg, transparent, #8a6bc9, transparent);
}

/* Formal invitation */
.formal-invitation {
    text-align: center;
}

.invite-title {
    font-family: 'Playfair Display', serif;
    font-size: 24px;
    color: #1a365d;
    margin-bottom: 30px;
    letter-spacing: 3px;
    font-weight: 600;
}

/* Guest section */
.guest-section {
    margin-bottom: 40px;
}

.guest-label {
    font-size: 16px;
    color: #4a6fa5;
    margin-bottom: 8px;
    letter-spacing: 2px;
}

.guest-name {
    font-family: 'Playfair Display', serif;
    font-size: 36px;
    color: #8a6bc9;
    padding: 15px 30px;
    background: rgba(138, 107, 201, 0.08);
    border-radius: 8px;
    border: 1px solid rgba(138, 107, 201, 0.3);
    min-height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
}

/* Couple section */
.couple-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 40px 0;
    gap: 30px;
}

.bride-side, .groom-side {
    flex: 1;
    text-align: center;
}

.role-label {
    font-size: 12px;
    color: #4a6fa5;
    letter-spacing: 3px;
    margin-bottom: 10px;
    text-transform: uppercase;
}

.name-large {
    font-family: 'Playfair Display', serif;
    font-size: 32px;
    color: #1a365d;
    margin: 10px 0;
    font-weight: 600;
}

.parents {
    font-size: 14px;
    color: #6a8caf;
    line-height: 1.4;
    margin-top: 10px;
}

.heart-connection {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
}

.heart-icon {
    color: #8a6bc9;
    font-size: 20px;
    animation: heartbeat 1.5s ease-in-out infinite;
}

.heart-icon:nth-child(3) {
    animation-delay: 0.5s;
}

.and-text {
    font-family: 'Playfair Display', serif;
    font-size: 18px;
    color: #4a6fa5;
    font-style: italic;
}

@keyframes heartbeat {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.2);
    }
}

/* Code decoration */
.code-decoration {
    background: rgba(138, 107, 201, 0.05);
    border: 1px solid rgba(138, 107, 201, 0.2);
    border-radius: 8px;
    padding: 20px;
    margin-top: 40px;
    font-family: 'Source Code Pro', monospace;
    font-size: 16px;
    color: #1a365d;
}

.code-line {
    margin: 5px 0;
}

.indent {
    padding-left: 20px;
}

.code-func {
    color: #4a6fa5;
    font-weight: 600;
}

.code-key {
    color: #8a6bc9;
}

.code-str {
    color: #6a8caf;
}

/* Right page details */
.details-section {
    height: 100%;
}

.details-title {
    font-family: 'Playfair Display', serif;
    font-size: 20px;
    color: #1a365d;
    text-align: center;
    margin-bottom: 40px;
    letter-spacing: 2px;
    position: relative;
}

.details-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #8a6bc9, transparent);
}

.detail-item {
    display: flex;
    align-items: center;
    margin-bottom: 25px;
    padding: 15px;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 8px;
    border: 1px solid rgba(106, 140, 175, 0.1);
    transition: all 0.3s ease;
}

.detail-item:hover {
    transform: translateX(5px);
    border-color: rgba(138, 107, 201, 0.3);
    box-shadow: 0 5px 15px rgba(138, 107, 201, 0.1);
}

.detail-icon {
    width: 40px;
    height: 40px;
    background: linear-gradient(45deg, #8a6bc9, #a08bd4);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
    color: white;
    flex-shrink: 0;
}

.detail-text {
    flex: 1;
}

.detail-label {
    font-size: 12px;
    color: #4a6fa5;
    letter-spacing: 2px;
    margin-bottom: 5px;
    text-transform: uppercase;
}

.detail-value {
    font-size: 16px;
    color: #1a365d;
    line-height: 1.4;
}

.map-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 15px;
    background: linear-gradient(45deg, #6a8caf, #8aa8c9);
    color: white;
    border-radius: 8px;
    margin-top: 30px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
}

.map-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(106, 140, 175, 0.3);
    background: linear-gradient(45deg, #8aa8c9, #a8c6e3);
}

.map-button i {
    font-size: 18px;
}

/* ===== RSVP CONTAINER ===== */
.rsvp-container {
    background: white;
    border-radius: 8px;
    padding: 30px;
    margin-top: 40px;
    box-shadow: 0 10px 30px rgba(26, 54, 93, 0.1);
    border: 1px solid rgba(138, 107, 201, 0.2);
    display: none;
}

.rsvp-header {
    text-align: center;
    margin-bottom: 30px;
}

.rsvp-header h3 {
    font-family: 'Playfair Display', serif;
    font-size: 24px;
    color: #1a365d;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.rsvp-header p {
    color: #6a8caf;
    font-size: 16px;
}

/* Form sections */
.form-section {
    margin-bottom: 25px;
}

.section-label {
    display: block;
    margin-bottom: 10px;
    color: #4a6fa5;
    font-weight: 600;
    font-size: 16px;
}

.attendance-options {
    display: flex;
    gap: 20px;
    justify-content: center;
}

.option-item input {
    display: none;
}

.option-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    min-width: 150px;
    border: 2px solid transparent;
    background: rgba(255, 255, 255, 0.7);
}

.option-box.yes {
    border-color: #8a6bc9;
    color: #8a6bc9;
}

.option-box.no {
    border-color: #6a8caf;
    color: #6a8caf;
}

.option-box i {
    font-size: 24px;
    margin-bottom: 10px;
}

.option-item input:checked + .option-box {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.option-box.yes:hover, .option-box.no:hover {
    transform: translateY(-3px);
}

/* Number selector */
.number-selector {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

.number-btn {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    background: linear-gradient(45deg, #8a6bc9, #a08bd4);
    color: white;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}

.number-btn:hover {
    transform: scale(1.1);
    box-shadow: 0 5px 15px rgba(138, 107, 201, 0.3);
}

#guestCount {
    width: 60px;
    height: 40px;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    border: 2px solid #8a6bc9;
    border-radius: 8px;
    background: rgba(138, 107, 201, 0.05);
    color: #1a365d;
}

/* Textarea */
textarea {
    width: 100%;
    padding: 15px;
    border: 2px solid rgba(138, 107, 201, 0.3);
    border-radius: 8px;
    font-family: 'Cormorant Garamond', serif;
    font-size: 16px;
    resize: vertical;
    min-height: 100px;
    background: rgba(255, 255, 255, 0.7);
    color: #1a365d;
    transition: all 0.3s ease;
}

textarea:focus {
    outline: none;
    border-color: #8a6bc9;
    box-shadow: 0 0 0 3px rgba(138, 107, 201, 0.1);
}

/* Form actions */
.form-actions {
    display: flex;
    gap: 15px;
    justify-content: center;
    margin-top: 30px;
}

.submit-btn, .cancel-btn {
    padding: 12px 30px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: all 0.3s ease;
}

.submit-btn {
    background: linear-gradient(45deg, #8a6bc9, #a08bd4);
    color: white;
}

.cancel-btn {
    background: rgba(106, 140, 175, 0.1);
    color: #4a6fa5;
    border: 2px solid rgba(106, 140, 175, 0.3);
}

.submit-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(138, 107, 201, 0.3);
}

.cancel-btn:hover {
    transform: translateY(-3px);
    background: rgba(106, 140, 175, 0.2);
}

/* Success message */
.success-message {
    text-align: center;
    padding: 40px;
    display: none;
}

.success-icon {
    font-size: 60px;
    color: #8a6bc9;
    margin-bottom: 20px;
}

.success-message h4 {
    font-size: 28px;
    color: #1a365d;
    margin-bottom: 15px;
    font-family: 'Playfair Display', serif;
}

.success-message p {
    font-size: 18px;
    color: #6a8caf;
    margin-bottom: 10px;
}

.success-note {
    color: #8a6bc9 !important;
    font-weight: 600;
    font-style: italic;
}

/* ===== ACTION BUTTONS ===== */
.action-buttons {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 30px;
}

.action-btn {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 25px;
    background: linear-gradient(45deg, #6a8caf, #8aa8c9);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.action-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(106, 140, 175, 0.3);
}

.action-btn:nth-child(1) {
    background: linear-gradient(45deg, #8a6bc9, #a08bd4);
}

.action-btn:nth-child(2) {
    background: linear-gradient(45deg, #6a8caf, #8aa8c9);
}

.action-btn:nth-child(3) {
    background: linear-gradient(45deg, #4a6fa5, #6a8caf);
}

/* ===== MODAL ===== */
.modal-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(26, 54, 93, 0.9);
    z-index: 1000;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(5px);
}

.modal-content {
    background: white;
    border-radius: 12px;
    width: 90%;
    max-width: 600px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    animation: modalSlide 0.3s ease-out;
}

@keyframes modalSlide {
    from {
        transform: translateY(-50px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.modal-header {
    background: linear-gradient(45deg, #6a8caf, #8aa8c9);
    color: white;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.modal-header h3 {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: 'Playfair Display', serif;
    font-size: 20px;
}

.modal-close {
    background: none;
    border: none;
    color: white;
    font-size: 28px;
    cursor: pointer;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.3s ease;
}

.modal-close:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: rotate(90deg);
}

.modal-body {
    padding: 20px;
}

.map-wrapper {
    border-radius: 8px;
    overflow: hidden;
}

.venue-details {
    background: rgba(138, 107, 201, 0.05);
    padding: 20px;
    border-radius: 8px;
    margin-top: 20px;
    border: 1px solid rgba(138, 107, 201, 0.2);
}

.venue-details h4 {
    color: #1a365d;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: 'Playfair Display', serif;
}

.venue-details p {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 10px 0;
    color: #4a6fa5;
}

.venue-details i {
    color: #8a6bc9;
    width: 20px;
}

/* ===== MUSIC CONTROL ===== */
.music-control {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 100;
}

#musicToggle {
    background: linear-gradient(45deg, #8a6bc9, #a08bd4);
    color: white;
    border: none;
    border-radius: 50px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    box-shadow: 0 5px 15px rgba(138, 107, 201, 0.3);
    transition: all 0.3s ease;
    font-weight: 600;
}

#musicToggle:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 20px rgba(138, 107, 201, 0.4);
}

/* ===== RESPONSIVE DESIGN ===== */
@media (max-width: 768px) {
    .card-wrapper {
        margin: 10px;
    }
    
    .invitation-card.closed-card {
        padding: 25px 20px;
    }
    
    .heading-main {
        font-size: 32px;
    }
    
    .code-container {
        font-size: 14px;
        padding: 20px;
    }
    
    .card-inner.opened {
        flex-direction: column;
        min-height: auto;
    }
    
    .card-page {
        padding: 25px;
    }
    
    .left-page {
        border-right: none;
        border-bottom: 1px solid rgba(138, 107, 201, 0.2);
    }
    
    .couple-section {
        flex-direction: column;
        gap: 20px;
    }
    
    .name-large {
        font-size: 28px;
    }
    
    .guest-name {
        font-size: 28px;
        padding: 10px 20px;
        min-height: 60px;
    }
    
    .attendance-options {
        flex-direction: column;
    }
    
    .option-box {
        min-width: 100%;
    }
    
    .action-buttons {
        flex-direction: column;
        align-items: center;
    }
    
    .action-btn {
        width: 100%;
        max-width: 300px;
        justify-content: center;
    }
    
    .form-actions {
        flex-direction: column;
    }
    
    .submit-btn, .cancel-btn {
        justify-content: center;
    }
}

/* ===== LOADING STATE ===== */
.loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.95);
    z-index: 10000;
    display: none;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
}

.loading-spinner {
    width: 50px;
    height: 50px;
    border: 4px solid rgba(138, 107, 201, 0.2);
    border-top: 4px solid #8a6bc9;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* ===== PRINT STYLES ===== */
@media print {
    .action-buttons,
    .music-control,
    .rsvp-container,
    .open-hint,
    .modal-overlay {
        display: none !important;
    }
    
    body {
        background: white !important;
    }
    
    .invitation-card {
        box-shadow: none !important;
        break-inside: avoid;
    }
}
