$(document).ready(function(){
function getQuote(){
  var quote = ["You are free, and that is why you are lost.","The meaning of life is that it stops.", "A book must be the ax for the frozen sea within us.", "I am a cage, in search of a bird.", "A non-writing writer is a monster courting insanity.", "Books are a narcotic.", "Slept, awoke, slept, awoke, miserable life.", "Paths are made by walking.", "Now I can look at you in peace; I don't eat you any more.", "I am in chains. Don't touch my chains.", "I usually solve problems by letting them devour me."  ];
  var author = ["- Franz Kafka","- Franz Kafka","- Franz Kafka","- Franz Kafka","- Franz Kafka","- Franz Kafka","- Franz Kafka","- Franz Kafka","- Franz Kafka","- Franz Kafka","- Franz Kafka"];
  var randomNum = Math.floor(Math.random()*quote.length);
  var randomQuote = quote[randomNum];
  var randomAuthor= author[randomNum];
  
  $(".quote").text(randomQuote);
  $(".author").text(randomAuthor);
  
}
 
  $(".get-quote").on("click", function(){
    getQuote();
  })
  
  //audio// 
    var audio = $("#mysoundclip")[0];
      console.log(audio);
  $(".get-quote").click(function() {
      audio.play();
  });
  
});