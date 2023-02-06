function setAction(){
    var score = 0;
    var name = document.getElementById('name').value;

    /* 문제 1 */
    var sports = document.getElementsByName('sports');
    var sports_selected = Array.from(sports).find(radio => radio.checked);
    if (sports_selected.value==1){ // 정답(야구) 선택 시 30점 플러스
        score+=30;
    }

    /* 문제 2 */
    var languages=[document.getElementById('C').checked,
    document.getElementById('C++').checked,
    document.getElementById('Python').checked,
    document.getElementById('R').checked,
    document.getElementById('Java').checked,
    document.getElementById('Ruby').checked,
    document.getElementById('HTML').checked,
    document.getElementById('CSS').checked,
    document.getElementById('JavaScript').checked,
    document.getElementById('PHP').checked
    ];
    var language_scores=[10, 10, 10, -10, 5, -10, 5, 5, 5, -10] // 언어당 주는 점수 표시
    for (var i = 0; i < 10; i++){
        if(languages[i]==true){
            score+=language_scores[i];
        }
    }

    /* 문제 3 */
    var blood = document.getElementsByName('blood');
    var blood_selected = Array.from(blood).find(radio => radio.checked);
    if (blood_selected.value==2){ // 정답(O형) 선택 시 20점 플러스
        score+=20;
    }
    /* 문제 4 */
    var textarea = document.getElementById('q4');
    if (textarea.value==""){
        score-=10000; // 대답을 하지 않으면 10000점이 깎인다!
    }
    alert(name+" 님의 점수 : "+score+`
1번 : 제가 제일 좋아하는 스포츠 종목은 야구입니다.
2번 : 잘하는 언어는 C, C++, Python입니다.
조금은 할 줄은 아는 언어는 Java, HTML, CSS, Javascript입니다.(그래서 강좌를 듣고 있는 거겠죠?)
할 줄 모르는 언어는 R, Ruby, PHP입니다.
3번 : 제 혈액형은 O형입니다.
만약 점수가 마이너스가 나오셨다면, 4번도 엄연한 문제라는 것에 착안하시기 바랍니다.`);
}