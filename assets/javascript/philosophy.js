var lessons = [
  "Live beneath your means",
  "Return everything you borrow",
  "Stop blaming other people",
  "Admit it when you make a mistake",
  "Give clothes not worn to charity",
  "Do something nice and try not to get caught",
  "Listen more; talk less",
  "Take a 30 min walk daily",
  "Strive for excellence, not perfection",
  "Be on time. Dont make excuses",
  "Dont argue, get organized",
  "Be kind to unkind people",
  "Let someone cut ahead of you in line",
  "Take time to be alone",
  "Cultivate good manners",
  "Be humble",
  "Realize and accept that life isn’t fair",
  "Know when to keep your mouth shut",
  "Go an entire day without criticizing anyone",
  "Learn from the past, plan for the future",
  "Live in the present",
  "Dont sweat the small stuff",
  "Its all small stuff"
];

var lessonDiv = $("#lifeLesson");

// For Loop then loops through our total drink list...
for (var i = 0; i < lessons.length; i++) {
  // It then creates a new div for each drink. Note we create divs and add the content in the same line.
  var newLessonDiv = $("<li>" + lessons[i] + "</li>");

  // It then adds this new div to the drinkList div.
  lessonDiv.append(newLessonDiv);
}
