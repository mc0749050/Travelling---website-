let city = [
  {
    cityname: "Jaipur",
    img: "jaipur.jpg",
    paragraph: "Jaipur was founded in 1727 by Sawai Jai Singh II, the Kachhwaha Rajput ruler of Amer, after whom the city is named. It is one of the earliest planned cities of modern India, designed by Vidyadhar Bhattacharya. During the British colonial period, the city served as the capital of Jaipur State.",
  },
  {
    cityname: "Sikar",
    img: "sikar.jpg",
    paragraph: "Sikar is a city located in the Shekhawati region of Rajasthan, India. It serves as the administrative headquarters of the Sikar district. Known for its rich cultural heritage, Sikar is famous for its grand havelis, frescoes, and historical forts. The city is an educational hub, with several renowned schools and colleges. Sikar's economy is primarily based on agriculture, trade, and education. The climate is semi-arid, with hot summers and cool winters. Notable attractions include the Harshnath Temple, Laxmangarh Fort, and Rani Mahal. The city has a well-developed transport network, connecting it to major cities in Rajasthan. Sikar celebrates various traditional festivals with great enthusiasm, reflecting its vibrant cultural ethos."
  },
  {
    cityname: "Ajmer",
    img: "ajmer.jpg",
    paragraph: "Ajmer is a city in the Indian state of Rajasthan, known for its rich history and cultural significance. It is home to the famous Ajmer Sharif Dargah, the shrine of the Sufi saint Khwaja Moinuddin Chishti, which attracts millions of pilgrims annually. The city is also known for the Mayo College, one of the oldest public boarding schools in India. Ajmer is surrounded by the Aravalli Range and is near the Ana Sagar Lake, a popular tourist spot. Historically, Ajmer was a significant center during the Mughal era and has seen the rule of several dynasties. The city hosts the annual Urs festival, commemorating the death anniversary of Khwaja Moinuddin Chishti, drawing visitors from across the world. Ajmer is well-connected by road and rail, making it accessible for tourists. It also acts as a gateway to the Pushkar, known for its sacred lake and annual camel fair. The city's architecture reflects a blend of Hindu and Islamic styles, showcasing its diverse heritage."
    
  },
  {
    cityname: "Churu",
    img: "churu.jpg",
    paragraph: "Churu is a city in the Indian state of Rajasthan, known for its rich cultural heritage and historical significance. Located in the Thar Desert, it features a hot desert climate with extremely hot summers and mild winters. The city is famous for its grand havelis (traditional mansions) adorned with intricate frescoes and architectural marvels. Notable havelis include the Kanhaiya Lal Bagla ki Haveli and Surana Haveli. Churu is also home to the Tal Chhapar Sanctuary, a haven for blackbucks and various bird species. Agriculture, particularly millet and pulses, forms the backbone of its economy. Churu has a blend of traditional Rajasthani and Marwari culture, reflected in its festivals, music, and cuisine. The city is well-connected by road and rail, facilitating access for tourists and traders."
  },
  {
    cityname: "Alwar",
    img: "alwar.jpg",
    paragraph: "Alwar is a city in the northern Indian state of Rajasthan. Alwar City Palace, from 1793, blends architectural styles and has marble pavilions on lotus-shaped bases in its courtyard, plus a museum with rare manuscripts. It’s next to the marble and sandstone Moosi Maharani Chhatri shrine. A steep path leads to the Bala Qila fort, with marble pillars and latticed balconies. Sariska Tiger Reserve lies southwest of Alwar. "
  }
  ]

  function searchfun() {
    let n;
        let userinput = document.getElementById("inputuser").value;
        userinput = userinput.toUpperCase();
       userinput = userinput.replace(
    / /g,
    ""
);
      if (userinput == "JAIPUR") {
        n = 0;
      }
      else if (userinput == "SIKAR") {
        n = 1;
      }
      else if (userinput == "AJMER") {
        n = 2;
      }
      else if (userinput == "CHURU") {
        n = 3;
      }
      else if (userinput == "ALWAR") {
        n = 4;
      }
      else {
        document.getElementById("error").style.visibility = "visible";
      }
      
  //change datas in page 
  
  let pageimg = document.getElementById("imagepage");
  let pagecityname = document.getElementById("pagecityname");
  
  let pageparagraph = document.getElementById("pageparagraph");
  
  pageimg.src = city[n].img;
  pagecityname.innerText = city[n].cityname;
  pageparagraph.innerText = city[n].paragraph;
  
  document.getElementById("tripcity").innerText = city[n].cityname;
  
  let searchDiv = document.getElementById("searchDiv");
  
  searchDiv.style.display = "none";
  
  }
  