let submit = document.getElementById('submit')

submit.addEventListener('click', function(){
  let username = document.getElementById('username').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let date = document.getElementById('date').value;
  let city = document.getElementById('city').checked;
  let check = document.getElementById('checkbox').checked;

  let error = '';
  //----------EMAIL------------
  if(email.includes(' ')=== true){
    error = 'Email cannot contain space';
  }
  else if(email.length === 0){
    error = 'Email must be filled '
  }
  else if(email.startsWith('.')||email.startsWith('@')){
    error = 'Email cannot start with "." or "@"'
  }
  else if(!email.endsWith('@gmail.com')){
    error = 'Email must be end with @gmail.com'
  }
  //----------USERNAME------------------
  else if(username.length == 0){
    error = 'Username must be Filled'
  }
  else if(username.length <= 6 && username.length >= 1){
    error = 'Username must be more than 6 letters';
  }

  //--------------PASSWORD---------
  else if(password.length == 0){
    error = 'Password must be Filled'
  }
  else if(password.length <= 6 && password.length >=1){
    error = 'Password must be more than 6 charcters'
  }
  else if(!password.includes('@')){
    error = 'Password must be include @'
  }

  //---------------Date of Birth-----------
  else if(date === ''){
    error = 'Your Date of Birth must be Choosen'
  }

  //--------------NATIONALITY-------------------
  else if (!city){ //ini yang nasionality
    error = 'Please pick your region'
  }

  //-----------CHECKBOX-----------------------
  else if(!check){
    error = 'Please click the box if you already seen the Term and Condition'
  }


  //Function CallBack
  if(error !== ''){
    //error
    alert(error);
  }
  else{
    alert('Your Form has been Approved')
  }
})