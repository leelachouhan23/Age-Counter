function calculateAge() {
    const birthdate = document.getElementById('birthdate').value;
    if (!birthdate) {
      alert("Please enter your date of birth.");
      return;
    }
  
    const birthDateObj = new Date(birthdate);
    const now = new Date();
  
    let years = now.getFullYear() - birthDateObj.getFullYear();
    let months = now.getMonth() - birthDateObj.getMonth();
    let days = now.getDate() - birthDateObj.getDate();
    let hours = now.getHours() - birthDateObj.getHours();
    let minutes = now.getMinutes() - birthDateObj.getMinutes();
    let seconds = now.getSeconds() - birthDateObj.getSeconds();
  
    if (seconds < 0) {
      seconds += 60;
      minutes--;
    }
  
    if (minutes < 0) {
      minutes += 60;
      hours--;
    }
  
    if (hours < 0) {
      hours += 24;
      days--;
    }
  
    if (days < 0) {
      const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += previousMonth.getDate();
      months--;
    }
  
    if (months < 0) {
      months += 12;
      years--;
    }
  
    document.getElementById('result').innerHTML = 
      `${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  }
  