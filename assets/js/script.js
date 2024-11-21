// Validasi Login
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah default form submission

    // Ambil input dari form
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Referensi elemen tombol dan spinner
    const loginButton = document.getElementById("loginButton");
    const spinner = document.getElementById("loadingSpinner");

    // Tampilkan spinner dan nonaktifkan tombol
    spinner.classList.remove("d-none");
    loginButton.disabled = true;

    // Simulasi proses validasi login
    setTimeout(() => {
        if (email === "ade@example.com" && password === "ade123") {
            // Login berhasil
            alert("Login berhasil!");
            localStorage.setItem("loggedIn", "true"); // Simpan status login
            window.location.href = "menu_utama.html"; // Pindah ke halaman menu utama
        } else {
            // Login gagal
            const errorMsg = document.getElementById("errorMsg");
            errorMsg.style.display = "block";
            errorMsg.textContent = "Email atau password salah!";
        }

        // Sembunyikan spinner dan aktifkan tombol kembali
        spinner.classList.add("d-none");
        loginButton.disabled = false;
    }, 2000); // Simulasi delay 2 detik
});
