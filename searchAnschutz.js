
// called when "Find Motifs!" on anschutz tab button is pressed
function findMotifs() {
    var sequence = document.getElementById("proteins").value;
    cleanedSeq = modify(sequence)
    results = search(cleanedSeq)
    document.getElementById("test").innerHTML = results;
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
    var motifs = []

    for (var i = 0, _pj_a = proteins.length-5; i < _pj_a; i += 1) {
      if (proteins[i] == 'R' && proteins[i+5] == 'G'){
        motifs.push(proteins.substring(i, i+6))
      }
    }

    return motifs
  }