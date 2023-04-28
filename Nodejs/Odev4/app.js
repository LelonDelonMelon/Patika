const fs = require('fs')

fs.writeFile("employees.json", '{ "name": "Employee 1 Name", "salary": 2000 }', 'utf-8', (err) => {

    if (err) console.log("Error occured", err)
    else
        console.log("Successfully created")
})

fs.readFile("./employees.json", 'utf-8', (err, data) => {
    if (err) console.log("Error occured", err)
    else
        console.log(JSON.stringify(data))
})

fs.appendFile("./employees.json", '{ "name": "Employee 2 Name", "salary": 3000 }', (err) => {
    if (err) console.log("Error occured", err)
    else
        console.log("Successfully updated");
})

fs.unlink("./employees.json", (err) => {
    if (err) console.log("Error occured", err)
    else
        console.log("Successfully deleted file")
})
