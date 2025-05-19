// Lấy tất cả các món ăn
const dishCards = document.querySelectorAll('.dish-card');

// Lấy modal và phần tử close
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-btn');

// Dữ liệu chi tiết món ăn (có thể được thêm động từ cơ sở dữ liệu hoặc JSON)
const dishDetails = {
    "Bún chả Nhân Trí": {
        image: "/images/MonanHaNoi.jpg",
        description: "Bún chả Nhân Trí, đặc sản Hà Nội với thịt nướng và bún tươi.",
        price: "50,000 VND"
    },
    "Chả cá Lã Vọng": {
        image: "/images/chacalavong.jpg",
        description: "Chả cá Lã Vọng, món ăn nổi tiếng với cá tươi nướng và gia vị đặc trưng.",
        price: "80,000 VND"
    },
    "Cháo Gà": {
        image: "/images/chaoga.jpg",
        description: "Cháo Gà, món ăn thơm ngon với thịt gà tươi và gia vị đậm đà.",
        price: "35,000 VND"
    },
    "Bún Gỏi Nước Giang": {
        image: "/images/bungoinuocgiang.jpg",
        description: "Bún Gỏi Nước Giang, món ăn lạ miệng với nước giang thơm ngon.",
        price: "45,000 VND"
    },
    "Bún Thang Hà Nội": {
        image: "/images/bunthanghanoi.jpg",
        description: "Bún Thang Hà Nội, bún nước đặc trưng với trứng, thịt và gia vị đậm đà.",
        price: "60,000 VND"
    },
    "Canh Láng": {
        image: "/images/canhlang.jpg",
        description: "Canh Láng, canh rau tươi ngon với gia vị thanh mát.",
        price: "30,000 VND"
    },
    "Vịt quay Lạng Sơn": {
        image: "/images/vitquaylangson.jpg",
        description: "Vịt quay Lạng Sơn, món ăn đặc sản với vịt quay giòn thơm.",
        price: "120,000 VND"
    }
};

// Lắng nghe sự kiện click vào từng món ăn
dishCards.forEach(card => {
    card.addEventListener('click', (e) => {
        const dishName = e.target.alt; // Tên món ăn (dựa trên thuộc tính alt của img)
        const dish = dishDetails[dishName];

        if (dish) {
            // Hiển thị thông tin chi tiết
            const modalContent = modal.querySelector('.modal-content');
            modalContent.innerHTML = `
                <span class="close-btn">&times;</span>
                <img src="${dish.image}" alt="${dishName}" />
                <h2>${dishName}</h2>
                <p>${dish.description}</p>
                <p><strong>Giá: ${dish.price}</strong></p>
            `;
            modal.style.display = 'block'; // Mở modal
        }
    });
});

// Đóng modal khi click vào nút đóng
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Đóng modal khi click vào vùng tối (background)
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
