//simple proram to estimate boda boda ride fare
function calculateBodaFare (distanceInKm){
    const userInput = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
    distanceInKm = parseInt(userInput);

    //checking valid input (not part of test but thought it's needed)
    if(distanceInKm <=0 ){
        alert("Kwa nini unataka kufanya safari ya 0km? ");
        return;
    }

    // calculate fare
    const baseFare = 50;
    const chargePerKm = 15 ;
    const distanceCost = distanceInKm * chargePerKm;
    const totalFare = baseFare + (distanceInKm * chargePerKm);

    // result in a user-friendly format
    alert (`Uko kwote? Io ni ${distanceInKm} km:\n`+
           `- Ukikalia Pikipiki: KES ${baseFare}\n`+
           `- Mpaka Uko: KES ${distanceCost}\n`+
           `- Total: KES ${totalFare}\n\n`+
           `Panda Pikipiki!`
        );

}
calculateBodaFare(); // call the function