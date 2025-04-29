 // Data for each placement detail
 const categoryAndYear=[
    "Category",
    "2023-24",
    "2022-23",
    "2021-22",
    "2020-21",
    "2019-20",
    "2018-19",
    "2017-18",
    "2016-17",
    "2015-16",
 ]
 const ugNumbers=[
  "UG",
  "433",
  "671",
  "1308",
  "631",
  "434","383","248","275","299"

 ]

 const pgNumbers=[
  "PG",
  "47","104",	"77",	"14",	"18",	"41",	"04",	"31",	"37"

 ]
 const placementDetails = [
    {
      year: '2022-23',
      src: 'http://srivasaviengg.ac.in/uploads/place_2022-23.pdf#toolbar=0'
    },
    {
      year: '2021-22',
      src: 'http://srivasaviengg.ac.in/uploads/place_2021-22.pdf#toolbar=0'
    },
    {
        year: '2020-21',
        src: 'http://srivasaviengg.ac.in/uploads/place_2020-21.pdf#toolbar=0'
    },
    {
        year: '2019-20',
        src: 'http://srivasaviengg.ac.in/uploads/place_2019-20.pdf#toolbar=0'
    },
    {
        year: '2018-19',
        src: 'http://srivasaviengg.ac.in/uploads/place_2018-19.pdf#toolbar=0'
    },
    {
        year: '2017-18',
        src: 'http://srivasaviengg.ac.in/uploads/place_2017-18.pdf#toolbar=0'
    },
    {
       year: '2016-17',
         src: 'http://srivasaviengg.ac.in/uploads/place_2016-17.pdf#toolbar=0'
    },
    {
        year: '2015-16',
        src: 'http://srivasaviengg.ac.in/uploads/place_2015-16.pdf#toolbar=0'
    },
    // Add more objects as needed
  ];
  const placementMembers = [
    {
      name: "Mr. A.Rajesh",
      designation: "Sr. Asst. Professor & Placement Officer",
      department: "CSE",
      phone: "9849528282",
      email: "placements@srivasaviengg.ac.in"
    },
    {
      name: "Mr. P. aRajesh",
      designation: "Asst. Professor",
      department: "CSE",
      phone: "9490023377",
      email: "cseplacements@srivasaviengg.ac.in"
    },
    {
      name: "Mr. M.Vinod Kumar",
      designation: "Asst. Professor",
      department: "ECE",
      phone: "9014640210",
      email: "eceplacements@srivasaviengg.ac.in"
    },
    {
      name: "Mr. M.Y.Sekharam",
      designation: "Asst. Professor",
      department: "CSE",
      phone: "9949947033",
      email: "cseplacements@srivasaviengg.ac.in"
    },
    {
      name: "Mr. Madhu Sagar",
      designation: "Asst. Professor",
      department: "EEE",
      phone: "8500868826",
      email: "eeeplacements@srivasaviengg.ac.in"
    },
    {
      name: "Mr. Sk.Arief",
      designation: "Asst. Professor",
      department: "ME",
      phone: "9182606974",
      email: "mechplacements@srivasaviengg.ac.in"
    },
    {
      name: "Mr. J Vijaya Chandra",
      designation: "Asst. Professor",
      department: "CE",
      phone: "8096041195",
      email: "civilplacements@srivasaviengg.ac.in"
    },
    {
      name: "Mr. M PremKumar Raju",
      designation: "Asst. Professor",
      department: "CE",
      phone: "8978769373",
      email: "civilplacements@srivasaviengg.ac.in"
    },
    {
      name: "Mr. T.Dileep",
      designation: "Asst. Professor",
      department: "MBA",
      phone: "9885240322",
      email: "mbaplacements@srivasaviengg.ac.in"
    },
    {
      name: "Mr. P.Bharath",
      designation: "Asst. Professor",
      department: "MBA",
      phone: "8125175244",
      email: "mbaplacements@srivasaviengg.ac.in"
    }
  ];
const placementUgPgDetailsThEle= document.getElementById('placementUgPgCategoryTh');
const placementsUgEle= document.getElementById('ugNumbers');
const placementsPgEle= document.getElementById('pgNumbers');
const totlaNumersEle= document.getElementById('totalNumbers');
for(let elements of categoryAndYear){
    // Create th element
    const th = document.createElement('th');
    th.textContent = elements;
    th.style.cssText = `
        color: #fff;
    `;
    placementUgPgDetailsThEle.appendChild(th);
}

for(elements of ugNumbers){
  console.log(elements);
    // Create th element
    const th = document.createElement('td');
    th.textContent = elements;
    th.classList.add('tab4-td');
    placementsUgEle.appendChild(th);
}

for(elements of pgNumbers){
  console.log(elements);
    // Create th element
    const th = document.createElement('td');
    th.textContent = elements;
    th.classList.add('tab4-td');
    placementsPgEle.appendChild(th);
}

for(let i=0;i<ugNumbers.length;i++){
  const th = document.createElement('td');
    th.textContent = parseInt(ugNumbers[i])+parseInt(pgNumbers[i]);
    th.classList.add('tab4-td');
    if(i===0){
      th.textContent = "Total";
      th.style.cssText = `
        color: #000;
        font-weight: bold;
    `;
    }else{
      th.style.cssText = `
        color: #000;
        font-weight: bold;
    `;
    th.classList.add('tab4-td');
    }
    totlaNumersEle.appendChild(th);
}

const tableBody = document.getElementById("placementMembers");

  placementMembers.forEach((member, index) => {
    const row = document.createElement("tr");
    row.classList.add("tab4-tr");

    row.innerHTML = `
      <td class="tab4-td">${index + 1}</td>
      <td class="tab4-td">${member.name}</td>
      <td class="tab4-td">${member.designation}</td>
      <td class="tab4-td">${member.department}</td>
      <td class="tab4-td">${member.phone}</td>
      <td class="tab4-td">${member.email}</td>
    `;

    tableBody.appendChild(row);
  });

  // Get the element with class "rest"
  const restElement = document.querySelector('.rest');

  // Function to create and append details elements
  placementDetails.forEach(detail => {
    // Create details element
    const details = document.createElement('details');
    
    // Create summary element
    const summary = document.createElement('summary');
    summary.textContent = `Placement Details of ${detail.year}`;
    details.appendChild(summary);

    // Create div element with class "text-center"
    const div = document.createElement('div');
    div.className = 'text-center';
    
    // Create li element
    const li = document.createElement('li');
    li.textContent = `Placement Details of ${detail.year}`;
    li.style.cssText = `
      margin-left: 25px;
      text-align: center;
      list-style-type: none;
      margin: 10px;
    `;
    div.appendChild(li);

    // Create iframe element
    const iframe = document.createElement('iframe');
    iframe.src = detail.src;
    iframe.width = '60%';
    iframe.height = '500px';
    iframe.className = 'text-center';
    iframe.frameBorder = '0';
    div.appendChild(iframe);

    // Append div to details
    details.appendChild(div);

    // Append details to rest element
    restElement.appendChild(details);
  });