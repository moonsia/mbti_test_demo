var num=1;
var q={
    1:{"title":"창문 밖에 눈이 옵니다. <br> 순간, 캐롤이 흐르는 거리가 떠오른 당신은 설레는 마음에...  ","type":"EI","A":"친구와의 약속을 잡는다.","B":"캐롤 플레이리스트를 틀어봅니다."},
    2:{"title":"오늘 저녁은 고기를 먹자는 부모님의 말씀에 나는...","type":"EI","A":"단골 고깃집이 떠올랐어요.","B":"냉동실 안의 그 삼겹살이 떠올랐어요."},
    3:{"title":"갑자기 전화해서 집 앞이라고 나오라는 친구의 말에 나는...","type":"EI","A":"대충 옷을 걸치고 현관문 부터 열어봅니다.","B":" '어..진짜?' 친구에게 확인 전화를 건다. "},
    4:{"title":"누군가가 문제 풀이를 해달라고 했을 때, 나는... ","type":"SN","A":"이론적으로 상대방에게 이해가 갈 수 있게 설명하곤 한다.","B":" '어...이건 그러니까..' 나만의 풀이방법이 있어서 설명하기 곤란했던 적이 많았다. "},
    5:{"title":"나는 새로운 것을 배울 때.. ","type":"SN","A":" 당장 배우는 것부터 차근차근 쌓아가는 것이 중요하다고 생각한다.","B":" 전체적인 흐름을 깨닫기 전까지는 크게 와닿지 않기 때문에 목차가 있다면 목차를 둘러보는 것이 먼저다. "},
    6:{"title":"어린 사촌동생이 외계인 친구를 사귀고 싶다고 할 때 나의 속마음은...","type":"SN","A":"외계인 친구 사귀어서 뭐하게..","B":"그래..! 꿈은 크게 크게 가지는게 좋지."},
    7:{"title":"최근 내린 나의 중요한 결정은...","type":"TF","A":"머리가 시키는 대로 따랐다.","B":"마음이 가는 대로 따랐다."},
    8:{"title":"집으로 돌아가는 길, <br> 나는 어떤 길로 갈까?","type":"TF","A":" 삭막하지만 빠른 아스팔트길.","B":"가로수가 예쁘게 늘어진 카페 앞 길."},
    9:{"title":"내가 만일 누군가에게 고민을 털어놓게 된다면..","type":"TF","A":"나의 방향을 제시해줄 수 있는 사람이 좋을 것 같다.","B":"나의 현재 상황을 이해해주고 공감해주는 사람이 좋을 것 같다. "},
    10:{"title":"친구들과 함께 한 캔버스에 그림을 그렸다. 곧 이 그림을 제출해야되는데 미완성이라고 느껴진다면..","type":"JP","A":"내가 완성도를 높여서 낼 것이다.","B":"친구들과 그려낸 것이 중요하니 그냥 제출한다."},
    11:{"title":"회사에 들어온 신입이 실수가 잦다. 사수인 나는...","type":"JP","A":"나는 그저 사수로써 내가 할만큼 할 뿐이다. 그 이상은 본인이..","B":" 회식 때 제일 가까운 자리에 앉아서 여러 이야길 나눠본다. "},
    12:{"title":"마감기한이 있는 일이 생긴다면..","type":"JP","A":" '오늘은 여기까지 마치고, 내일은... ' 시간을 나누어 계획적으로.","B":" '이 정도면 며칠이면 끝나겠네.' 최대한 뒤로 미루어 놓는다. "},
}
var result = {
    "ISFJ":{"animal": "당신은 굴림체 가 되었습니다.", "explain":"당신은 조용하고 차분하며 따뜻하고 친근합니다. 또한, 책임감과 인내력 또한 매우 강하고 본인의 친한 친구나 가족에게 애정이 가득하지요. 이들은 언제나 진솔하려 노력하고 가볍지 않기 때문에 관계를 맺기에 가장 믿음직스러운 유형입니다. 사회생활 시 외부 환경에 대해 내향형 중에서 가장 방어력이 강하며, 감정을 파악하는 데는 능숙하지만 표현하는 데는 서툴기 때문에 관계에 있어서 걱정을 하는 경우가 많습니다. 실제적이고 꼼꼼하게 계획적이며 협조적으로 일을 처리합니다. 완벽한 결과물을 도출하지 못할 경우 스트레스를 상당히 받으며, 이상과 달리 귀차니즘이 생겼을 시, 자신에게서도 극심한 괴리감을 느낍니다. 경험을 통해서 자신이 틀렸다고 인정할 때까지 꾸준히 밀고 나가는 편이군요.", "img":"images/esfj.jpg"},
    "ISFP":{"animal": "당신은 HY얕은샘물M체 가 되었습니다.", "explain":"자기중심성의 양면성이 있으시군요. 타인을 배려하는 성향도 다분하며, 말없이 다정하고 온화하며 사람들에게 친절하고 상대방을 잘 알게 될 때까지 내면의 모습이 잘 보이지 않습니다. 의견 충돌을 피하고, 인화를 중시합니다. 인간과 관계되는 일을 할 때 자신의 감정과 타인의 감정에 지나치게 민감한 경향이 있습니다. 결정력과 추진력을 기를 필요가 있을 것입니다. 눈치가 빠르며, 당신은 조용히 자기 일만 하고 있는 것처럼 보이지만 사실 주변 상황파악도 다 하고 있군요. 사람 간의 화합을 중시하며 충돌을 회피하는 성향으로 인해 타인과의 갈등이 심화되었을 경우 문제를 해결하려고 하기보다 상대방과의 관계를 끊을 수는 경우도 있겠습니다.", "img":"images/isfp.jpg"},
    "ESFP":{"animal": "당신은 카페24빛나는별체 가 되었습니다.", "explain":"사교적이고 활동적이며 수용력이 강하고 친절하며 낙천적입니다. 어떤 상황이든 잘 적응하며 현실적이고 실제적이네요. 주위의 사람이나 일어나는 일에 대하여 관심이 많으며 사람이나 사물을 다루는 사실적인 상식이 풍부합니다. 때로는 수다스럽고, 진지함이 결여되거나 마무리를 등한시하는 경향이 있으나, 어떤 조직체나 공동체에서 밝고 재미있는 분위기 조성 역할을 잘합니다.    ", "img":"images/esfp.jpg"},
    "ESFJ":{"animal": "당신은 휴먼모음T체 가 되었습니다.", "explain":"동정심이 많고 다른 사람에게 관심을 쏟으며 인화를 중시합니다. 타고난 협력자로서 동료애가 많고 친절하며 능동적인 구성원입니다. 이야기 하기를 즐기며 정리정돈을 잘하고, 참을성이 많고 다른 사람들을 잘 도와줍니다. 사람을 다루고 행동을 요구하는 분야, 예를 들면 교직, 성직, 판매 특히 동정심을 필요로 하는 간호나 의료 분야에 적합합니다. 일이나 사람 관련 문제에 대하여 냉철한 입장을 취하기 어려워합니다. 반대 의견에 부딪혔을 때나, 자신의 요구가 거절 당했을 때 마음의 상처를 받습니다.", "img":"images/esfj.jpg"},
    "INFJ":{"animal": "당신은 돋움체 가 되었습니다.", "explain":"인내심이 많고 통찰력과 직관력이 뛰어나며 화합을 추구합니다. 창의력이 좋으며, 성숙한 경우엔 강한 직관력으로 타인에게 말없이 영향력을 끼칩니다. 독창성과 내적 독립심이 강하며, 확고한 신념과 열정으로 자신의 영감을 구현시켜 나가는 정신적 지도자들이 많습니다. 나무보다 숲을 보고, 한곳에 몰두하는 경향으로 목적 달성에 필요한 주변적인 조건들을 경시하기 쉽고, 자기 내부의 갈등이 많고 복잡합니다. 이들은 풍부하고 감성적인 내적인 성격을 갖고 있습니다.", "img":"images/infj.jpg"},
    "INFP":{"animal": "당신은 맑은고딕체 가 되었습니다.", "explain":"감정적이고 즉흥적인 면이 강해서 편해 보일 수도 있지만, 사실 누구하고든 깊게 어울리기가 조금 힘들고 독고다이를 많이 하는 성격입니다. 그래도 공감 능력은 있어서 다른 사람의 체면을 생각해서 편을 조금 들어주면서 나름대로 중재자의 역할을 잘하며, 인간관계를 형성하게 되면 인간관계에서 본인의 정서를 온전히 드러내려는 경향이 있어 비슷한 공감대에 한번 친해지면 매우 깊게 어울릴 수도 있는 유형입니다. 나름대로 화목한 환경이 갖추어진 사회에서라면 스트레스도 최대한 덜 받으면서 꾸준히 일을 하며 적응해 나갈 것입니다.", "img":"images/infp.jpg"},
    "ENFP":{"animal": "당신은 HY엽서M체 가 되었습니다.", "explain":"따뜻하고 정열적이고 활기가 넘치며 재능이 많고 상상력이 풍부합니다. 온정적이고 창의적이며 항상 새로운 가능성을 찾고 시도하는 유형입니다. 문제 해결에 재빠르고 관심이 있는 일은 무엇이든지 수행해내는 능력과 열성이 있습니다. 다른 사람들에게 관심을 쏟으며 사람들을 잘 다루고 뛰어난 통찰력으로 도움을 줍니다. 반복되는 일상적인 일을 참지 못하고 열성이 나지 않는다. 또한 한 가지 일을 끝내기도 전에 몇 가지 다른 일을 또 벌이는 경향을 가지고 있습니다. 통찰력과 창의력이 요구되지 않는 일에는 흥미를 느끼지 못하고 열성을 불러일으키지 못하기도 합니다. ", "img":"images/enfp.jpg"},
    "ENFJ":{"animal": "당신은 카페24써라운드체 가 되었습니다.", "explain":"따뜻하고 적극적이며 책임감이 강하고 사교성이 풍부하고 동정심이 많습니다. 상당히 이타적이고 민첩하고 인화를 중요시하며 참을성이 많습니다. 다른 사람들의 생각이나 의견에 진지한 관심을 가지고 공동선을 위하여 다른 사람의 의견에 대체로 동의합니다. 미래의 가능성을 추구하며 편안하고 능란하게 계획을 제시하고 집단을 이끌어가는 능력이 있습니다. 때로 다른 사람들의 좋은 점을 지나치게 이상화하는 경향이 있으며 다른 사람들에 대해서도 자기와 같을 것이라고 생각하는 경향이 있습니다.","img":"images/enfj.jpg"},
    "INTJ":{"animal": "당신은 궁서체 가 되었습니다.", "explain":" 당신은 이성과 논리를 바탕으로 세상 모든 대상을 개념화하는 것을 선호하시나요? 예측을 즐기며 논리적인 과정을 통해 결과를 도출하고, 과정보다 결과를 중시하는 경향이 있으시군요. 많은 지인보다 소수의 좋은 친구를 사귀고, 우선순위나 가치가 유사한 사람들을 주변에 두고 싶어 합니다. 다른 사람과의 감정 다툼이 있을 때면 양자가 편해지는 쪽으로 이끌려는 경향이 있고, 어색하고 모호한 감정선을 지속하기보다 절교든 화해든 명확하게 결판내는 경향이 있겠습니다. 어떠한 직업에서든지 중요한 기여를 할 수 있는 창의성과 계획을 가지고 있으며, 이러한 능력은 자신의 일을 시작할 때 이점이 될 것입니다. 때로는 능력과 신뢰성으로 훌륭한 협력자가 되어주기도 하군요.", "img":"images/intj.jpg"},
    "INTP":{"animal": "당신은 견명조체 가 되었습니다.", "explain":"조용하고 과묵하며 논리와 분석으로 문제를 해결하기 좋아합니다. 먼저 대화를 시작하지 않는 편이나 관심이 있는 분야에 대해서는 말을 많이 합니다. 이해가 빠르고 직관력으로 통찰하는 능력이 있으며 지적 호기심이 많아, 분석적이고 논리적입니다. 비과학적이거나 논리적이지 못한 일들에 대단히 거부반응을 보일 경향이 높다. 아이디어와 원리, 인과관계에 관심이 많으며 실체보다는 실체가 안고 있는 가능성에 관심이 많다. 가끔은 매우 추상적이고 비현실적으로 생각하는 경향이 있습니다. 복잡한 문제를 해결하고 답을 찾는데 집중력을 발휘하지만 막상 그 해결책을 실제 현실에 적용하는 것에는 관심이 없습니다. 또 주어진 계획을 그대로 수행하기보다는 즉흥적 활동을 통하여 자기 역량을 효과적으로 발휘하는 편입니다. 계획을 철저하게 잘 짜거나, 짜는 과정에만 재미를 느끼는 건 '계획형'이라고 볼 수 없습니다. 다시 말해 계획을 철저하게 짜놨다 한들 곧 다시 즉흥적으로 행동할 가능성이 매우 높은 유형입니다. ", "img":"images/intp.jpg"},
    "ENTP":{"animal": "당신은 HY헤드라인M체 가 되었습니다.", "explain":"본인이 구상하는 바를 실현시키고 싶어하는 기질이 강하며, 여기에 특유의 아웃사이더적인 성격까지 겹쳐 말 그대로 혁명가의 기질을 띠고 있습니다. 모든 분야에 있어서, 기존의 체제 자체를 뒤집어 버리거나 분야 전체의 도약을 이루어내는 인물들이 많습니다. 허나 반복되는 업무, 혹은 본인이 흥미가 없는 일에는 도통 손을 대려 하지 않습니다. 리더 자리에서 활약하기를 좋아하고 뛰어난 리더로서의 자질을 타고난 이들이 많으나, 자유분방하며 자기주장이 강한 성격 때문에 높으신 분들과 충돌이 잦을 가능성이 높아 대한민국 사회와는 잘 들어맞지 않는 경우가 많습니다. 거의 전 유형을 통틀어서 부당한 권위에 저항하는 성향이 가장 강하며, 이는 혁명가적 성향을 뒷받침하는 원동력 중 하나가 되겠습니다.", "img":"images/entp.jpg"},
    "ENTJ":{"animal": "당신은 카페24당당해체 가 되었습니다.", "explain":"열성이 많으며 자기 주장이 강하면서 단호하고 지도력과 통솔력이 있습니다. 활동적이고 장기적인 계획과 거시적 비전을 선호합니다. 지식에 대한 욕구와 관심이 많으며 특히 직관력을 사용해서 지적인 자극을 주는 새로운 아이디어에 높은 관심을 가지고 있습니다. 논리, 분석적으로 계획하고 조직하여 체계적으로 추진해 나가는 유형이다. 다른 사람의 의견에 귀를 기울일 필요가 있으며, 자신과 타인의 감정에 충실할 필요가 있다. 사교활동에 매우 적극적이며 본인이 직접 모임을 주도하고 적극적으로 대화의 주도권을 이끌어 나가는 힘이 있는 성격입니다. 이것저것 논리적으로 계산을 하는데도 능숙하고 자기관리능력이 뛰어나 한마디로 유능한 성격의 대표주자입니다. 회사를 비롯한 집단에서도 유능한 직원, 팀장, 재능 있는 구성원의 이미지를 많이 풍기곤 합니다.", "img":"images/entj.jpg"},
    "ISTJ":{"animal": "당신은 바탕체 가 되었습니다.", "explain":"실제 사실에 대하여 정확하고 체계적으로 기억하며 일 처리에 있어서도 신중하고 책임감이 있습니다. 집중력이 강한 현실 감각을 지녔으며 조직적이고 침착합니다. 보수적인 경향이 있으며, 문제를 해결하는데 과거의 경험을 잘 적용하며, 반복되는 일상적인 일에 대한 인내력이 강합니다. 나무보다 숲을 보는 직관 능력이 매우 부족하여 전체적이고 타협적 방안을 고려하는 노력이 필요합니다. 정확성과 조직력을 발휘하는 분야의 일을 선호한다. 다소 내향적이지만 틀에 짜여진 사회에서 주어진 임무를 철저하게 완수하려 노력하며 규칙을 잘 준수하는 유형이라 회사나 공공기관 근무를 선호하고 일반적인 학교 선생님들이 매우 좋아하는 유형입니다. 겉으로 튀는 것을 별로 안 좋아하고 용의단정하며 정돈된 스타일입니다.", "img":"images/istj.jpg"},
    "ISTP":{"animal": "당신은 함초롱돋움체 가 되었습니다.", "explain":"과묵하며 절제된 호기심으로 인생을 관찰하고, 상황을 파악하는 민감성과 도구를 다루는 뛰어난 능력이 있습니다. 말이 없으며, 객관적이고 합리적으로 인생을 관찰하는 유형입니다. 필요 이상으로 자신을 발휘하지 않으며, 일과 관계되지 않는 이상 어떤 상황이나 인간관계에 직접 뛰어들지 않습니다. 가능한 에너지 소비를 하지 않으려 하며, 사실적 자료를 정리, 조직하기를 좋아하는 경향이 있으며 인과관계나 객관적 원리에 관심이 많다. 손재주가 있는 전형적인 장인이나 제조업자 스타일의 성격을 가집니다. 신체적 능력이 뛰어나 운동에 재능을 보이는 사람도 많습니다. 무표정인 경우가 많고 시니컬 하고 차가운 이미지가 느껴질 수 있겠군요.", "img":"images/istp.jpg"},
    "ESTP":{"animal": "당신은 티웨이하늘체 가 되었습니다.", "explain":"사실적이고 관대하며 개방적이고 사람이나 사물에 대한 선입견이 별로 없습니다. 강한 현실 감각으로 타협책을 모색하고 문제를 해결하는 능력이 뛰어납니다. 센스 있고 유머러스합니다. 어디서든 적응을 잘 하고 친구와 어울리기를 좋아합니다. 긴 설명을 싫어하고 운동, 음식 등 주로 오감으로 보고 듣고 만질 수 있는 삶의 모든 것을 즐기는 유형입니다. 순발력이 뛰어나며 많은 사실들을 쉽게 기억하고, 예술적인 멋과 판단력을 갖고 있으며, 연장이나 재료들을 다루는 데 능숙합니다. 논리, 분석적으로 일을 처리하는 데 반해, 추상적인 아이디어나 개념에 대해서는 별로 흥미가 없습니다. 즉, 현실적이고 실용적인 면에서 분석적인 자세를 보이진 않으신가요?", "img":"images/estp.jpg"},
    "ESTJ":{"animal": "당신은 한컴고딕체 가 되었습니다.", "explain":"현실적, 구체적이고 사실적이며 활동을 조직화하고 주도해 나가는 지도력이 있습니다. 실질적이고 현실 감각이 뛰어나며 일을 조직하고 계획하여 추진시키는 능력이 있습니다. 기계 분야나 행정 분야에 재능을 지녔으며, 체계적으로 사업체나 조직체를 이끌어 나갑니다. 타고난 지도자로서 일의 목표를 설정하고, 지시하고 결정하고 이행하는 능력이 있습니다. 자기 또는 타인의 감정을 고려하는 능력이 매우 부족하여 속단 속결하는 경향과 지나치게 업무 위주로 사람을 대하는 경향이 있으므로 인간 중심의 가치와 타인의 감정을 충분히 고려해야 합니다. 또 미래의 가능성보다 현재의 사실을 추구하기 때문에 현실적, 실용적인 면이 강합니다. 불건강할 경우, 무례할 수 있지만 현실적이고 실용적인 면을 제법 인지하고 있기 때문에 현실에서 도태될 가능성은 가장 없는 성격이겠습니다.", "img":"images/estj.jpg"},
//설명의 출처는 나무위키 입니다.
}

function start(){
    $(".start").hide();
    $(".question").show();
    next();
}

$("#A").click(function(){
    var type=$("#type").val();
    var preValue = $("#"+type).val();
    
    $("#"+type).val(parseInt(preValue)+1)
    // console.log(parseInt(preValue)+1)
    next();
});
$("#B").click(function(){
    next();
})

function next(){

    if (num==13){
        $(".question").hide();
        $(".result").show();

        var mbti="";
        // if($("#EI").val()<2) { 
        //     mbti = mbti + "I"
        // } else{
        //     mbti = mbti + "E"
        // }
        //삼항 연산자로 구현 
        ($("#EI").val()<2)? mbti+="I" : mbti+="E";
        ($("#SN").val()<2)? mbti+="N" : mbti+="S";
        ($("#TF").val()<2)? mbti+="F" : mbti+="T";
        ($("#JP").val()<2)? mbti+="P" : mbti+="J";

        $("#img").attr("src",result[mbti]["img"]);
        $("#animal").html(result[mbti]["animal"]);
        $("#explain").html(result[mbti]["explain"]);
    } else{
        $(".progress-bar").attr('style','width:calc(100/12*'+num+'%)');
        $("#title").html(q[num]["title"]);
        $("#type").val(q[num]["type"]);
        $("#A").html(q[num]["A"]);
        $("#B").html(q[num]["B"]);
        num++;
    }

    
}