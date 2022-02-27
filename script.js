let button = document.getElementById('button');
button.addEventListener("click", buttons);

function buttons(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://reqres.in/api/users?page=2", true);
    xhr.onprogress = function(){
        var laoder = document.createElement('div');
        laoder.setAttribute('id', laoder);
        document.getElementById('loader').innerText = "Ayush";
        console.log("Ayush")
    }
    xhr.send();
    
    xhr.onreadystatechange = function() {
        if (this.readyState === 4) {  // 4 = "DONE" state "	The request has been processed and the response is ready"
            if(this.status === 200) { //200 = "OK" state "	The request was successfully received, understood, and accepted"
                var data = JSON.parse(xhr.responseText).data;
                console.log(data);
            
                for ( i=0; i<data.length; i++)
                {
                    
                   var card = document.getElementById('card');
                   var id = document.createElement('div');
                   id.setAttribute('id', id);
                   id.setAttribute('class', "change");
                   id.append( "id : " + data[i].id);
                   
                   var email = document.createElement('div');
                   email.setAttribute('id', email);
                   email.setAttribute('class', "change");
                   email.append( "email : " + data[i].email);
                   email.appendChild(id);

                   var first = document.createElement('div');
                   first.setAttribute('id', first);
                   first.setAttribute('class', "change");
                   first.append( "First name : "+ data[i].first_name);
                   first.appendChild(email);
                   
                   var last = document.createElement('div');
                   last.setAttribute('id', last);
                   last.setAttribute('class', "change");
                   last.append("last name : " + data[i].last_name);
                   last.appendChild(first);
    
                   var product_image = document.createElement("img");
                   product_image.setAttribute(
                     "src",
                     data[i].avatar
                   );
         
                   var product_image_div = document.createElement("div");
                   product_image_div.setAttribute("class", "img");
                   product_image_div.append(product_image);
                   
                   var avatar = document.createElement('div');
                   avatar.setAttribute('id', avatar);
                  
                   avatar.appendChild(product_image_div);
                   avatar.appendChild(last);
                   card.appendChild(avatar);
    
                }            
            }
            else{    //if  this.state != 200 	The server failed to find anything matching the request"
                alert('Error: ' + this.status);
            }          
        }
    };
}

