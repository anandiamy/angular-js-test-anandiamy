mirror('---ccv')
mirror('avg')

function mirror(input) {
    let reversed = input.split("").reverse().join("")

    console.log(input + reversed)
}
