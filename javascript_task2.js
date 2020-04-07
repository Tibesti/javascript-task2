let data = [{principal:2500, time:1.8}, {principal:1000, time:5}, {principal:3000, time:1}, {principal:2000, time:3}];

function interestCalculator (par) {

    let interestData = [];

    for(let i=0; i<data.length; i++){
        if (data[i].principal >= 2500 && data[i].time > 1 && data[i].time < 3){
            let rate = 3;
            interest = (data[i].principal*rate*data[i].time)/100;
            let newObj = {principal:data[i].principal, rate: rate, time:data[i].time, interest:interest}
            interestData.push(newObj);
        }
        else if(data[i].principal >= 2500 && data[i].time >= 3){
            let rate = 4;
            interest = (data[i].principal*rate*data[i].time)/100;
            let newObj = {principal:data[i].principal, rate: rate, time:data[i].time, interest:interest}
            interestData.push(newObj);
        }
        else if (data[i].principal < 2500 || data[i].time <= 1){
            let rate = 2;
            interest = (data[i].principal*rate*data[i].time)/100;
            let newObj = {principal:data[i].principal, rate: rate, time:data[i].time, interest:interest}
            interestData.push(newObj);
        }
        else {
            let rate = 1;
            interest = (data[i].principal*rate*data[i].time)/100;
            let newObj = {principal:data[i].principal, rate: rate, time:data[i].time, interest:interest}
            interestData.push(newObj);
        }


    }
    console.log(interestData);
    return true;
}
interestCalculator(data);
