import axios from 'axios'

axios.get('http://localhost:8080/api/productos')
    .then(response => { console.log(response) })
    .catch(error => { console.log(error) })

axios.get('http://localhost:8080/api/carritos')
    .then(response => { console.log(response.data[0]._id) })
    .catch(error => { console.log(error) })

axios.post('http://localhost:8080/api/carritos')
    .then(response => { console.log(response) })
    .catch(error => { console.log(error) })

