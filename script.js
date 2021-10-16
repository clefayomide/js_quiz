const getData = async () => {
    const didnt_submit = []

    // get all students
    const all_student_req = await fetch("./allStudents.txt")
    const all_student_data = await all_student_req.text()

    // get student who submitted
    const submitted_test_req = await fetch("./studentsWhoSubmitted.txt")
    const submiited_test_data = await submitted_test_req.text()

    // array of all students
    const all_student_arr = all_student_data.split("\n")

    // array of students who submitted
    const submitted_arr = submiited_test_data.split("\n")

    // didnt submit
    all_student_arr.forEach((student) => {
        if(submitted_arr.includes(student)){
            return;
        }else{
            didnt_submit.push(student)
        }
    })

    console.log("Emails of students who did not submit:\n", didnt_submit)

    console.log("Total number of students who submitted:\n", submitted_arr.length - 1)

    console.log("Total number of students who did not submit:\n", didnt_submit.length)

} 
 
getData()
