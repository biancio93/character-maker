const download = document.getElementById('download');
download.addEventListener('click', function(e) {
    const link = document.createElement('a');
    link.download = 'download.png';
    link.href = canvas.toDataURL();
    link.click();
    link.delete;
  });


  function menu_testa() {
    var testa = document.getElementById("menu-testa");
    var main = document.getElementById("main-menu");
    testa.classList.add("active");
    main.classList.remove("active");
  }
  
  function back_testa() {
    var testa = document.getElementById("menu-testa");
    var main = document.getElementById("main-menu");
    testa.classList.remove("active");
    main.classList.add("active");
  }

  function menu_mani() {
    var testa = document.getElementById("menu-mani");
    var main = document.getElementById("main-menu");
    testa.classList.add("active");
    main.classList.remove("active");
  }
  
  function back_mani() {
    var testa = document.getElementById("menu-mani");
    var main = document.getElementById("main-menu");
    testa.classList.remove("active");
    main.classList.add("active");
  }

  function menu_occhi() {
    var testa = document.getElementById("menu-occhi");
    var main = document.getElementById("main-menu");
    testa.classList.add("active");
    main.classList.remove("active");
  }
  
  function back_occhi() {
    var testa = document.getElementById("menu-occhi");
    var main = document.getElementById("main-menu");
    testa.classList.remove("active");
    main.classList.add("active");
  }

  function menu_bocca() {
    var testa = document.getElementById("menu-bocca");
    var main = document.getElementById("main-menu");
    testa.classList.add("active");
    main.classList.remove("active");
  }
  
  function back_bocca() {
    var testa = document.getElementById("menu-bocca");
    var main = document.getElementById("main-menu");
    testa.classList.remove("active");
    main.classList.add("active");
  }

// SELEZIONE TESTA

function display_testa_1(){
    var testa_1 = document.getElementById("Testa_1");
    var testa_2 = document.getElementById("Testa_2");
    var testa_3 = document.getElementById("Testa_3");
    var testa_4 = document.getElementById("Testa_4");
    var testa_5 = document.getElementById("Testo_5");
    var testa_6 = document.getElementById("Testo_6");
    var testa_7 = document.getElementById("Testa_7");
    var testa_8 = document.getElementById("Testa_8");
    var testa_9 = document.getElementById("Testa_9");
    var testa_10 = document.getElementById("Testa_10");
    // pulsanti
    var p_t1 = document.getElementById("container-testa-1");
    var p_t2 = document.getElementById("container-testa-2");
    var p_t3 = document.getElementById("container-testa-3");
    var p_t4 = document.getElementById("container-testa-4");
    var p_t5 = document.getElementById("container-testa-5");
    var p_t6 = document.getElementById("container-testa-6");
    var p_t7 = document.getElementById("container-testa-7");
    var p_t8 = document.getElementById("container-testa-8");
    var p_t9 = document.getElementById("container-testa-9");
    var p_t10 = document.getElementById("container-testa-10");
    if(document.getElementById('p-testa-1').checked) {
        testa_1.classList.remove("hide");
        testa_2.classList.add("hide");
        testa_3.classList.add("hide");
        testa_4.classList.add("hide");
        testa_5.classList.add("hide");
        testa_6.classList.add("hide");
        testa_7.classList.add("hide");
        testa_8.classList.add("hide");
        testa_9.classList.add("hide");
        testa_10.classList.add("hide");
        // pulsanti testa
        p_t1.classList.add("highlight");
        p_t2.classList.remove("highlight");
        p_t3.classList.remove("highlight");
        p_t4.classList.remove("highlight");
        p_t5.classList.remove("highlight");
        p_t6.classList.remove("highlight");
        p_t7.classList.remove("highlight");
        p_t8.classList.remove("highlight");
        p_t9.classList.remove("highlight");
        p_t10.classList.remove("highlight");
      }
    else if(document.getElementById('p-testa-2').checked) {
        testa_1.classList.add("hide");
        testa_2.classList.remove("hide");
        testa_3.classList.add("hide");
        testa_4.classList.add("hide");
        testa_5.classList.add("hide");
        testa_6.classList.add("hide");
        testa_7.classList.add("hide");
        testa_8.classList.add("hide");
        testa_9.classList.add("hide");
        testa_10.classList.add("hide");
        // pulsanti testa
        p_t1.classList.remove("highlight");
        p_t2.classList.add("highlight");
        p_t3.classList.remove("highlight");
        p_t4.classList.remove("highlight");
        p_t5.classList.remove("highlight");
        p_t6.classList.remove("highlight");
        p_t7.classList.remove("highlight");
        p_t8.classList.remove("highlight");
        p_t9.classList.remove("highlight");
        p_t10.classList.remove("highlight");
      }
    else if(document.getElementById('p-testa-3').checked) {
        testa_1.classList.add("hide");
        testa_2.classList.add("hide");
        testa_3.classList.remove("hide");
        testa_4.classList.add("hide");
        testa_5.classList.add("hide");
        testa_6.classList.add("hide");
        testa_7.classList.add("hide");
        testa_8.classList.add("hide");
        testa_9.classList.add("hide");
        testa_10.classList.add("hide");
        // pulsanti testa
        p_t1.classList.remove("highlight");
        p_t2.classList.remove("highlight");
        p_t3.classList.add("highlight");
        p_t4.classList.remove("highlight");
        p_t5.classList.remove("highlight");
        p_t6.classList.remove("highlight");
        p_t7.classList.remove("highlight");
        p_t8.classList.remove("highlight");
        p_t9.classList.remove("highlight");
        p_t10.classList.remove("highlight");
      }
    else if(document.getElementById('p-testa-4').checked) {
        testa_1.classList.add("hide");
        testa_2.classList.add("hide");
        testa_3.classList.add("hide");
        testa_4.classList.remove("hide");
        testa_5.classList.add("hide");
        testa_6.classList.add("hide");
        testa_7.classList.add("hide");
        testa_8.classList.add("hide");
        testa_9.classList.add("hide");
        testa_10.classList.add("hide");
        // pulsanti testa
        p_t1.classList.remove("highlight");
        p_t2.classList.remove("highlight");
        p_t3.classList.remove("highlight");
        p_t4.classList.add("highlight");
        p_t5.classList.remove("highlight");
        p_t6.classList.remove("highlight");
        p_t7.classList.remove("highlight");
        p_t8.classList.remove("highlight");
        p_t9.classList.remove("highlight");
        p_t10.classList.remove("highlight");
      }
    else if(document.getElementById('p-testa-5').checked) {
        testa_1.classList.add("hide");
        testa_2.classList.add("hide");
        testa_3.classList.add("hide");
        testa_4.classList.add("hide");
        testa_5.classList.remove("hide");
        testa_6.classList.add("hide");
        testa_7.classList.add("hide");
        testa_8.classList.add("hide");
        testa_9.classList.add("hide");
        testa_10.classList.add("hide");
        // pulsanti testa
        p_t1.classList.remove("highlight");
        p_t2.classList.remove("highlight");
        p_t3.classList.remove("highlight");
        p_t4.classList.remove("highlight");
        p_t5.classList.add("highlight");
        p_t6.classList.remove("highlight");
        p_t7.classList.remove("highlight");
        p_t8.classList.remove("highlight");
        p_t9.classList.remove("highlight");
        p_t10.classList.remove("highlight");
      }
    else if(document.getElementById('p-testa-6').checked) {
        testa_1.classList.add("hide");
        testa_2.classList.add("hide");
        testa_3.classList.add("hide");
        testa_4.classList.add("hide");
        testa_5.classList.add("hide");
        testa_6.classList.remove("hide");
        testa_7.classList.add("hide");
        testa_8.classList.add("hide");
        testa_9.classList.add("hide");
        testa_10.classList.add("hide");
        // pulsanti testa
        p_t1.classList.remove("highlight");
        p_t2.classList.remove("highlight");
        p_t3.classList.remove("highlight");
        p_t4.classList.remove("highlight");
        p_t5.classList.remove("highlight");
        p_t6.classList.add("highlight");
        p_t7.classList.remove("highlight");
        p_t8.classList.remove("highlight");
        p_t9.classList.remove("highlight");
        p_t10.classList.remove("highlight");
      }
    else if(document.getElementById('p-testa-7').checked) {
        testa_1.classList.add("hide");
        testa_2.classList.add("hide");
        testa_3.classList.add("hide");
        testa_4.classList.add("hide");
        testa_5.classList.add("hide");
        testa_6.classList.add("hide");
        testa_7.classList.remove("hide");
        testa_8.classList.add("hide");
        testa_9.classList.add("hide");
        testa_10.classList.add("hide");
        // pulsanti testa
        p_t1.classList.remove("highlight");
        p_t2.classList.remove("highlight");
        p_t3.classList.remove("highlight");
        p_t4.classList.remove("highlight");
        p_t5.classList.remove("highlight");
        p_t6.classList.remove("highlight");
        p_t7.classList.add("highlight");
        p_t8.classList.remove("highlight");
        p_t9.classList.remove("highlight");
        p_t10.classList.remove("highlight");
      }
    else if(document.getElementById('p-testa-8').checked) {
        testa_1.classList.add("hide");
        testa_2.classList.add("hide");
        testa_3.classList.add("hide");
        testa_4.classList.add("hide");
        testa_5.classList.add("hide");
        testa_6.classList.add("hide");
        testa_7.classList.add("hide");
        testa_8.classList.remove("hide");
        testa_9.classList.add("hide");
        testa_10.classList.add("hide");
        // pulsanti testa
        p_t1.classList.remove("highlight");
        p_t2.classList.remove("highlight");
        p_t3.classList.remove("highlight");
        p_t4.classList.remove("highlight");
        p_t5.classList.remove("highlight");
        p_t6.classList.remove("highlight");
        p_t7.classList.remove("highlight");
        p_t8.classList.add("highlight");
        p_t9.classList.remove("highlight");
        p_t10.classList.remove("highlight");
      }
    else if(document.getElementById('p-testa-9').checked) {
        testa_1.classList.add("hide");
        testa_2.classList.add("hide");
        testa_3.classList.add("hide");
        testa_4.classList.add("hide");
        testa_5.classList.add("hide");
        testa_6.classList.add("hide");
        testa_7.classList.add("hide");
        testa_8.classList.add("hide");
        testa_9.classList.remove("hide");
        testa_10.classList.add("hide");
        // pulsanti testa
        p_t1.classList.remove("highlight");
        p_t2.classList.remove("highlight");
        p_t3.classList.remove("highlight");
        p_t4.classList.remove("highlight");
        p_t5.classList.remove("highlight");
        p_t6.classList.remove("highlight");
        p_t7.classList.remove("highlight");
        p_t8.classList.remove("highlight");
        p_t9.classList.add("highlight");
        p_t10.classList.remove("highlight");
      }
    else if(document.getElementById('p-testa-10').checked) {
        testa_1.classList.add("hide");
        testa_2.classList.add("hide");
        testa_3.classList.add("hide");
        testa_4.classList.add("hide");
        testa_5.classList.add("hide");
        testa_6.classList.add("hide");
        testa_7.classList.add("hide");
        testa_8.classList.add("hide");
        testa_9.classList.add("hide");
        testa_10.classList.remove("hide");
        // pulsanti testa
        p_t1.classList.remove("highlight");
        p_t2.classList.remove("highlight");
        p_t3.classList.remove("highlight");
        p_t4.classList.remove("highlight");
        p_t5.classList.remove("highlight");
        p_t6.classList.remove("highlight");
        p_t7.classList.remove("highlight");
        p_t8.classList.remove("highlight");
        p_t9.classList.remove("highlight");
        p_t10.classList.add("highlight");
      }
    }

// SELEZIONE OCCHI
function display_occhi_1(){
    var occhi_1 = document.getElementById("Occhi_1");
    var occhi_2 = document.getElementById("Occhi_2");
    var occhi_3 = document.getElementById("Occhi_3");
    var occhi_4 = document.getElementById("Occhi_4");
    var occhi_5 = document.getElementById("Occhi_5");
    var occhi_6 = document.getElementById("Occhi_7");
    var occhi_7 = document.getElementById("Occhi_8");
    var occhi_8 = document.getElementById("Occhi_9");
    var occhi_9 = document.getElementById("Occhi_10");
    // pulsanti
    var p_o1 = document.getElementById("container-occhi-1");
    var p_o2 = document.getElementById("container-occhi-2");
    var p_o3 = document.getElementById("container-occhi-3");
    var p_o4 = document.getElementById("container-occhi-4");
    var p_o5 = document.getElementById("container-occhi-5");
    var p_o7 = document.getElementById("container-occhi-6");
    var p_o8 = document.getElementById("container-occhi-7");
    var p_o9 = document.getElementById("container-occhi-8");
    var p_o10 = document.getElementById("container-occhi-9");
    if(document.getElementById('p-occhi-1').checked) {
        occhi_1.classList.remove("hide");
        occhi_2.classList.add("hide");
        occhi_3.classList.add("hide");
        occhi_4.classList.add("hide");
        occhi_5.classList.add("hide");
        occhi_6.classList.add("hide");
        occhi_7.classList.add("hide");
        occhi_8.classList.add("hide");
        occhi_9.classList.add("hide");
        // pulsanti testa
        p_o1.classList.add("highlight");
        p_o2.classList.remove("highlight");
        p_o3.classList.remove("highlight");
        p_o4.classList.remove("highlight");
        p_o5.classList.remove("highlight");
        p_o7.classList.remove("highlight");
        p_o8.classList.remove("highlight");
        p_o9.classList.remove("highlight");
        p_o10.classList.remove("highlight");
      }
     else if(document.getElementById('p-occhi-2').checked) {
        occhi_1.classList.add("hide");
        occhi_2.classList.remove("hide");
        occhi_3.classList.add("hide");
        occhi_4.classList.add("hide");
        occhi_5.classList.add("hide");
        occhi_6.classList.add("hide");
        occhi_7.classList.add("hide");
        occhi_8.classList.add("hide");
        occhi_9.classList.add("hide");
        // pulsanti testa
        p_o1.classList.remove("highlight");
        p_o2.classList.add("highlight");
        p_o3.classList.remove("highlight");
        p_o4.classList.remove("highlight");
        p_o5.classList.remove("highlight");
        p_o7.classList.remove("highlight");
        p_o8.classList.remove("highlight");
        p_o9.classList.remove("highlight");
        p_o10.classList.remove("highlight");
      }
      else if(document.getElementById('p-occhi-3').checked) {
        occhi_1.classList.add("hide");
        occhi_2.classList.add("hide");
        occhi_3.classList.remove("hide");
        occhi_4.classList.add("hide");
        occhi_5.classList.add("hide");
        occhi_6.classList.add("hide");
        occhi_7.classList.add("hide");
        occhi_8.classList.add("hide");
        occhi_9.classList.add("hide");
        // pulsanti testa
        p_o1.classList.remove("highlight");
        p_o2.classList.remove("highlight");
        p_o3.classList.add("highlight");
        p_o4.classList.remove("highlight");
        p_o5.classList.remove("highlight");
        p_o7.classList.remove("highlight");
        p_o8.classList.remove("highlight");
        p_o9.classList.remove("highlight");
        p_o10.classList.remove("highlight");
      }
      else if(document.getElementById('p-occhi-4').checked) {
        occhi_1.classList.add("hide");
        occhi_2.classList.add("hide");
        occhi_3.classList.add("hide");
        occhi_4.classList.remove("hide");
        occhi_5.classList.add("hide");
        occhi_6.classList.add("hide");
        occhi_7.classList.add("hide");
        occhi_8.classList.add("hide");
        occhi_9.classList.add("hide");
        // pulsanti testa
        p_o1.classList.remove("highlight");
        p_o2.classList.remove("highlight");
        p_o3.classList.remove("highlight");
        p_o4.classList.add("highlight");
        p_o5.classList.remove("highlight");
        p_o7.classList.remove("highlight");
        p_o8.classList.remove("highlight");
        p_o9.classList.remove("highlight");
        p_o10.classList.remove("highlight");
      }
      else if(document.getElementById('p-occhi-5').checked) {
        occhi_1.classList.add("hide");
        occhi_2.classList.add("hide");
        occhi_3.classList.add("hide");
        occhi_4.classList.add("hide");
        occhi_5.classList.remove("hide");
        occhi_6.classList.add("hide");
        occhi_7.classList.add("hide");
        occhi_8.classList.add("hide");
        occhi_9.classList.add("hide");
        // pulsanti testa
        p_o1.classList.remove("highlight");
        p_o2.classList.remove("highlight");
        p_o3.classList.remove("highlight");
        p_o4.classList.remove("highlight");
        p_o5.classList.add("highlight");
        p_o7.classList.remove("highlight");
        p_o8.classList.remove("highlight");
        p_o9.classList.remove("highlight");
        p_o10.classList.remove("highlight");
      }
      else if(document.getElementById('p-occhi-6').checked) {
        occhi_1.classList.add("hide");
        occhi_2.classList.add("hide");
        occhi_3.classList.add("hide");
        occhi_4.classList.add("hide");
        occhi_5.classList.add("hide");
        occhi_6.classList.remove("hide");
        occhi_7.classList.add("hide");
        occhi_8.classList.add("hide");
        occhi_9.classList.add("hide");
        // pulsanti testa
        p_o1.classList.remove("highlight");
        p_o2.classList.remove("highlight");
        p_o3.classList.remove("highlight");
        p_o4.classList.remove("highlight");
        p_o5.classList.remove("highlight");
        p_o7.classList.add("highlight");
        p_o8.classList.remove("highlight");
        p_o9.classList.remove("highlight");
        p_o10.classList.remove("highlight");
      }
      else if(document.getElementById('p-occhi-7').checked) {
        occhi_1.classList.add("hide");
        occhi_2.classList.add("hide");
        occhi_3.classList.add("hide");
        occhi_4.classList.add("hide");
        occhi_5.classList.add("hide");
        occhi_6.classList.add("hide");
        occhi_7.classList.remove("hide");
        occhi_8.classList.add("hide");
        occhi_9.classList.add("hide");
        // pulsanti testa
        p_o1.classList.remove("highlight");
        p_o2.classList.remove("highlight");
        p_o3.classList.remove("highlight");
        p_o4.classList.remove("highlight");
        p_o5.classList.remove("highlight");
        p_o7.classList.remove("highlight");
        p_o8.classList.add("highlight");
        p_o9.classList.remove("highlight");
        p_o10.classList.remove("highlight");
      }
      else if(document.getElementById('p-occhi-8').checked) {
        occhi_1.classList.add("hide");
        occhi_2.classList.add("hide");
        occhi_3.classList.add("hide");
        occhi_4.classList.add("hide");
        occhi_5.classList.add("hide");
        occhi_6.classList.add("hide");
        occhi_7.classList.add("hide");
        occhi_8.classList.remove("hide");
        occhi_9.classList.add("hide");
        // pulsanti testa
        p_o1.classList.remove("highlight");
        p_o2.classList.remove("highlight");
        p_o3.classList.remove("highlight");
        p_o4.classList.remove("highlight");
        p_o5.classList.remove("highlight");
        p_o7.classList.remove("highlight");
        p_o8.classList.remove("highlight");
        p_o9.classList.add("highlight");
        p_o10.classList.remove("highlight");
      }
      else if(document.getElementById('p-occhi-9').checked) {
        occhi_1.classList.add("hide");
        occhi_2.classList.add("hide");
        occhi_3.classList.add("hide");
        occhi_4.classList.add("hide");
        occhi_5.classList.add("hide");
        occhi_6.classList.add("hide");
        occhi_7.classList.add("hide");
        occhi_8.classList.add("hide");
        occhi_9.classList.remove("hide");
        // pulsanti testa
        p_o1.classList.remove("highlight");
        p_o2.classList.remove("highlight");
        p_o3.classList.remove("highlight");
        p_o4.classList.remove("highlight");
        p_o5.classList.remove("highlight");
        p_o7.classList.remove("highlight");
        p_o8.classList.remove("highlight");
        p_o9.classList.remove("highlight");
        p_o10.classList.add("highlight");
      }
}

// SELEZIONE TESTA

function display_bocca_1(){
    var bocca_1 = document.getElementById("Bocca_1");
    var bocca_2 = document.getElementById("Bocca_2");
    var bocca_3 = document.getElementById("Bocca_3");
    var bocca_4 = document.getElementById("Bocca_4");
    var bocca_5 = document.getElementById("Bocca_5");
    var bocca_6 = document.getElementById("Bocca_6");
    var bocca_7 = document.getElementById("Bocca_7");
    var bocca_8 = document.getElementById("Bocca_8");
    var bocca_9 = document.getElementById("Bocca_9");
    var bocca_10 = document.getElementById("Bocca_10");
    // pulsanti
    var p_b1 = document.getElementById("container-bocca-1");
    var p_b2 = document.getElementById("container-bocca-2");
    var p_b3 = document.getElementById("container-bocca-3");
    var p_b4 = document.getElementById("container-bocca-4");
    var p_b5 = document.getElementById("container-bocca-5");
    var p_b6 = document.getElementById("container-bocca-6");
    var p_b7 = document.getElementById("container-bocca-7");
    var p_b8 = document.getElementById("container-bocca-8");
    var p_b9 = document.getElementById("container-bocca-9");
    var p_b10 = document.getElementById("container-bocca-10");
    if(document.getElementById('p-bocca-1').checked) {
        bocca_1.classList.remove("hide");
        bocca_2.classList.add("hide");
        bocca_3.classList.add("hide");
        bocca_4.classList.add("hide");
        bocca_5.classList.add("hide");
        bocca_6.classList.add("hide");
        bocca_7.classList.add("hide");
        bocca_8.classList.add("hide");
        bocca_9.classList.add("hide");
        bocca_10.classList.add("hide");
        // pulsanti testa
        p_b1.classList.add("highlight");
        p_b2.classList.remove("highlight");
        p_b3.classList.remove("highlight");
        p_b4.classList.remove("highlight");
        p_b5.classList.remove("highlight");
        p_b6.classList.remove("highlight");
        p_b7.classList.remove("highlight");
        p_b8.classList.remove("highlight");
        p_b9.classList.remove("highlight");
        p_b10.classList.remove("highlight");
      }
      else if(document.getElementById('p-bocca-2').checked) {
        bocca_1.classList.add("hide");
        bocca_2.classList.remove("hide");
        bocca_3.classList.add("hide");
        bocca_4.classList.add("hide");
        bocca_5.classList.add("hide");
        bocca_6.classList.add("hide");
        bocca_7.classList.add("hide");
        bocca_8.classList.add("hide");
        bocca_9.classList.add("hide");
        bocca_10.classList.add("hide");
        // pulsanti testa
        p_b1.classList.remove("highlight");
        p_b2.classList.add("highlight");
        p_b3.classList.remove("highlight");
        p_b4.classList.remove("highlight");
        p_b5.classList.remove("highlight");
        p_b6.classList.remove("highlight");
        p_b7.classList.remove("highlight");
        p_b8.classList.remove("highlight");
        p_b9.classList.remove("highlight");
        p_b10.classList.remove("highlight");
      }
      else if(document.getElementById('p-bocca-3').checked) {
        bocca_1.classList.add("hide");
        bocca_2.classList.add("hide");
        bocca_3.classList.remove("hide");
        bocca_4.classList.add("hide");
        bocca_5.classList.add("hide");
        bocca_6.classList.add("hide");
        bocca_7.classList.add("hide");
        bocca_8.classList.add("hide");
        bocca_9.classList.add("hide");
        bocca_10.classList.add("hide");
        // pulsanti testa
        p_b1.classList.remove("highlight");
        p_b2.classList.remove("highlight");
        p_b3.classList.add("highlight");
        p_b4.classList.remove("highlight");
        p_b5.classList.remove("highlight");
        p_b6.classList.remove("highlight");
        p_b7.classList.remove("highlight");
        p_b8.classList.remove("highlight");
        p_b9.classList.remove("highlight");
        p_b10.classList.remove("highlight");
      }
      else if(document.getElementById('p-bocca-4').checked) {
        bocca_1.classList.add("hide");
        bocca_2.classList.add("hide");
        bocca_3.classList.add("hide");
        bocca_4.classList.remove("hide");
        bocca_5.classList.add("hide");
        bocca_6.classList.add("hide");
        bocca_7.classList.add("hide");
        bocca_8.classList.add("hide");
        bocca_9.classList.add("hide");
        bocca_10.classList.add("hide");
        // pulsanti testa
        p_b1.classList.remove("highlight");
        p_b2.classList.remove("highlight");
        p_b3.classList.remove("highlight");
        p_b4.classList.add("highlight");
        p_b5.classList.remove("highlight");
        p_b6.classList.remove("highlight");
        p_b7.classList.remove("highlight");
        p_b8.classList.remove("highlight");
        p_b9.classList.remove("highlight");
        p_b10.classList.remove("highlight");
      }
      else if(document.getElementById('p-bocca-5').checked) {
        bocca_1.classList.add("hide");
        bocca_2.classList.add("hide");
        bocca_3.classList.add("hide");
        bocca_4.classList.add("hide");
        bocca_5.classList.remove("hide");
        bocca_6.classList.add("hide");
        bocca_7.classList.add("hide");
        bocca_8.classList.add("hide");
        bocca_9.classList.add("hide");
        bocca_10.classList.add("hide");
        // pulsanti testa
        p_b1.classList.remove("highlight");
        p_b2.classList.remove("highlight");
        p_b3.classList.remove("highlight");
        p_b4.classList.remove("highlight");
        p_b5.classList.add("highlight");
        p_b6.classList.remove("highlight");
        p_b7.classList.remove("highlight");
        p_b8.classList.remove("highlight");
        p_b9.classList.remove("highlight");
        p_b10.classList.remove("highlight");
      }
      else if(document.getElementById('p-bocca-6').checked) {
        bocca_1.classList.add("hide");
        bocca_2.classList.add("hide");
        bocca_3.classList.add("hide");
        bocca_4.classList.add("hide");
        bocca_5.classList.add("hide");
        bocca_6.classList.remove("hide");
        bocca_7.classList.add("hide");
        bocca_8.classList.add("hide");
        bocca_9.classList.add("hide");
        bocca_10.classList.add("hide");
        // pulsanti testa
        p_b1.classList.remove("highlight");
        p_b2.classList.remove("highlight");
        p_b3.classList.remove("highlight");
        p_b4.classList.remove("highlight");
        p_b5.classList.remove("highlight");
        p_b6.classList.add("highlight");
        p_b7.classList.remove("highlight");
        p_b8.classList.remove("highlight");
        p_b9.classList.remove("highlight");
        p_b10.classList.remove("highlight");
      }
      else if(document.getElementById('p-bocca-7').checked) {
        bocca_1.classList.add("hide");
        bocca_2.classList.add("hide");
        bocca_3.classList.add("hide");
        bocca_4.classList.add("hide");
        bocca_5.classList.add("hide");
        bocca_6.classList.add("hide");
        bocca_7.classList.remove("hide");
        bocca_8.classList.add("hide");
        bocca_9.classList.add("hide");
        bocca_10.classList.add("hide");
        // pulsanti testa
        p_b1.classList.remove("highlight");
        p_b2.classList.remove("highlight");
        p_b3.classList.remove("highlight");
        p_b4.classList.remove("highlight");
        p_b5.classList.remove("highlight");
        p_b6.classList.remove("highlight");
        p_b7.classList.add("highlight");
        p_b8.classList.remove("highlight");
        p_b9.classList.remove("highlight");
        p_b10.classList.remove("highlight");
      }
      else if(document.getElementById('p-bocca-8').checked) {
        bocca_1.classList.add("hide");
        bocca_2.classList.add("hide");
        bocca_3.classList.add("hide");
        bocca_4.classList.add("hide");
        bocca_5.classList.add("hide");
        bocca_6.classList.add("hide");
        bocca_7.classList.add("hide");
        bocca_8.classList.remove("hide");
        bocca_9.classList.add("hide");
        bocca_10.classList.add("hide");
        // pulsanti testa
        p_b1.classList.remove("highlight");
        p_b2.classList.remove("highlight");
        p_b3.classList.remove("highlight");
        p_b4.classList.remove("highlight");
        p_b5.classList.remove("highlight");
        p_b6.classList.remove("highlight");
        p_b7.classList.remove("highlight");
        p_b8.classList.add("highlight");
        p_b9.classList.remove("highlight");
        p_b10.classList.remove("highlight");
      }
      else if(document.getElementById('p-bocca-9').checked) {
        bocca_1.classList.add("hide");
        bocca_2.classList.add("hide");
        bocca_3.classList.add("hide");
        bocca_4.classList.add("hide");
        bocca_5.classList.add("hide");
        bocca_6.classList.add("hide");
        bocca_7.classList.add("hide");
        bocca_8.classList.add("hide");
        bocca_9.classList.remove("hide");
        bocca_10.classList.add("hide");
        // pulsanti testa
        p_b1.classList.remove("highlight");
        p_b2.classList.remove("highlight");
        p_b3.classList.remove("highlight");
        p_b4.classList.remove("highlight");
        p_b5.classList.remove("highlight");
        p_b6.classList.remove("highlight");
        p_b7.classList.remove("highlight");
        p_b8.classList.remove("highlight");
        p_b9.classList.add("highlight");
        p_b10.classList.remove("highlight");
      }
      else if(document.getElementById('p-bocca-10').checked) {
        bocca_1.classList.add("hide");
        bocca_2.classList.add("hide");
        bocca_3.classList.add("hide");
        bocca_4.classList.add("hide");
        bocca_5.classList.add("hide");
        bocca_6.classList.add("hide");
        bocca_7.classList.add("hide");
        bocca_8.classList.add("hide");
        bocca_9.classList.add("hide");
        bocca_10.classList.remove("hide");
        // pulsanti testa
        p_b1.classList.remove("highlight");
        p_b2.classList.remove("highlight");
        p_b3.classList.remove("highlight");
        p_b4.classList.remove("highlight");
        p_b5.classList.remove("highlight");
        p_b6.classList.remove("highlight");
        p_b7.classList.remove("highlight");
        p_b8.classList.remove("highlight");
        p_b9.classList.remove("highlight");
        p_b10.classList.add("highlight");
      }
}

// SELEZIONE MANI
function display_mani_1(){
    var mani_1 = document.getElementById("Mano_1");
    var mani_2 = document.getElementById("Mano_2");
    var mani_3 = document.getElementById("Mano_3");
    var mani_4 = document.getElementById("mano_4");
    var mani_5 = document.getElementById("Mano_5");
    var mani_6 = document.getElementById("Mano_6");
    var mani_7 = document.getElementById("Mano_7");
    var mani_8 = document.getElementById("Mano_8");
    var mani_9 = document.getElementById("Mano_9");
    // pulsanti
    var p_m1 = document.getElementById("container-mani-1");
    var p_m2 = document.getElementById("container-mani-2");
    var p_m3 = document.getElementById("container-mani-3");
    var p_m4 = document.getElementById("container-mani-4");
    var p_m5 = document.getElementById("container-mani-5");
    var p_m6 = document.getElementById("container-mani-6");
    var p_m7 = document.getElementById("container-mani-7");
    var p_m8 = document.getElementById("container-mani-8");
    var p_m9 = document.getElementById("container-mani-9");
    if(document.getElementById('p-mani-1').checked) {
        mani_1.classList.remove("hide");
        mani_2.classList.add("hide");
        mani_3.classList.add("hide");
        mani_4.classList.add("hide");
        mani_5.classList.add("hide");
        mani_6.classList.add("hide");
        mani_7.classList.add("hide");
        mani_8.classList.add("hide");
        mani_9.classList.add("hide");
        // pulsanti testa
        p_m1.classList.add("highlight");
        p_m2.classList.remove("highlight");
        p_m3.classList.remove("highlight");
        p_m4.classList.remove("highlight");
        p_m5.classList.remove("highlight");
        p_m6.classList.remove("highlight");
        p_m7.classList.remove("highlight");
        p_m8.classList.remove("highlight");
        p_m9.classList.remove("highlight");
      }
      else if(document.getElementById('p-mani-2').checked) {
        mani_1.classList.add("hide");
        mani_2.classList.remove("hide");
        mani_3.classList.add("hide");
        mani_4.classList.add("hide");
        mani_5.classList.add("hide");
        mani_6.classList.add("hide");
        mani_7.classList.add("hide");
        mani_8.classList.add("hide");
        mani_9.classList.add("hide");
        // pulsanti testa
        p_m1.classList.remove("highlight");
        p_m2.classList.add("highlight");
        p_m3.classList.remove("highlight");
        p_m4.classList.remove("highlight");
        p_m5.classList.remove("highlight");
        p_m6.classList.remove("highlight");
        p_m7.classList.remove("highlight");
        p_m8.classList.remove("highlight");
        p_m9.classList.remove("highlight");
      }
      else if(document.getElementById('p-mani-3').checked) {
        mani_1.classList.add("hide");
        mani_2.classList.add("hide");
        mani_3.classList.remove("hide");
        mani_4.classList.add("hide");
        mani_5.classList.add("hide");
        mani_6.classList.add("hide");
        mani_7.classList.add("hide");
        mani_8.classList.add("hide");
        mani_9.classList.add("hide");
        // pulsanti testa
        p_m1.classList.remove("highlight");
        p_m2.classList.remove("highlight");
        p_m3.classList.add("highlight");
        p_m4.classList.remove("highlight");
        p_m5.classList.remove("highlight");
        p_m6.classList.remove("highlight");
        p_m7.classList.remove("highlight");
        p_m8.classList.remove("highlight");
        p_m9.classList.remove("highlight");
      }
      else if(document.getElementById('p-mani-4').checked) {
        mani_1.classList.add("hide");
        mani_2.classList.add("hide");
        mani_3.classList.add("hide");
        mani_4.classList.remove("hide");
        mani_5.classList.add("hide");
        mani_6.classList.add("hide");
        mani_7.classList.add("hide");
        mani_8.classList.add("hide");
        mani_9.classList.add("hide");
        // pulsanti testa
        p_m1.classList.remove("highlight");
        p_m2.classList.remove("highlight");
        p_m3.classList.remove("highlight");
        p_m4.classList.add("highlight");
        p_m5.classList.remove("highlight");
        p_m6.classList.remove("highlight");
        p_m7.classList.remove("highlight");
        p_m8.classList.remove("highlight");
        p_m9.classList.remove("highlight");
      }
      else if(document.getElementById('p-mani-5').checked) {
        mani_1.classList.add("hide");
        mani_2.classList.add("hide");
        mani_3.classList.add("hide");
        mani_4.classList.add("hide");
        mani_5.classList.remove("hide");
        mani_6.classList.add("hide");
        mani_7.classList.add("hide");
        mani_8.classList.add("hide");
        mani_9.classList.add("hide");
        // pulsanti testa
        p_m1.classList.remove("highlight");
        p_m2.classList.remove("highlight");
        p_m3.classList.remove("highlight");
        p_m4.classList.remove("highlight");
        p_m5.classList.add("highlight");
        p_m6.classList.remove("highlight");
        p_m7.classList.remove("highlight");
        p_m8.classList.remove("highlight");
        p_m9.classList.remove("highlight");
      }
      else if(document.getElementById('p-mani-6').checked) {
        mani_1.classList.add("hide");
        mani_2.classList.add("hide");
        mani_3.classList.add("hide");
        mani_4.classList.add("hide");
        mani_5.classList.add("hide");
        mani_6.classList.remove("hide");
        mani_7.classList.add("hide");
        mani_8.classList.add("hide");
        mani_9.classList.add("hide");
        // pulsanti testa
        p_m1.classList.remove("highlight");
        p_m2.classList.remove("highlight");
        p_m3.classList.remove("highlight");
        p_m4.classList.remove("highlight");
        p_m5.classList.remove("highlight");
        p_m6.classList.add("highlight");
        p_m7.classList.remove("highlight");
        p_m8.classList.remove("highlight");
        p_m9.classList.remove("highlight");
      }
      else if(document.getElementById('p-mani-7').checked) {
        mani_1.classList.add("hide");
        mani_2.classList.add("hide");
        mani_3.classList.add("hide");
        mani_4.classList.add("hide");
        mani_5.classList.add("hide");
        mani_6.classList.add("hide");
        mani_7.classList.remove("hide");
        mani_8.classList.add("hide");
        mani_9.classList.add("hide");
        // pulsanti testa
        p_m1.classList.remove("highlight");
        p_m2.classList.remove("highlight");
        p_m3.classList.remove("highlight");
        p_m4.classList.remove("highlight");
        p_m5.classList.remove("highlight");
        p_m6.classList.remove("highlight");
        p_m7.classList.add("highlight");
        p_m8.classList.remove("highlight");
        p_m9.classList.remove("highlight");
      }
      else if(document.getElementById('p-mani-8').checked) {
        mani_1.classList.add("hide");
        mani_2.classList.add("hide");
        mani_3.classList.add("hide");
        mani_4.classList.add("hide");
        mani_5.classList.add("hide");
        mani_6.classList.add("hide");
        mani_7.classList.add("hide");
        mani_8.classList.remove("hide");
        mani_9.classList.add("hide");
        // pulsanti testa
        p_m1.classList.remove("highlight");
        p_m2.classList.remove("highlight");
        p_m3.classList.remove("highlight");
        p_m4.classList.remove("highlight");
        p_m5.classList.remove("highlight");
        p_m6.classList.remove("highlight");
        p_m7.classList.remove("highlight");
        p_m8.classList.add("highlight");
        p_m9.classList.remove("highlight");
      }
      else if(document.getElementById('p-mani-9').checked) {
        mani_1.classList.add("hide");
        mani_2.classList.add("hide");
        mani_3.classList.add("hide");
        mani_4.classList.add("hide");
        mani_5.classList.add("hide");
        mani_6.classList.add("hide");
        mani_7.classList.add("hide");
        mani_8.classList.add("hide");
        mani_9.classList.remove("hide");
        // pulsanti testa
        p_m1.classList.remove("highlight");
        p_m2.classList.remove("highlight");
        p_m3.classList.remove("highlight");
        p_m4.classList.remove("highlight");
        p_m5.classList.remove("highlight");
        p_m6.classList.remove("highlight");
        p_m7.classList.remove("highlight");
        p_m8.classList.remove("highlight");
        p_m9.classList.add("highlight");
      }
}



// TEST RIMUOVI ELEMENTI

function removeElementsByClass(){
    var elements = document.getElementsByClassName('hide');
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
    var testa = document.getElementById("salvataggio");
    testa.classList.add("open");
    var overlay = document.getElementById("color-overlay");
    overlay.classList.add("overlay-open");
}

