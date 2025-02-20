document.getElementById("unmuteButton").addEventListener("click", function() {
    var video = document.getElementById("videoPlayer");

    // เช็คว่าเสียงของวิดีโอถูกปิดหรือไม่
    if (video.muted) {
        video.muted = false;  // เปิดเสียง
        this.classList.add("explode");  // เพิ่มคลาส explode เพื่อทำให้ปุ่มแตกสลาย

        // ซ่อนปุ่มหลังจากแอนิเมชัน
        setTimeout(() => {
            this.style.display = 'none';  // ซ่อนปุ่มหลังจากแอนิเมชันเสร็จ
        }, 500); // เวลาเดียวกับแอนิเมชัน
    }
});
