document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
    const date = document.querySelector('input').value
    const apiKey = '8QIkjwMaNqejcDCPnQqfmTjb7ibeNAw9lgQ5xWpr'
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        if (data.media_type === 'image') {
            document.getElementById('img').src = data.url
            document.getElementById('img').style.visibility = "visible"
            document.getElementById('img').style.display = "block"
            document.getElementById('vid').style.display = "none"
        }else if (data.media_type === "video") {
            document.getElementById('vid').src = data.url
            document.getElementById('vid').style.display = "block"
            document.getElementById('img').style.display = "none"
        }
        document.getElementById('name').innerText = data.title
        document.getElementById('name').style.visibility = "visible"
        document.getElementById('explanation').innerText = data.explanation
        document.getElementById('explanation').style.visibility = "visible"      
    })
    .catch(err => {
        console.log(`error ${err}`);
    });
}


