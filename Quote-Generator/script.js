const generateQuote = () =>{
        let url = "https://type.fit/api/quotes"
        fetch(url).then(function 
            (response) {
            return response.json()
        }).then(function (data) {
            let randomNum = Math.floor((Math.random()* 1500) + 1) 
            let randomQuote = data[randomNum];
            document.getElementById("quote").innerHTML =`$(randomQuote.text)`;
            document.getElementById("author").innerHTML = `$(randomQuote.author : "")`;
        })
}