user1_name=localStorage.getItem("user1_name");
user2_name=localStorage.getItem("user2_name");
user1_score=0;
user2_score=0;
document.getElementById("user1_name").innerHTML=user1_name+":";
document.getElementById("user2_name").innerHTML=user2_name+":";
document.getElementById("user1_score").innerHTML=user1_score;
document.getElementById("user2_score").innerHTML=user2_score;
document.getElementById("player_question").innerHTML="Question Turn-"+user1_name;
document.getElementById("player_answer").innerHTML="Answer Turn-"+user2_name;




function send(){

    Number1=document.getElementById("number-1").value;
    Number2=document.getElementById("number-2").value;
    correct_answer=Number1*Number2;
    console.log(correct_answer);


    question_Number="<h4>"+Number1+"X"+Number2+"</h4>";
    input_Box="<br> Answer:<input type='text' id='input_check_box'>";

    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";

    row=question_Number+input_Box+check_button;

    document.getElementById("output").innerHTML=row;
    document.getElementById("number-1").value="";
    document.getElementById("number-2").value="";


}
question_Turn="user1";
answer_Turn="user2";
function check(){


    getanswer=document.getElementById("input_check_box").value;
    if(getanswer==correct_answer){
        if(answer_Turn="user1"){
            user1_score=user1_score+1;
            document.getElementById("user1_score").innerHTML=user1_score;
        }
        else{
            user2_score=user2_score+1;
            document.getElementById("user2_score").innerHTML=user2_score;
        }
    }
    if(question_Turn=="user1"){
        question_Turn="user2";
        document.getElementById("player_question").innerHTML="Question Turn-"+user2_name;
    }
else{
    question_Turn="user1";
    document.getElementById("player_question").innerHTML="Question Turn-"+user1_name;
}
if(answer_turn == "user1")
	{
		answer_turn = "user2"
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + user2_name ;
	}
	else 
	{
		answer_turn = "user1"
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + user1_name ;
	}

    document.getElementById("output").innerHTML = "";
}

