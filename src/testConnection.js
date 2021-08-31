import axios from "axios";

export function testGet(){
    axios.get('http://localhost:8080/ping').then(response => {
        console.log(response.data);
        return response.data
    })


}


// var response;

    // const Http = await new XMLHttpRequest();
    
    // Http.open("GET", 'http://localhost:8080/ping', true);

    // Http.onload = async function () {
    //     // console.log("Response: ", Http.responseText);
    //     response = await Http.responseText;
    //     // return response 
    //     };

    // Http.send()
    // console.log("Response:", response)
    // response.then(r => {return r})
    // return response

    // const response = await fetch('http://localhost:8080/ping');
    // const data = await response;
    // console.log(data);

// export async function testGet(){
//     var response;
//     let url = 'http://localhost:8080/ping';
//         let res = await fetch(url);

//         if (res.ok) {

//             let text = await res.text();

//             return text;
//         } else {
//             return `HTTP error: ${res.status}`;
//         }
//     }
