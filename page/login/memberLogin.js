function submitData(){
    let username = document.querySelector('input[name = username]')
    let password = document.querySelector('input[name = password]')
    let userData = {
        ชื่อผู้ใช้งาน: username.value,
        รหัสผ่าน: password.value,
    }
   console.log(userData)
} 