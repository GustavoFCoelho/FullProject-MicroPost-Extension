class MainUI{
    loadMenu(user){
        const navbar = document.createElement("nav");
        navbar.className = "blue darken-2";

        const div = document.createElement("div");
        div.classList.add("navbar-wrapper");

        const a = document.createElement("a");
        a.classList.add("brand-logo");
        a.textContent = "MicroPost Application"

        div.appendChild(a);

        if(user === null){
            const ul = document.createElement("ul")
            ul.id = "nav-mobile";
            ul.className = "right hide-on-med-and-down"

            const registerLink = document.createElement("a");
            registerLink.className = "registerLink";
            registerLink.textContent = "Register";

            let li = document.createElement("li");
            li.appendChild(registerLink)

            ul.appendChild(li)

            const loginLink = document.createElement("a");
            loginLink.className = "loginLink";
            loginLink.textContent = "Login";

            li = document.createElement("li");
            li.appendChild(loginLink)

            ul.appendChild(li)
            div.appendChild(ul)
        }

        navbar.appendChild(div);

        document.body.appendChild(navbar)
    }
}

export const mainUI = new MainUI();