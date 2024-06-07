function creat_car(manufacture, model, ...option){
    let car = {
        manufacture: manufacture ,
        model: model
    };

    option.forEach(option => {
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim();
    });

    return car;
}

let my_car = creat_car("Honda","Corrolla","color: Black","sunroof: true");

console.log(my_car);