let filterWater = () => {
    let input = ["salt", "dirt", "calcite", "uranium", "rubber"]
    let output = []

    for (i = 0; i < input.length; i++) {
        if (input[i] === "uranium" || "rubber" || "salt"){
            output.push(input[i])
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const filterWater = document.getElementById('waterFilter');
    filterWater.addEventListener('click', () => {
        let input = ["salt", "dirt", "calcite", "uranium", "rubber"]
        let output = []

        for (let i = 0; i < input.length; i++) {
            if (input[i] === "uranium" || input[i] === "rubber" || input[i] === "salt"){
                output.push(input[i])
            }
        }
        console.log(output);
    })
})