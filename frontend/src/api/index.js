export const url = "https://garden-ly.herokuapp.com/api"  //Production Server  //I think the problem has to do with this maybe
//export const url = "http://localhost:5000/api"    // Development Server  //localhost works but heroku link doesn't


export const setHeaders = () => {
    const headers = {
        headers: {
            "x-auth-token": localStorage.getItem("token")
        }
    }
    return headers
}