let cards=document.getElementById("cards")





        const card=async()=>{

            let res=await fetch("https://api.themoviedb.org/3/discover/movie?with_genres=9648&api_key=8c073a4ff8ac2947ed2ba2df461164e3")

            let data=await res.json()



            console.log(data.results)

            data.results.forEach((item,index)=>{

                cards.innerHTML+=`<div class="movie-card">

                <span class="rank">${index+1}</span>

  <img src="https://image.tmdb.org/t/p/w500${item.poster_path}" alt="${item.title}">

  <h3>${item.title}</h3>

</div>`

            })

        }

        card()



document.querySelector(".right-btn").onclick=()=>{

    cards.scrollLeft += cards.clientWidth;

};



document.querySelector(".left-btn").onclick=()=>{

    cards.scrollLeft -= cards.clientWidth;

};                                                                                                                                                                                       

    