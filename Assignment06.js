// validatin Password
function Check_Password(Password) {
    if (Password.length < 8 || Password.length > 20) {
        console.log("Password must have atleast 8 and atmost 20 characters");
    }
    else {
        console.log("Password created successfully");
    }
}
Check_Password("Hello World");
