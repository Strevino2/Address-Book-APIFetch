const list = document.querySelector("#list")
// This function is going to make a fetch request to the URL inside its parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfPosts

fetch("https://randomuser.me/api/?results=10")
    .then((res) => res.json())
    .then((data) => {
      let fetchedData = data.results;
      let userArray = [];
      console.log(fetchedData);
      fetchedData.forEach((element) => {
        // console.log(fetchedData);

        const li = document.createElement('li');
        const h3 = document.createElement('h3');
        const h4 = document.createElement('h4');
        const p = document.createElement('p')
        const p2 = document.createElement('p')
        const img = document.createElement("img");
        const button = document.createElement('button')
        button.innerHTML = "Other Info"

        button.onclick = function() {myFunction()};

        function myFunction() {
        //   document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
          p.innerHTML = element.dob.date;
          p2.innerHTML = element.location.city;
        }

        h3.innerHTML = element.name.first;
        h4.innerHTML = element.name.last;
        img.src = element.picture.thumbnail
        console.log(element)
        // // img.url = element.image;

        li.appendChild(h3);
        li.appendChild(h4);
        li.appendChild(p);
        li.appendChild(p2);
        li.appendChild(img);
        li.appendChild(button);
        list.appendChild(li);
        userArray.push(element)
        console.log(userArray)
      });
    });
