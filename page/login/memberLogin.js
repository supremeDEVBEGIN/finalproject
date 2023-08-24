function submitData() {
    let username = document.querySelector('input[name = username]')
    let password = document.querySelector('input[name = password]')
    let userData = {
        ชื่อผู้ใช้งาน: username.value,
        รหัสผ่าน: password.value,
    }
    console.log(userData)
}
function goToRegister() {
    window.location.href = "../register/register.html";
}

function submitData() {
    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;

    if (username === 'admin' && password === '1234') {
        Swal.fire({
            icon: 'success',
            title: 'เข้าสู่ระบบสำเร็จ',
            text: 'ยินดีต้อนรับเข้าสู่ระบบ',
            confirmButtonText: 'ตกลง'
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'เข้าสู่ระบบไม่สำเร็จ',
            text: 'กรุณาตรวจสอบชื่อผู้ใช้งานหรือรหัสผ่าน',
            confirmButtonText: 'ตกลง'
        });
    }
}