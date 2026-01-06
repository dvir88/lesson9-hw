 // ---------------------------------------------------
    // part 1: cancel + change btns
    // ---------------------------------------------------

    const changeBtn = document.getElementById("changeColorBtn")
    const cancelBtn = document.getElementById("cancelBtn")
    const box = document.getElementById("myDiv")

    let timeoutId = null

    changeBtn.addEventListener("click", function () {
        if (timeoutId !== null) return

        changeBtn.disabled = true

        timeoutId = setTimeout(function () {
            box.style.backgroundColor = "blue"
            changeBtn.disabled = false
            timeoutId = null
        }, 2000)
    })

    cancelBtn.addEventListener("click", function () {
        if (timeoutId !== null) {
            clearTimeout(timeoutId)
            timeoutId = null
            changeBtn.disabled = false
        }
    })

    // ---------------------------------------------------
    // part 2: setTimeout and timeout clock
    // ---------------------------------------------------

    let timeLeft = 10
    const timerDiv = document.getElementById("timer")

    function countdown() {
        if (timeLeft > 0) {
            timerDiv.textContent = timeLeft
            timeLeft--
            setTimeout(countdown, 1000)
        } else {
            timerDiv.textContent = "הזמן נגמר"
        }
    }

    countdown()

    // ---------------------------------------------------
    // part 3: customIndexOf function
    // ---------------------------------------------------

    function customIndexOf(str, char) {
        if (typeof str !== "string") {
            throw new Error("First parameter must be a string")
        }

        if (typeof char !== "string" || char.length !== 1) {
            throw new Error("Secound char must be a single char")
        }

        for (let i = 0; i < str.length; i++) {
            if (str[i] === char) {
                return i
            }
        }

        return -1
    }

    console.log(customIndexOf("hello", "e"))

    // ---------------------------------------------------
    // part 4: using fetch to extruct users
    // ---------------------------------------------------

    async function loadUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")

        if (!response.ok) {
            throw new Error("Server Error: " + response.status)
        }

        const users = await response.json()

        users.forEach(user => {
            const li = document.createElement("li")
            li.textContent = `${user.name} — lives in: ${user.address.city}`
            usersList.appendChild(li)
        })

    } catch (err) {
        console.error("Error in extracting the users ", err)
    }
}

loadUsers()