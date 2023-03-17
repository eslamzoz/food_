let showapi_data = document.getElementById("showapi_data");
let search_data = document.getElementById("search_data");
let LoginDone;
let Name_Inp = false;
let Email_Inp = false;
let Phone_Inp = false;
let Age_Inp = false;
let Password_Inp = false;
let Repassword_Inp = false;



      function open_nav() {
        $(".side-nav-menu").animate({left: 0}, 500)
        $(".open-close-icon").removeClass("fa-align-justify");
        $(".open-close-icon").addClass("fa-x");
        for (let i = 0; i < 5; i++) {
            $(".links li").eq(i).animate({top: 0}, (i + 5) * 100)
        }
    }
    
     function close_Nav() {
        let WidthNav = $(".side-nav-menu .nav-tab").outerWidth(true)
        $(".side-nav-menu").animate({left: -WidthNav}, 500)
    
        $(".open-close-icon").addClass("fa-align-justify");
        $(".open-close-icon").removeClass("fa-x");
        $(".links li").animate({top: 300 }, 500)
    }
    
     function dis_Meals(pramtar) {
        let cartoona = "";
    
        for (let i = 0; i < pramtar.length; i++) {
            cartoona += `
            <div class="col-md-3">
                    <div onclick="getMealDetails('${pramtar[i].idMeal}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                        <img class="w-100" src="${pramtar[i].strMealThumb}" alt="" srcset="">
                        <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                            <h3>${pramtar[i].strMeal}</h3>
                        </div>
                    </div>
            </div>
            `
        }
    
        showapi_data.innerHTML = cartoona
    }
    
    
     async function Get_Cat() {
        showapi_data.innerHTML = ""
        $(".inner-loading-screen").fadeIn(300)
        search_data.innerHTML = "";
    
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        response = await response.json()
    
        display_Cat(response.categories)
        $(".inner-loading-screen").fadeOut(300)
    
    }
    
     function display_Cat(pramtar) {
        let cartoona = "";
    
        for (let i = 0; i < pramtar.length; i++) {
            cartoona += `
            <div class="col-md-3">
                    <div onclick="Get_CatMeals('${pramtar[i].strCategory}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                        <img class="w-100" src="${pramtar[i].strCategoryThumb}" alt="" srcset="">
                        <div class="meal-layer position-absolute text-center text-black p-2">
                            <h3>${pramtar[i].strCategory}</h3>
                            <p>${pramtar[i].strCategoryDescription.split(" ").slice(0,20).join(" ")}</p>
                        </div>
                    </div>
            </div>
            `
        }
    
        showapi_data.innerHTML = cartoona
    }
    
     async function Get_location() {
        showapi_data.innerHTML = ""
        $(".inner-loading-screen").fadeIn(300)
    
        search_data.innerHTML = "";
    
        let respone = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
        respone = await respone.json()
        console.log(respone.meals);
    
        display_location(respone.meals)
        $(".inner-loading-screen").fadeOut(300)
    
    }
    
     function display_location(pramtar) {
        let cartoona = "";
    
        for (let i = 0; i < pramtar.length; i++) {
            cartoona += `
            <div class="col-md-3">
                    <div onclick="Get_Loc_Meals('${pramtar[i].strArea}')" class="rounded-2 text-center cursor-pointer">
                            <i class="fa-solid fa-house-laptop fa-4x"></i>
                            <h3>${pramtar[i].strArea}</h3>
                    </div>
            </div>
            `
        }
    
        showapi_data.innerHTML = cartoona
    }
    
    
     async function Get_Lng() {
        showapi_data.innerHTML = ""
        $(".inner-loading-screen").fadeIn(300)
    
        search_data.innerHTML = "";
    
        let respone = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
        respone = await respone.json()
        console.log(respone.meals);
    
        Display_Lng(respone.meals.slice(0, 20))
        $(".inner-loading-screen").fadeOut(300)
    
    }
    
    
     function Display_Lng(pramtar) {
        let cartoona = "";
    
        for (let i = 0; i < pramtar.length; i++) {
            cartoona += `
            <div class="col-md-3">
                    <div onclick="getIngredientsMeals('${pramtar[i].strIngredient}')" class="rounded-2 text-center cursor-pointer">
                            <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                            <h3>${pramtar[i].strIngredient}</h3>
                            <p>${pramtar[i].strDescription.split(" ").slice(0,20).join(" ")}</p>
                    </div>
            </div>
            `
        }
    
        showapi_data.innerHTML = cartoona
    }
    
    
     async function Get_CatMeals(pramtar) {
        showapi_data.innerHTML = ""
        $(".inner-loading-screen").fadeIn(300)
    
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${pramtar}`)
        response = await response.json()
    
    
        dis_Meals(response.meals.slice(0, 20))
        $(".inner-loading-screen").fadeOut(300)
    
    }
    
     async function Get_Loc_Meals(pramtar) {
        showapi_data.innerHTML = ""
        $(".inner-loading-screen").fadeIn(300)
    
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${pramtar}`)
        response = await response.json()
    
    
        dis_Meals(response.meals.slice(0, 20))
        $(".inner-loading-screen").fadeOut(300)
    
    }
    
    
     async function getIngredientsMeals(pramtar) {
        showapi_data.innerHTML = ""
        $(".inner-loading-screen").fadeIn(300)
    
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${pramtar}`)
        response = await response.json()
    
    
        dis_Meals(response.meals.slice(0, 20))
        $(".inner-loading-screen").fadeOut(300)
    
    }
    
     async function getMealDetails(pramtar) {
        close_Nav()
        showapi_data.innerHTML = ""
        $(".inner-loading-screen").fadeIn(300)
    
        search_data.innerHTML = "";
        let respone = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${pramtar}`);
        respone = await respone.json();
    
        displayMealDetails(respone.meals[0])
        $(".inner-loading-screen").fadeOut(300)
    
    }
    
    
     function displayMealDetails(meal) {
        
        search_data.innerHTML = "";
    
    
        let ingredients = ``
    
        for (let i = 1; i <= 20; i++) {
            if (meal[`strIngredient${i}`]) {
                ingredients += `<li class="alert alert-info m-2 p-1">${meal[`strMeasure${i}`]} ${meal[`strIngredient${i}`]}</li>`
            }
        }
    
        let tags = meal.strTags?.split(",")
        // let tags = meal.strTags.split(",")
        if (!tags) tags = []
    
        let tagsStr = ''
        for (let i = 0; i < tags.length; i++) {
            tagsStr += `
            <li class="alert alert-danger m-2 p-1">${tags[i]}</li>`
        }
    
    
    
        let cartoona = `
        <div class="col-md-4">
                    <img class="w-100 rounded-3" src="${meal.strMealThumb}"
                        alt="">
                        <h2>${meal.strMeal}</h2>
                </div>
                <div class="col-md-8">
                    <h2>Instructions</h2>
                    <p>${meal.strInstructions}</p>
                    <h3><span class="fw-bolder">Area : </span>${meal.strArea}</h3>
                    <h3><span class="fw-bolder">pramtar : </span>${meal.strCategory}</h3>
                    <h3>Recipes :</h3>
                    <ul class="list-unstyled d-flex g-3 flex-wrap">
                        ${ingredients}
                    </ul>
    
                    <h3>Tags :</h3>
                    <ul class="list-unstyled d-flex g-3 flex-wrap">
                        ${tagsStr}
                    </ul>
    
                    <a target="_blank" href="${meal.strSource}" class="btn btn-success">Source</a>
                    <a target="_blank" href="${meal.strYoutube}" class="btn btn-danger">Youtube</a>
                </div>`
    
        showapi_data.innerHTML = cartoona
    }
    
    
     function showSearchInputs() {
        search_data.innerHTML = `
        <div class="row py-4 ">
            <div class="col-md-6 ">
                <input onkeyup="SearchNa(this.value)" class="form-control bg-transparent text-white" type="text" placeholder="Search By Name">
            </div>
            <div class="col-md-6">
                <input onkeyup="searchByFLetter(this.value)" maxlength="1" class="form-control bg-transparent text-white" type="text" placeholder="Search By First Letter">
            </div>
        </div>`
    
        showapi_data.innerHTML = ""
    }
    
     async function SearchNa(term) {
        close_Nav()
        showapi_data.innerHTML = ""
        $(".inner-loading-screen").fadeIn(300)
    
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
        response = await response.json()
    
        response.meals ? dis_Meals(response.meals) : dis_Meals([])
        $(".inner-loading-screen").fadeOut(300)
    
    }
    
     async function searchByFLetter(term) {
        close_Nav()
        showapi_data.innerHTML = ""
        $(".inner-loading-screen").fadeIn(300)
    
        term == "" ? term = "a" : "";
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${term}`)
        response = await response.json()
    
        response.meals ? dis_Meals(response.meals) : dis_Meals([])
        $(".inner-loading-screen").fadeOut(300)
    
    }
    
     function showContacts() {
        showapi_data.innerHTML = `<div class="contact min-vh-100 d-flex justify-content-center align-items-center">
        <div class="container w-75 text-center">
            <div class="row g-4">
                <div class="col-md-6">
                    <input id="nameInput" onkeyup="inputsValidation()" type="text" class="form-control" placeholder="Enter Your Name">
                    <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">
                        Special characters and numbers not allowed
                    </div>
                </div>
                <div class="col-md-6">
                    <input id="emailInput" onkeyup="inputsValidation()" type="email" class="form-control " placeholder="Enter Your Email">
                    <div id="emailAlert" class="alert alert-danger w-100 mt-2 d-none">
                        Email not valid *exemple@yyy.zzz
                    </div>
                </div>
                <div class="col-md-6">
                    <input id="phoneInput" onkeyup="inputsValidation()" type="text" class="form-control " placeholder="Enter Your Phone">
                    <div id="phoneAlert" class="alert alert-danger w-100 mt-2 d-none">
                        Enter valid Phone Number
                    </div>
                </div>
                <div class="col-md-6">
                    <input id="ageInput" onkeyup="inputsValidation()" type="number" class="form-control " placeholder="Enter Your Age">
                    <div id="ageAlert" class="alert alert-danger w-100 mt-2 d-none">
                        Enter valid age
                    </div>
                </div>
                <div class="col-md-6">
                    <input  id="passwordInput" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="Enter Your Password">
                    <div id="passwordAlert" class="alert alert-danger w-100 mt-2 d-none">
                        Enter valid password *Minimum eight characters, at least one letter and one number:*
                    </div>
                </div>
                <div class="col-md-6">
                    <input  id="repasswordInput" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="Repassword">
                    <div id="repasswordAlert" class="alert alert-danger w-100 mt-2 d-none">
                        Enter valid repassword 
                    </div>
                </div>
            </div>
            <button id="LoginDone" disabled class="btn btn-outline-danger px-2 mt-3">Submit</button>
            <h5 class="done text-success text-center py-3 d-none">Done</h5>
        </div>
    </div> `
     LoginDone = document.getElementById("LoginDone")

    
    
        document.getElementById("nameInput").addEventListener("focus", () => {
            Name_Inp = true
        })
    
        document.getElementById("emailInput").addEventListener("focus", () => {
            Email_Inp = true
        })
    
        document.getElementById("phoneInput").addEventListener("focus", () => {
            Phone_Inp = true
        })
    
        document.getElementById("ageInput").addEventListener("focus", () => {
            Age_Inp = true
        })
    
        document.getElementById("passwordInput").addEventListener("focus", () => {
            Password_Inp = true
        })
    
        document.getElementById("repasswordInput").addEventListener("focus", () => {
            Repassword_Inp = true
        })
    }
    
     function inputsValidation() {
        if (Name_Inp) {
            if (Name_Rgex()) {
                document.getElementById("nameAlert").classList.replace("d-block", "d-none")
    
            } else {
                document.getElementById("nameAlert").classList.replace("d-none", "d-block")
    
            }
        }
        if (Email_Inp) {
    
            if (Email_Rgex()) {
                document.getElementById("emailAlert").classList.replace("d-block", "d-none")
            } else {
                document.getElementById("emailAlert").classList.replace("d-none", "d-block")
    
            }
        }
    
        if (Phone_Inp) {
            if (Phone_Rgex()) {
                document.getElementById("phoneAlert").classList.replace("d-block", "d-none")
            } else {
                document.getElementById("phoneAlert").classList.replace("d-none", "d-block")
    
            }
        }
    
        if (Age_Inp) {
            if (Age_Rgex()) {
                document.getElementById("ageAlert").classList.replace("d-block", "d-none")
            } else {
                document.getElementById("ageAlert").classList.replace("d-none", "d-block")
    
            }
        }
    
        if (Password_Inp) {
            if (Password_Rgex()) 
            {
                document.getElementById("passwordAlert").classList.replace("d-block", "d-none")
            } 
            else {
                document.getElementById("passwordAlert").classList.replace("d-none", "d-block")
    
            }
        }
        if (Repassword_Inp) {
            if (RePassword_Rgex()) {
                document.getElementById("repasswordAlert").classList.replace("d-block", "d-none")
            } else {
                document.getElementById("repasswordAlert").classList.replace("d-none", "d-block")
    
            }
        }
    
    
        if (Name_Rgex() && Email_Rgex() && Phone_Rgex() && Age_Rgex() && Password_Rgex() && RePassword_Rgex())
         {
            LoginDone.removeAttribute("disabled")
            LoginDone.addEventListener("click",() => {
                clear()
                $(".done").removeClass("d-none")

            })

         } 
         else {
            LoginDone.setAttribute("disabled", true)

        }
    }

    function clear() {

       let na = document.getElementById("nameInput")
       let em = document.getElementById("emailInput")
       let ph = document.getElementById("phoneInput")
       let ag = document.getElementById("ageInput")
       let pas = document.getElementById("passwordInput")
       let repas = document.getElementById("repasswordInput")


       na.value =""
        em.value =""
        ph.value =""
        ag.value =""
        pas.value =""
        repas.value =""
        
    }
    
     function Name_Rgex() {
        return (/^[a-zA-Z ]+$/.test(document.getElementById("nameInput").value))
    }
    
     function Email_Rgex() {
        return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById("emailInput").value))
    }
    
     function Phone_Rgex() {
        return (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(document.getElementById("phoneInput").value))
    }
    
     function Age_Rgex() {
        return (/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(document.getElementById("ageInput").value))
    }
    
     function Password_Rgex() {
        return (/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(document.getElementById("passwordInput").value))
    }
    
     function RePassword_Rgex() {
        return document.getElementById("repasswordInput").value == document.getElementById("passwordInput").value
    }
    

     $(document).ready(() => {
                SearchNa("").then(() => {
                    $(".loading-screen").fadeOut(500)
                    $("body").css("overflow", "visible")
            
                })
            })
            
    $(".side-nav-menu i.open-close-icon").click(() => {
                if ($(".side-nav-menu").css("left") == "0px") {
                    close_Nav()
                } else {
                    open_nav()
                }
            })
                 
    $(".Search").click(()=> {showSearchInputs(); close_Nav()})
    $(".Categories").click(()=> {Get_Cat(); close_Nav()})
    $(".Area").click(()=> {Get_location(); close_Nav()})
    $(".Ingredients").click(()=> {Get_Lng(); close_Nav()})
    $(".ContactUs").click(()=> {showContacts(); close_Nav()})
    $(".logo").click(()=> {Get_Cat()})
            
        
