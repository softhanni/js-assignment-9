
  //creating function named clock.
function clock(){
    

    var date = new Date();
   //getting hours, minutes and seconds using date object 
    hr = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds();
    
    //defing a variable and assining the formate am or pm.
    var format = " AM";
    

    //making an if condition to check weather the hours is equals 0 than reassign the hr value to 12 and formate to pm.
    if(hr == 0){
        hr =12;
        format=" PM";
    }
    
//second if is to check that if hours is greater than 11 and hours is not equals to 12 ( as we using && operater both conditions should be true is order to get true) than reassign hr value to hr -12 and formate to pm . if we dont use second condition (&& hr !==12) than when hours return 12 than the value of hr will reassigned by hr - 12 which equalss to 0 and will display in console as 00 as well.there for second condtion is neccessory.
    if(hr > 11 && hr !==12){
        hr = hr - 12;
        format = " PM"
    }
    

    //reassining value to hr ,min and sec variables to ensure that if and value returns a single digit num than there shoould be a 0 before it. finally using slice method to take only last two digits as output so that when hours returns 12 it will be 012 and slice methods with negative argument slices two digits from last weather there is 09 or 012 it always shows last two digits.


     hr =( "0" + hr).slice(-2);
    min = ("0" +min).slice(-2);
    sec = ("0" +sec).slice(-2); 
    //clearing console to show output in a single line every second instead of showing result inn next line each second.

    console.clear()
    //consoleing final time concatinatng  colons among them to show in better display.
    console.log(hr + ":"+ min +":" + sec +format)
}

//calling function every second....
setInterval(clock,1000)


