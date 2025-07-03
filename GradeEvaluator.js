let mark = prompt('Enter your mark: ')
mark = Number(mark);

if (isNaN(mark)){
    console.log("Please Enter the valid number .")
}

else if (mark < 0 || mark > 100){
    console.log("The mark should be between 0 and 100")
}

else{
    if (mark >= 90){
        console.log("Grade A")
    }

    else if (mark >= 80){
        console.log("Grade B")
    }

    else if (mark >= 70){
        console.log("Grade C")
    }

    else if (mark >= 50){
        console.log("Grade D")
    }

    else if (mark >= 35){
        console.log("Just Pass")
    }

    else {
        console.log("what bro, go and study")
    }

   
}