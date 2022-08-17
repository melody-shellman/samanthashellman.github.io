

localStorage.setItem("counter", "24");


// called when "Find Motifs!" on anschutz tab button is pressed
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

    if (i == proteins.length - 8){
      //last seven

      if (proteins[i] == 'R' && (proteins[i+6] == 'G' || proteins[i+7] == 'G')){

        thisMotif = proteins.substring(i, i+8);
  
        realIndex = i + 1
        
        motifs = motifs + thisMotif + ', &emsp;' + realIndex + '\<br>';
  
      };

    }

    else if (i == proteins.length - 7){
      // last six

      if (proteins[i] == 'R' && proteins[i+6] == 'G'){

        thisMotif = proteins.substring(i, i+7);
  
        realIndex = i + 1
        
        motifs = motifs + thisMotif + ', &emsp;' + realIndex + '\<br>';
  
      };
    }

    // if a motif is found
    else if (proteins[i] == 'R' && (proteins[i+6] == 'G' || proteins[i+7] == 'G' || proteins[i+8] == 'G')){

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

// find and score main motifs
function search(proteins) {
  //var motifs = ''
  var motifs = 'Motif, &emsp; Position, &emsp; Score \<br>'
  // var scores = []
  // var key_value = [];
  //key_value = {};

  console.log(proteins)

  for (var i = 0, _pj_a = proteins.length-5; i < _pj_a; i += 1) {

    // if a motif is found
    if (proteins[i] == 'R' && proteins[i+5] == 'G'){

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

  // first position scoring
  switch(thisMotif[0]){
    case 'R':
      thisScore += 3;
      break;
    default:
      thisScore += -3;
  }

  // second position scoring
  switch(thisMotif[1]) {
    case 'P':
      thisScore += 3;
      break;
    case 'G':
      thisScore += 3;
      break;
    case 'A':
      thisScore += 2;
      break;
    case 'V':
      thisScore += 2;
      break;
    case 'L':
      thisScore += 3;
      break;
    case 'I':
      thisScore += 2;
      break;
    case 'M':
      thisScore += 3;
      break;
    case 'C':
      thisScore += 2;
      break;
    case 'S':
      thisScore += 3;
      break;
    case 'T':
      thisScore += 3;
      break;
    case 'R':
      thisScore += 1;
      break;
    case 'K':
      thisScore += 1;
      break;
    case 'H':
      thisScore += 2;
      break;
    case 'D':
      thisScore += 3;
      break;
    case 'E':
      thisScore += 3;
      break;
    case 'N':
      thisScore += 1;
      break;
    case 'Q':
      thisScore += 3;
      break;
    case 'W':
      thisScore += 2;
      break;
    case 'F':
      thisScore += 2;
      break;
    case 'Y':
      thisScore += 3;
      break;
    default:
      thisScore += 0;
  }


  // third position scoring
  switch(thisMotif[2]) {
    case 'P':
      thisScore += 3;
      break;
    case 'G':
      thisScore += 2;
      break;
    case 'A':
      thisScore += 3;
      break;
    case 'V':
      thisScore += 2;
      break;
    case 'L':
      thisScore += 2;
      break;
    case 'I':
      thisScore += 1;
      break;
    case 'M':
      thisScore += 3;
      break;
    case 'C':
      thisScore += 2;
      break;
    case 'S':
      thisScore += 3;
      break;
    case 'T':
      thisScore += 2;
      break;
    case 'R':
      thisScore += 3;
      break;
    case 'K':
      thisScore += 2;
      break;
    case 'H':
      thisScore += 2;
      break;
    case 'D':
      thisScore += 3;
      break;
    case 'E':
      thisScore += 3;
      break;
    case 'N':
      thisScore += 2;
      break;
    case 'Q':
      thisScore += 3;
      break;
    case 'W':
      thisScore += 2;
      break;
    case 'F':
      thisScore += -3;
      break;
    case 'Y':
      thisScore += 1;
      break;
    default:
      thisScore += 0;
  }

  // fourth position scoring
  switch(thisMotif[3]) {
    case 'P':
      thisScore += 2;
      break;
    case 'G':
      thisScore += 3;
      break;
    case 'A':
      thisScore += 1;
      break;
    case 'V':
      thisScore += -3;
      break;
    case 'L':
      thisScore += -3;
      break;
    case 'I':
      thisScore += -3;
      break;
    case 'M':
      thisScore += -3;
      break;
    case 'C':
      thisScore += -1;
      break;
    case 'S':
      thisScore += -3;
      break;
    case 'T':
      thisScore += -3;
      break;
    case 'R':
      thisScore += -3;
      break;
    case 'K':
      thisScore += -3;
      break;
    case 'H':
      thisScore += -3;
      break;
    case 'D':
      thisScore += -3;
      break;
    case 'E':
      thisScore += -3;
      break;
    case 'N':
      thisScore += -3;
      break;
    case 'Q':
      thisScore += -3;
      break;
    case 'W':
      thisScore += -3;
      break;
    case 'F':
      thisScore += -3;
      break;
    case 'Y':
      thisScore += -3;
      break;
    default:
      thisScore += 0;
  }

  // fifth position scoring
  switch(thisMotif[4]) {
    case 'P':
      thisScore += -3;
      break;
    case 'G':
      thisScore += -3;
      break;
    case 'A':
      thisScore += -3;
      break;
    case 'V':
      thisScore += -1;
      break;
    case 'L':
      thisScore += -3;
      break;
    case 'I':
      thisScore += -1;
      break;
    case 'M':
      thisScore += -3;
      break;
    case 'C':
      thisScore += -2;
      break;
    case 'S':
      thisScore += -3;
      break;
    case 'T':
      thisScore += -3;
      break;
    case 'R':
      thisScore += -3;
      break;
    case 'K':
      thisScore += -3;
      break;
    case 'H':
      thisScore += -3;
      break;
    case 'D':
      thisScore += 3;
      break;
    case 'E':
      thisScore += 2;
      break;
    case 'N':
      thisScore += -3;
      break;
    case 'Q':
      thisScore += -1;
      break;
    case 'W':
      thisScore += -3;
      break;
    case 'F':
      thisScore += -3;
      break;
    case 'Y':
      thisScore += -1;
      break;
    default:
      thisScore += 0;
  }

  // sixth position scoring
  switch(thisMotif[5]) {
    case 'G':
      thisScore += 3;
      break;
    default:
      thisScore += -3;
  }

  // seventh position scoring
  switch(thisMotif[6]) {
    case 'P':
      thisScore += -3;
      break;
    case 'G':
      thisScore += 2;
      break;
    case 'A':
      thisScore += 3;
      break;
    case 'V':
      thisScore += 2;
      break;
    case 'L':
      thisScore += 1;
      break;
    case 'I':
      thisScore += 2;
      break;
    case 'M':
      thisScore += 3;
      break;
    case 'C':
      thisScore += 3;
      break;
    case 'S':
      thisScore += 3;
      break;
    case 'T':
      thisScore += 3;
      break;
    case 'R':
      thisScore += 2;
      break;
    case 'K':
      thisScore += 2;
      break;
    case 'H':
      thisScore += 3;
      break;
    case 'D':
      thisScore += 3;
      break;
    case 'E':
      thisScore += 3;
      break;
    case 'N':
      thisScore += 3;
      break;
    case 'Q':
      thisScore += 3;
      break;
    case 'W':
      thisScore += 2;
      break;
    case 'F':
      thisScore += 2;
      break;
    case 'Y':
      thisScore += 2;
      break;
    default:
      thisScore += 0;
  }

  // eighth position scoring
  switch(thisMotif[7]) {
    case 'P':
      thisScore += 2;
      break;
    case 'G':
      thisScore += 1;
      break;
    case 'A':
      thisScore += 2;
      break;
    case 'V':
      thisScore += 1;
      break;
    case 'L':
      thisScore += 1;
      break;
    case 'I':
      thisScore += 1;
      break;
    case 'M':
      thisScore += 1;
      break;
    case 'C':
      thisScore += 2;
      break;
    case 'S':
      thisScore += 2;
      break;
    case 'T':
      thisScore += 1;
      break;
    case 'R':
      thisScore += -2;
      break;
    case 'K':
      thisScore += -2;
      break;
    case 'H':
      thisScore += 1;
      break;
    case 'D':
      thisScore += 3;
      break;
    case 'E':
      thisScore += 3;
      break;
    case 'N':
      thisScore += 2;
      break;
    case 'Q':
      thisScore += 1;
      break;
    case 'W':
      thisScore += -1;
      break;
    case 'F':
      thisScore += 1;
      break;
    case 'Y':
      thisScore += 1;
      break;
    default:
      thisScore += 0;
  }

  return thisScore;
}