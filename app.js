let xhr = new XMLHttpRequest();

xhr.onreadystatechange = () => {
        if(xhr.readyState == 4 && xhr.status == 200){
            let reqObj = JSON.parse(xhr.response);
            console.log(reqObj.data.slice(0,5)); 
        }
 };
 
xhr.open('GET', 'https://reqres.in/api/users');
xhr.send();

function getLog(urlStr){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if(xhr.readyState == 4 && xhr.status == 200){
            console.log(JSON.parse(xhr.response)); 
        }
     };
    xhr.open('GET', urlStr);
    xhr.send();
}

function get(url, callback){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () =>{
        if (xhr.readyState == 4 && xhr.status == 200){
            callback(xhr.response);
        }
    };
    xhr.open('GET', url);
    xhr.send();
}