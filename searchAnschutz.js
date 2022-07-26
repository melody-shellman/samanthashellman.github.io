
// called when "Find Motifs!" on anschutz tab button is pressed
function findMotifs() {
    var sequence = document.getElementById("proteins").value;
    cleanedSeq = modify(sequence)
    document.getElementById("test").innerHTML = cleanedSeq;
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