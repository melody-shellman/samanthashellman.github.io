
// called when "Find Motifs!" on anschutz tab button is pressed
function findMotifs() {
    var sequence = document.getElementById("proteins").value;
    cleanedSeq = modify(sequence)
    results = search(cleanedSeq)
    document.getElementById("test").innerHTML = results;
}


function clearText() {
  document.getElementById("test").innerHTML = '';
  document.getElementById("proteins").value = '';
}


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


  function search(proteins) {
    //var motifs = ''
    var motifs = 'Motif, Position, Score \<br>'
    var scores = []
    var key_value = [];
    //key_value = {};

    console.log(proteins)

    for (var i = 0, _pj_a = proteins.length-5; i < _pj_a; i += 1) {

      // if a motif is found
      if (proteins[i] == 'R' && proteins[i+5] == 'G'){

        thisMotif = proteins.substring(i, i+8);
        thisScore = 6; // +3 each for R1 and G6
        
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

        // sixth position must be G

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

        realIndex = i + 1
        
        motifs = motifs + thisMotif + ', ' + realIndex + ', ' + thisScore + '\<br>';

        
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