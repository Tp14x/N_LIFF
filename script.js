document.getElementById("unmuteButton").addEventListener("click", function() {
    var video = document.getElementById("videoPlayer");

    // เช็คว่าเสียงของวิดีโอถูกปิดหรือไม่
    if (video.muted) {
        video.muted = false;  // เปิดเสียง
        this.classList.add("explode");  // เพิ่มคลาส explode เพื่อทำให้ปุ่มแตกสลาย

        // สร้างอนุภาคเพื่อแตกออกจากปุ่ม
        createParticles(this);

        // ซ่อนปุ่มหลังจากแอนิเมชัน
        setTimeout(() => {
            this.style.display = 'none';  // ซ่อนปุ่มหลังจากแอนิเมชันเสร็จ
        }, 500); // หลังจากแอนิเมชันเสร็จ
    }
});

function createParticles(button) {
    var particlesContainer = document.createElement("div");
    particlesContainer.classList.add("particles-container");
    button.parentElement.appendChild(particlesContainer);

    for (var i = 0; i < 20; i++) {
        var particle = document.createElement("div");
        particle.classList.add("particle");
        particlesContainer.appendChild(particle);

        // กำหนดตำแหน่งให้อนุภาคกระจาย
        var x = Math.random() * 50 - 25;
        var y = Math.random() * 50 - 25;

        particle.style.left = x + "px";
        particle.style.top = y + "px";
    }

    // ลบอนุภาคหลังจาก 1 วินาที
    setTimeout(() => {
        particlesContainer.remove();
    }, 1000);
}
