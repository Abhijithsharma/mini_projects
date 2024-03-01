let input = document.querySelector('#input');
let btn = document.querySelector(".btn");
let year = document.querySelector("#year");
let month = document.querySelector("#month");
let day = document.querySelector("#days");

    btn.addEventListener('click', () => {
        // Get the user's date of birth from the input field and convert it into a Date object
        const dob = new Date(input.value);
        
        // Get today's date
        const today = new Date();
        if(input.value.trim() == ''){
            alert("Please Enter valid Information");
        }
        else if(dob > today)
        {
            alert("please Check your Detailes")
        }

        // Calculate the difference between today's date and the date of birth in milliseconds
        else{let ageDiffMs = today - dob;
        
        // Convert milliseconds to years
        let ageYears = Math.floor(ageDiffMs / (1000 * 60 * 60 * 24 * 365.25));
        
        // Subtract the years from the age difference to calculate the remaining time
        ageDiffMs -= ageYears * (1000 * 60 * 60 * 24 * 365.25);
        
        // Convert the remaining milliseconds to months
        let ageMonths = Math.floor(ageDiffMs / (1000 * 60 * 60 * 24 * 30.4375));
        
        // Subtract the months from the age difference to calculate the remaining time
        ageDiffMs -= ageMonths * (1000 * 60 * 60 * 24 * 30.4375);
        
        // Convert the remaining milliseconds to days
        let ageDays = Math.floor(ageDiffMs / (1000 * 60 * 60 * 24));

        year.innerHTML=ageYears;
        month.innerHTML=ageMonths;
        day.innerHTML=ageDays;}
});
