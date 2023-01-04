

localStorage.setItem("counter", "24");


// called when "Find Motifs!" on anschutz tab button is pressed -- canonical
function findMotifs() {
  localStorage.setItem("counter", "26");
  console.log("26")
  var sequence = document.getElementById("proteins").value;
  cleanedSeq = modify(sequence)
  results = search(cleanedSeq)
  document.getElementById("canonical").innerHTML = results;
}

// clears text and results from first text box
function clearText() {
  document.getElementById("canonical").innerHTML = '';
  document.getElementById("proteins").value = '';
}

// called when score button is pressed
function scoreMotifs(){
  var mot = document.getElementById("8proteins").value;
  if (mot.length != 8){
    document.getElementById("score").innerHTML = "Error- sequence must be 8 characters long";
  }
  else{
    document.getElementById("score").innerHTML = mot + ' -> score of ' + getScore(mot);
  }
  
}

// clears text and results from second text box
function clearText2() {
  document.getElementById("score").innerHTML = '';
  document.getElementById("8proteins").value = '';
}

// called when extended search button is clicked
function extendedSearch(){
  seq = document.getElementById("extended").value
  proteins = modify(seq)


  var motifs = 'Motif, &emsp; Position\<br>'

  for (var i = 0, _pj_a = proteins.length-6; i < _pj_a; i += 1) {

    if (proteins[i] == 'R' && proteins[i+8] == 'G'){

      thisMotif = proteins.substring(i, i+11);

      realIndex = i + 1
      
      motifs = motifs + thisMotif + ', &emsp;' + realIndex + '\<br>';

    }

    else if (proteins[i] == 'R' && proteins[i+7] == 'G'){

      thisMotif = proteins.substring(i, i+10);

      realIndex = i + 1
      
      motifs = motifs + thisMotif + ', &emsp;' + realIndex + '\<br>';

    }

    else if (proteins[i] == 'R' && proteins[i+6] == 'G'){

      thisMotif = proteins.substring(i, i+9);

      realIndex = i + 1
      
      motifs = motifs + thisMotif + ', &emsp;' + realIndex + '\<br>';

    };
    

  };

  document.getElementById("extendedOutput").innerHTML = motifs;

}

// clears extended search output
function clearText3() {
  document.getElementById("extended").value = '';
  document.getElementById("extendedOutput").innerHTML = '';
}

// remove new line characters
function modify(seq) {
    var new_seq;
    new_seq = "";
  
    for (var i = 0, _pj_a = seq.length; i < _pj_a; i += 1) {
      if (seq[i] !== "\n") {
        new_seq = new_seq + seq[i];
      }
    }
  
    return new_seq;
}

// find and score main motifs -- canonical
function search(proteins) {
  //var motifs = ''
  var motifs = 'Motif, &emsp; Position, &emsp; Score \<br>'
  // var scores = []
  // var key_value = [];
  //key_value = {};

  console.log(proteins)

  for (var i = 0, _pj_a = proteins.length-6; i < _pj_a; i += 1) {

    // if a motif is found
    if (proteins[i] == 'R' && proteins[i+5] == 'G' && proteins[i+6] != 'P'){

      thisMotif = proteins.substring(i, i+8);
      thisScore = getScore(thisMotif); 

      realIndex = i + 1
      
      motifs = motifs + thisMotif + ', &emsp;' + realIndex + ', &emsp; ' + thisScore + '\<br>';

      
      //var cont = true;
      //while (cont == true){
      //  for (let i=0; i<key_value.length; i++){
      //    if (key_value[i][1] < thisScore){
      //      cont = false;
      //    };
      //  };
      //  cont = false;
      //};

      //key_value.splice(0,0,[thisMotif, thisScore]);
      
      
    };
  };

  //console.log(key_value);
  //key_value.sort()

  return motifs;
};


function getScore(thisMotif){
  thisScore = 0;

  // read in scoring file
  const myJSON = '{"first":{"P":-0.1295336788,"G":-0.1295336788,"A":-0.1295336788,"V":-0.1295336788,"L":-0.1295336788,"I":-0.1295336788,"M":-0.1295336788,"C":-0.1295336788,"S":-0.1295336788,"T":-0.1295336788,"R":0.2590673575,"K":-0.1295336788,"H":-0.1295336788,"D":-0.1295336788,"E":-0.1295336788,"N":-0.1295336788,"Q":-0.1295336788,"W":-0.1295336788,"F":-0.1295336788,"Y":-0.1295336788}}';
  const scoreSheet = JSON.parse(myJSON);
  var test = scoreSheet.first.R;
  console.log('test = ');
  console.log(test);

  return thisScore;
}