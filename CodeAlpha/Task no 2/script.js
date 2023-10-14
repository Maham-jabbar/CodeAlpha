
        const users = {}; // User database (for demonstration purposes)

        function register() {
            const regUsername = document.getElementById("regUsername").value;
            const regPassword = document.getElementById("regPassword").value;

            users[regUsername] = regPassword;
            alert("Registration successful!");
        }

        function login() {
            const loginUsername = document.getElementById("loginUsername").value;
            const loginPassword = document.getElementById("loginPassword").value;

            if (users[loginUsername] === loginPassword) {
                document.getElementById("login").style.display = "none";
                document.getElementById("securedPage").style.display = "block";
                alert("Login successful!");
            } else {
                alert("Login failed. Please check your credentials.");
            }
        }