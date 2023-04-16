function simpleGet() {
    fetch('http://127.0.0.1:8000/api/ajax/get')
        .then(r => r.text())
        .then(data => {
            console.log(data)
        })
}

function getJSON() {
    fetch('http://127.0.0.1:8000/api/ajax/getJSON')
        .then(r => r.json())
        .then(data => {
            console.log(data)
            console.log(data.email)
        })
}

function sendHeader() {
    fetch('http://127.0.0.1:8000/api/ajax/getHeader', {
        headers: {
            CustomHeader: '123'
        }
    })
        .then(r => r.json())
        .then(data => {
            console.log(data)
        })
}

function errorCheck() {
    fetch('http://127.0.0.1:8000/api/ajax/getData/2')
        .then(r => {
            return {
                json: r.json(),
                ok: r.ok,
                status: r.status
            }
        })
        .then((data) => {
            console.log(data)
        })
}

function postRequest() {
    fetch('http://127.0.0.1:8000/api/ajax/post', {
        method: 'POST',
        body: JSON.stringify({ name: 'John Doe' }),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(r => r.json())
        .then(data => {
            console.log(data)
        })
}

function putRequest() {
    fetch('http://127.0.0.1:8000/api/ajax/put/1', {
        method: 'PUT',
        body: JSON.stringify({ name: 'John Doe' }),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(r => r.json())
        .then(data => {
            console.log(data)
        })
}

function deleteRequest() {
    fetch('http://127.0.0.1:8000/api/ajax/delete/1', {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(r => r.json())
        .then(data => {
            console.log(data)
        })
}


//-------------------------
function simpleGetAxios() {
    axios.get("http://127.0.0.1:8000/api/ajax/get")
        .then(data => {
            console.log(data)
        })
}

function getJSONAxios() {
    axios.get("http://127.0.0.1:8000/api/ajax/getJSON")
        .then(data => {
            console.log(data)
        })
}

function errorCheckAxios() {
    axios.get("http://127.0.0.1:8000/api/ajax/getData/2")
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(err.response.data)
        })
}

function sendHeaderAxios() {
    axios.get('http://127.0.0.1:8000/api/ajax/getHeader', {
        headers: {
            CustomHeader: '123'
        }
    })
        .then(data => {
            console.log(data)
        })
}

function postRequestAxios() {
    axios.post('http://127.0.0.1:8000/api/ajax/post', { name: 'John Doe' })
        .then(data => {
            console.log(data)
        })
}

function putRequestAxios() {
    axios.put('http://127.0.0.1:8000/api/ajax/put/1', { name: 'John Doe' })
        .then(data => {
            console.log(data)
        })
}

function patchRequestAxios() {
    axios.patch('http://127.0.0.1:8000/api/ajax/patch/1', { name: 'John Doe' })
        .then(data => {
            console.log(data)
        })
}

function deleteRequestAxios() {
    axios.delete('http://127.0.0.1:8000/api/ajax/delete/1')
        .then(data => {
            console.log(data)
        })
}
//------------------
document.getElementById('submit-button').addEventListener('click', 
function handleForm(event) {
    event.preventDefault()
    const form = document.getElementById('form')
    const formdata = Object.fromEntries(new FormData(form))
    axios.post('http://127.0.0.1:8000/api/ajax/post', formdata)
        .then(data => {
            console.log(data)
        })

})
