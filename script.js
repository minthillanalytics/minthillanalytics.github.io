let date = new Date;
let hour = date.getHours();
const checkbox = document.getElementById('toggle');



// var str = "<p class = \"introhello\"><h1 class=\"text-primary\">Hello! <span id = \"emoji\" class = \"emoji animated\" onmouseover=\"bounce();\">&#x1f44b;&#x1f3fe;</span></h1> </p> <h2 class=\"introtagline\">I'm<span class=\"text-primary\"> Tobi Ekundayo</span>, a Data Anayst is based in Dublin, Ireland. I am passionate about <strong>providing valuable insights from data and developing innovative machine learning solutions.</strong></h2>",
//     i = 0,
//     isTag,
//     text; 

// (function type() {
//     text = str.slice(0, ++i);
//     if (text === str) return;

//     document.getElementById('typewriter').innerHTML = text;

//     var char = text.slice(-1);
//     if( char === '<' ) isTag = true;
//     if( char === '>' ) isTag = false;

//     if (isTag) return type();
//     setTimeout(type, 145);
// }());

if (hour <= 7 || hour >= 18) {
    document.getElementById('pagestyle').setAttribute('href', "dark.css");
}
else {
    document.getElementById('pagestyle').setAttribute('href', "style.css");
    document.getElementById("toggle").checked = false;
}

checkbox.addEventListener('change', (event) => {
  if (event.target.checked) {
    document.getElementById('pagestyle').setAttribute('href', "dark.css");
  } else {
    document.getElementById('pagestyle').setAttribute('href', "style.css");
  }
})

function shake () {
  const hand = document.getElementById("emoji");
  if (!hand.classList.contains('tada')) {
    hand.classList.toggle("tada", true); 
  }
  else if (hand.classList.contains('tada')) {
    unshake();
  }
}


function unshake() {
  const hand = document.getElementById("emoji");
  hand.classList.toggle("tada", false);
}

const hand = document.getElementById("emoji");


var typed = new Typed('.element', {
    // Waits 1000ms after typing "First"
    strings: ['Data Analysis.', 'Business Intelligence.', 'Machine Learning.', 'Busines Analysis', 'Data Visualization.', 'Deep Learning.', 'Machine Learning Applications.', 'Project Management.'],
    typeSpeed: 100,
    loop: true,
    loopCount: Infinity,
  });

  var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null,    // optional scroll container selector, otherwise use window,
      resetAnimation: true,     // reset animation on end (default is true)
    }
  );
  wow.init();


var arr = [
    { "Name": "TCD Self-Organising Motorway Project", 'Description': 'The “Future Cities” Project in Trinity College Dublin investigates a “Self-Organising Motorway” as a possible approach to reduce congestion on motorways. Aspects of this research were replicated using a simulation model implemented in SimPy v.4.', 'Tech': 'Python | SimPy | Pandas | Numpy'},
    { "Name": "London Underground High-Speed Line Simulation and Optimization", 'Description': 'A simulation for the London Old Oak Commons to Birmingham Interchange section of the high-speed line. The project involved discrete event simulation and optimization.', 'Tech': 'Python | SimPy | Pandas | Numpy'},
    { "Name": "Stochastic Modelling of Warehouse Robots Working Condition", 'Description': 'A technology company operates several large warehouses which are staffed mainly by robots. These robots perform various essential functions, including picking up packages and transporting them to where they are needed. In order for warehouse operations to run efficiently, it is imperative that robots are kept in good working condition.', 'Tech': 'Python | Markov Chain Model | MS Excel'},
    { "Name": "Mobile License Plate Recognition Application", 'Description': 'A machine learning solution designed to verify license plate for law enforcement and control.', 'Tech': 'Python | Deep Learning | Image Processing | Text Recognintion | Database Management'},
	{ "Name": "Personal Finance Book-Keeper", 'Description': 'A machine learning solution designed to update and provide comprehensive personal financial breakdown based on hardcopy and softcopy reciepts.', 'Tech': 'Python | Deep Learning | TensorFlow | Image Processing | Text Recognintion | Flutter | Adobe XD'},
  ];


$.each(arr, function (i) {
    var templateString = '<div style="margin:40px" class="card col-lg-5 mx-auto col-sm-12" style="width: 18rem"> <div class="card-body"> <div class="card-title d-flex"><i class="fas fa-folder-open fa-3x mr-auto"></i> </div> <h6 class="card-subtitle mt-2 mb-2 text-muted">' + arr[i].Name +  '</h6> <p class="card-text">' + arr[i].Description + '</p> <p class="card-text text-muted">' + arr[i].Tech + '</p></div></div> ';
    $('#test').append(templateString);
})


