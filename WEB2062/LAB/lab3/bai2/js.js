const checkDogs = function (dogsJulia, dogsKate) {
    const dogsJuliaCorrected = dogsJulia.slice();
    dogsJuliaCorrected.splice(0, 1);
    dogsJuliaCorrected.splice(-2);
    const dogs = dogsJuliaCorrected.concat(dogsKate);
    console.log(dogs);
    dogs.forEach(function (dog, i) {
        if (dog >= 3) {
            console.log(`chó số ${i + 1} là chó người lớn, có tuổi là ${dog} tuổi`);
        } else {
            console.log(`chó số ${i + 1} là chó trẻ con, có tuổi là ${dog}tuổi`);
        }
    });

};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);