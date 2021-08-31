export function testGet(){
    const Http = new XMLHttpRequest();
    var response;
    Http.open("GET", 'http://localhost:8080/ping', true);
    Http.send()

    Http.onload = function () {
        console.log("Response: ", Http.responseText);
        response = Http.responseText;
        return response
        };
    
    return Http.responseText

}

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
