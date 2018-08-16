document.addEventListener('DOMContentLoaded', (event) => {

    console.log("does it work?")
    const noteData = fetch('http://localhost:3000/api/v1/users').then(res => res.json())
    .then(json => console.log(json));
    
    console.log('note array is' , noteData[0])

  })
