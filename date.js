
module.exports.getDate=getDate;

function getDate(){
    let today= new Date();
    let curday=today.getDay();

    let options={
        weekday:"long",
        day:"numeric",
        month:"long"
    };

    return today.toLocaleString("en-Us",options);
}


module.exports.getDay=getDay;

function getDay(){
    let today= new Date();
    let curday=today.getDay();

    let options={
        weekday:"long"
    };

    return today.toLocaleString("en-Us",options);
}