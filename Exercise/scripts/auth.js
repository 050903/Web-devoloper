// Hiển thị/ẩn mật khẩu
function setupPasswordToggle() {
    const toggleElements = document.querySelectorAll('.password-toggle');
    
    toggleElements.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const input = this.parentElement.querySelector('input');
            const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
            input.setAttribute('type', type);
            this.classList.toggle('fa-eye-slash');
        });
    });
}

// Hiển thị thông báo
function showAlert(message, type) {
    // Xóa thông báo cũ nếu có
    const oldAlert = document.querySelector('.alert');
    if (oldAlert) {
        oldAlert.remove();
    }
    
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    
    let icon;
    if (type === 'success') {
        icon = '<i class="fas fa-check-circle"></i>';
    } else if (type === 'error') {
        icon = '<i class="fas fa-exclamation-circle"></i>';
    } else {
        icon = '<i class="fas fa-info-circle"></i>';
    }
    
    alertDiv.innerHTML = `${icon} ${message}`;
    
    const form = document.querySelector('form');
    if (form) {
        form.prepend(alertDiv);
    } else {
        document.querySelector('.auth-body').prepend(alertDiv);
    }
    
    // Tự động ẩn thông báo sau 3 giây
    setTimeout(() => {
        alertDiv.style.opacity = '0';
        setTimeout(() => {
            alertDiv.remove();
        }, 300);
    }, 3000);
}

// Kiểm tra độ mạnh mật khẩu
function checkPasswordStrength(password) {
    let strength = 0;
    
    if (password.length >= 8) strength++;
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++;
    if (password.match(/\d/)) strength++;
    if (password.match(/[^a-zA-Z\d]/)) strength++;
    
    return strength;
}

// Cập nhật thanh độ mạnh mật khẩu
function updatePasswordStrength() {
    const passwordInputs = document.querySelectorAll('input[type="password"]');
    
    passwordInputs.forEach(input => {
        if (input.id === 'reg-password') {
            input.addEventListener('input', function() {
                const strength = checkPasswordStrength(this.value);
                const bars = document.querySelectorAll('.strength-bar');
                const text = document.querySelector('.strength-text');
                
                bars.forEach((bar, index) => {
                    if (index < strength) {
                        bar.style.backgroundColor = 
                            strength < 2 ? '#e63757' : 
                            strength < 4 ? '#f6c343' : '#00d97e';
                    } else {
                        bar.style.backgroundColor = '#e1e5eb';
                    }
                });
                
                text.textContent = 
                    strength === 0 ? 'Rất yếu' :
                    strength === 1 ? 'Yếu' :
                    strength === 2 ? 'Trung bình' :
                    strength === 3 ? 'Mạnh' : 'Rất mạnh';
            });
        }
    });
}

// Khởi tạo các sự kiện khi DOM tải xong
document.addEventListener('DOMContentLoaded', function() {
    setupPasswordToggle();
    updatePasswordStrength();
    
    // Xử lý sự kiện nhấn Enter
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                const form = this.closest('form');
                if (form) {
                    const submitBtn = form.querySelector('button[type="button"]');
                    if (submitBtn) {
                        submitBtn.click();
                    }
                }
            }
        });
    });
});