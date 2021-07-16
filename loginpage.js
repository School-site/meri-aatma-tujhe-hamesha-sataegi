function adduser(){
    user1_name=document.getElementById("user_player1_inpout").value;
    user2_name=document.getElementById("user_player2_inpout").value;
    localStorage.setItem("user1_name",user1_name);
    localStorage.setItem("user2_name",user2_name);
    window.location="gamepage.html";


}