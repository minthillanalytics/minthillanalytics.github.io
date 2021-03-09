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
    strings: ['Machine Learning.', 'Business Intelligence.', 'Data Visualization.', 'Deep Learning.', 'ML Applications.', 'Project Management.'],
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
    { "Name": "Predictive Analysis of Retail Sales: Furniture and Home Furnishings", "Link": "https://github.com/Tobi-Ek/Predictive-Analysis-of-Retail-Sales-_-Furniture-and-Home-Furnishings", 'Description': 'Provided valuable data insights for strategic planning on furniture and home furnishings products by carrying out exploratory data analysis using Excel and PowerBI. Finally provided predictive analysis using Holt-Winters model with R programming language in well documented reports.', 'Tech': 'PowerBI | R | RStudio | Timeseries Forecast'},
    { "Name": "Application of Database Systems and Analytics to Covid19 Disease", "Link": "https://github.com/Tobi-Ek/Application-of-Database-Systems-and-Analytics-to-Covid19-Disease", 'Description': 'Used python for web-scrapping data off websites, extracted XML data, stored these data into mongoDB, cleaned and saved the processed data into PostgreSQL and created data visualizations showing the global impact of COVID-19.', 'Tech': 'Python | Webscrapping | MongoDB | PostgreSQL | Pandas | MathLib | MS Excel'},
    { "Name": "Evaluation of Machine Learning Algorithms", "Link": "https://github.com/Tobi-Ek/Evaluation-of-Machine-Learning-Algorithms", 'Description': 'Evaluated five (5) different machine learning models using R programming language on housing price, bank loan and crimes data.', 'Tech': 'R | R Studio'},
    { "Name": "London Underground High-Speed Line Simulation and Optimization", "Link": "https://github.com/Tobi-Ek/Simulation-and-Optimisation-of-HS2-Train-Line-From-London-to-Birmingham", 'Description': 'The project involved discrete event simulation and optimization. The project modelled, simulated and optimized the London Old Oak Commons to Birmingham Interchange section of the London Underground high-speed line.', 'Tech': 'Python | SimPy | Pandas | Numpy'},
	{ "Name": "GreenFinder Deep Learning", "Link": "https://github.com/Tobi-Ek/GreenFinder-Deep-Learning", 'Description': 'Developed an android mobile app (GreenFinder), trained, and evaluated two deep learning image classification models for the use-case. The mobile app classifies scanned fruits, vegetables and flowers, as well as provides knowledgeable information on each classified item.', 'Tech': 'Python | TensorFlow | Keras | TensorFlow Lite | Knowledge Graph | MS Excel | Android Studio'},
  ];

$.each(arr, function (i) {
    var templateString = '<div style="margin:40px" class="card col-lg-5 mx-auto col-sm-12" style="width: 18rem"> <div class="card-body"> <div class="card-title d-flex"><i class="fas fa-folder-open fa-3x mr-auto"></i>  <a href='+ arr[i].Link + '><i class="fab fa-github fa-3x ml-auto"></i></a> </div> <h6 class="card-subtitle mt-2 mb-2 text-muted">' + arr[i].Name +  '</h6> <p class="card-text">' + arr[i].Description + '</p> <p class="card-text text-muted">' + arr[i].Tech + '</p></div></div> ';
    $('#test').append(templateString);
})

