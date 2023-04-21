//your JS code here. If required.
function login() {
			var username = document.getElementById("username").value;
			var password = document.getElementById("password").value;
			var remember = document.getElementById("checkbox").checked;

			if (remember) {
				localStorage.setItem("username", username);
				localStorage.setItem("password", password);
			} else {
				localStorage.removeItem("username");
				localStorage.removeItem("password");
			}

			alert("Logged in as " + username);
		}

		window.onload = function() {
			var username = localStorage.getItem("username");
			var existingButton = document.getElementById("existing");

			if (username) {
				existingButton.style.display = "inline";
			}

			existingButton.onclick = function() {
				alert("Logged in as " + username);
			};
		};