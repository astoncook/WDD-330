const links = [{
    label: 'Week 1 Notes',
    url: 'week1.html',
  }, // you can add other tags if you like 
  {
    label: 'Week 2 Notes',
    url: 'week2.html',
  }
];

// Create a new list item for each link
const ol = document.getElementById('assignments'); 

// Loop through the links array
links.forEach(link => {
  let li = document.createElement('li');
  let a = document.createElement('a');
  
// Set the text of the anchor tag to the label of the link
  a.setAttribute('href', link.url);
  a.innerText = link.label;

// Append the anchor tag to the li 
  li.appendChild(a);
  ol.appendChild(li);

});