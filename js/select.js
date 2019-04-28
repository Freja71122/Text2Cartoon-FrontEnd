// console.log(cards);

function writeCard(scene_id,scene_text) {
  // the command you entered
  var cards = document.querySelector('.cards');
  var card = document.createElement('div');
  card.className = 'card';
  var cardbg = document.createElement('div');
  cardbg.className  ='card-bg';
  var cardcontent = document.createElement('div');
  cardcontent.className  ='card-content';
  var title = document.createElement('span');
  title.className  ='title';
  title.textContent = scene_id;
  var des = document.createElement('p');
  des.className  ='description';
  for(var tt in scene_text){
    var br = document.createElement("br");
    des.append(scene_text[tt]);
    des.append(br);
  }
  cardcontent.appendChild(title);
  cardcontent.appendChild(des);
  card.append(cardbg)
  card.append(cardcontent)
  cards.appendChild(card);
}
inputDir = '../../model_results/'
function writeCards(){
  // var reader = new FileReader();
  // fileInput = reader.readAsText(file);
  // var openf1 = fso.OpenTextFile(inputDir+'text.txt');
  // var texts = openf1.ReadAll();
  // var dic = new Array();
  // for(var text in texts){
  //   split_text = text.split('\t');
  //   s_id = split_text[0].trim();
  //   s_text = split_text[1].trim();
  //   if(dic.hasOwnProperty(s_id)){
  //     dic[s_id]+=s_text+'<br>'
  //   }
  //   else {
  //     dic[s_id]=s_text+'<br>'
  //   }
  // }
  for(var k in test_texts){
    writeCard(k,test_texts[k])
  }

}

writeCards()

let cards = document.querySelectorAll('.card');

let x = 1.045;
let y = 1.05;
let duration = 150;
let easing = 'easeOutCubic';

for (let card of cards) {
  let bg = card.querySelector('.card-bg');
  card.addEventListener('mouseenter', event => {
    animate.stop(bg);
    animate({
      el: bg,
      scaleX: x,
      scaleY: y,
      duration: duration,
      easing: easing });

  });

  card.addEventListener('mouseleave', event => {
    animate.stop(bg);
    animate({
      el: bg,
      scaleX: [x, 1],
      scaleY: [y, 1],
      duration: 1000,
      easing: 'easeOutElastic 650' });

  });

  card.addEventListener("click", function(){
    title = card.getElementsByClassName('title')[0].textContent;
    res_arr = ['gt','fm','net','crf'];
    model_res_path = 'model_results/model_results_';
    gallery_main = document.getElementsByClassName('model_img');
    for(var i=0;i<res_arr.length;i++){
      var name = res_arr[i];
      model_path = model_res_path+name+'/'+name+'_'+title+'.png';
      gallery_main[i].src = model_path;
    }
  });

}

