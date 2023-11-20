// Select elements
const errorMsg = document.getElementById('error-msg');
const username = document.getElementById('username');
const pass = document.getElementById('pass');
const submitBtn = document.getElementById('submit-btn');

// Dummy saved data
const savedData = {
    username: 'joe',
    password: '123',
}

// What happens when user presses submit button
submitBtn.onclick = (e)=>{
    // To make sure page does not refresh
    e.preventDefault();

    // Details the user has entered in the form
    const inputData = {
        username: username.value.toLowerCase(),
        password: pass.value
    }

    // Access the response data
    const response = login(savedData, inputData);

    // Logic for logging in
    // If the login field is true they can go to dashboard
    // Otherwise stay on login
    if(response.login){
        localStorage.setItem('username', inputData.username);
        document.location.assign('/dashboard.html')
    }else{
        errorMsg.textContent = response.message;
    }
}

// Login logic
function login(savedData = {}, inputData = {}){
    // Check if the user has enetered value in the fields
    // Otherwise we do not allow them to logic
    if(inputData.username.trim() && inputData.password.trim()){
        if(savedData.username !== inputData.username){
            return {message: "Wrong username!", login: false}
        }
        else if(savedData.password !== inputData.password){
            return {message: "Wrong password!", login: false}
        }else{
            return {message: "Login successful!", login: true}
        }
    }else{
        return {message: "Please fill in all fields!", login: false}
    }
}