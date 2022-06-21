/////////////////////////// Async/Await //////////////////////////////

async function myDisplay() {
    let myPromise = new Promise(function(resolve) {
        setTimeout(function() {resolve("I love my India");}, 1000);
    });
    res = await myPromise;
    console.log(res);
}

myDisplay();

//////////////////////// Tasks: /////////////////////////////

// 1. Rewrite using async/await

async function loadJson(url) {
    let response = await fetch(url);

    if (response.status == 200) {
        let json = await response.json();
        return json;
    }
    throw new Error(response.status);
}

loadJson('https://javascript.info')
    .catch(console.log);


// 2. Rewrite "rethrow" with Async/await:

// class HttpError extends Error {
//     constructor(response) {
//       super(`${response.status} for ${response.url}`);
//       this.name = 'HttpError';
//       this.response = response;
//     }
//   }
  
//   async function loadJson(url) {
//     let response = await fetch(url);
//     if (response.status == 200) {
//       return response.json();
//     } else {
//       throw new HttpError(response);
//     }
//   }
  
//   // Ask for a user name until github returns a valid user
//   async function demoGithubUser() {
  
//     let user;
//     while(true) {
//       let name = console.log("Enter a name?", "iliakan");
  
//       try {
//         user = await loadJson(`https://api.github.com/users/${name}`);
//         break; // no error, exit loop
//       } catch(err) {
//         if (err instanceof HttpError && err.response.status == 404) {
//           // loop continues after the alert
//           console.log("No such user, please reenter.");
//         } else {
//           // unknown error, rethrow
//           throw err;
//         }
//       }
//     }
  
  
//     console.log(`Full name: ${user.name}.`);
//     return user;
//   }
  
//   demoGithubUser();


// 3. Call Async from Non-Async

async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    return 10;
  }
  
  function f() {
    // shows 10 after 1 second
    wait().then(result => console.log(result));
  }
  
  f();

/////////////////////////////////////////////////////////////////