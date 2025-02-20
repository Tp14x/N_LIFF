document.getElementById("unmuteButton").addEventListener("click", function() {
    var video = document.getElementById("videoPlayer");

    // เปลี่ยนวิดีโอให้ไม่เป็น muted และเล่นเสียง
    if (video.muted) {
        video.muted = false;
        this.classList.add("explode"); // เพิ่มคลาส explode เพื่อทำให้ปุ่มแตกสลาย
        setTimeout(() => {
            this.style.display = 'none'; // ซ่อนปุ่มหลังจากที่มันแตกสลาย
        }, 500); // หลังจากแอนิเมชัน
    }
});
