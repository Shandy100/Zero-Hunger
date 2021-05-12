import './App.css';
import "react-bootstrap"
import zerohunger from "./assets/zerohunger.jpg"
import "./components/style.css"
import kids from "./assets/kids.webp"
import Button from 'react-bootstrap/Button'
import fridge from "./assets/fridge.jpg"
import wheat from "./assets/wheat.jpeg"
import hungergirl from "./assets/hungergirl.jpg"

function App() {
  return (
    <div className="App">
    <div>
    <div className="container"> <img className="kids" src={kids} alt="kids" height="400"/>
    <div className="text-block">
    <h1>#Famished For Food</h1> <br />
    <p className="text"> India now ranks 94th among 107 countries in terms of hunger, and continues  <br />to be in the'severe' hunger category according to the Global Hunger Index 2020. <br />According to the study, 14% of India's population is undernourished</p>
     <Button Link to='/donate' variant="danger">Donate now</Button>{' '}<br /><br />
     </div><br />
    </div>
    <br /><br />
    <div class="aligned">
    <img className="zero" src={zerohunger} alt="Zero Hunger" />          
    <span><p>Connecting Customers and local vendors to get better price to benefit both.</p>
    <p>Connecting investors and farmers to produce more food materials</p>
    <p>Support Zero food waste policy using existing partners</p><br /></span>
</div> <br /><br />
<p className="inpop">India, with a population of over 1.3 billion, has seen tremendous growth <br />
   in the past two decades. Gross Domestic Product has increased 4.5 times <br />
   and per capita consumption has increased 3 times. Similarly, food grain <br />
   production has increased almost 2 times. However, despite phenomenal <br />
   industrial and economic growth and while India produces sufficient food<br />
    to feed its population, it is unable to provide access to food to a large <br />
    number of people, especially women and children.</p>
    <br /><br />
    <div class="aligned">
    <img className="zero" src={wheat} alt="Zero Hunger" />          
    <span><h3>Hunger is Haunting</h3>The number of undernourished people has dropped by almost half in the past two decades because of rapid economic growth and increased agricultural productivity. Many developing countries that used to suffer from famine and hunger can now meet their nutritional needs. Central and East Asia, Latin America and the Caribbean have all made huge progress in eradicating extreme hunger. Unfortunately, extreme hunger and malnutrition remain a huge barrier to development in many countries.</span>
</div>
<br />
    <div class="aligned">      
    <span><h3>State of Hunger in India</h3>On the other hand, it is estimated that nearly one third of the food produced in the world for human consumption every year gets lost or wasted. 40 percent of the fruits and vegetables, and 30 percent of cereals that are produced are lost due to inefficient supply chain management and do not reach the consumer markets. While significant levels of food losses occur upstream, at harvest and during post-harvest handling, a lot of food is lost or wasted during the distribution and consumption stages. Some food is also wasted on the shelves and in the warehouses of food businesses either due to excess production, introduction of new products, labeling errors, or due to shorter remaining shelf life. Such food could be saved by timely withdrawing it from the distribution network, aggregating it and then redirecting it to the people in need.</span>
    <img className="zero" src={hungergirl} alt="Zero Hunger" />    
</div>
<br />
    <div class="aligned">
    <img className="zero" src={fridge} alt="Zero Hunger" />          
    <span><h3>Food Loss & Food Waste</h3>According to FAO estimates in ‘The State of Food Security and Nutrition in the World, 2020 report, 189.2 million people are undernourished in India. By this measure 14% of the population is undernourished in India. Also, 51.4% of women in reproductive age between 15 to 49 years are anaemic. Further according to the report 34.7% of the children aged under five in India are stunted (too short for their age), while 20% suffer from wasting, meaning their weight is too low for their height. Malnourished children have a higher risk of death from common childhood illnesses such as diarrhea, pneumonia, and malaria. The Global Hunger Index 2019 ranks India at 102 out of 117 countries on the basis of three leading indicators -- prevalence of wasting and stunting in children under 5 years, under 5 child mortality rate, and the proportion of undernourished in the population</span>
</div>
    </div> <br /><br /> <h4>Resources:</h4>
    <Button variant="primary" href="https://www.un.org/sustainabledevelopment/hunger/">UN org</Button>{' '} 
    <Button variant="primary" href="https://zerohunger.world/">Zero Hunger World</Button>{' '}
    <Button variant="primary" href="https://www.wfp.org/zero-hunger">WPF org</Button>{' '} 
    <Button variant="primary" href="https://www.feedingindia.org/">Feeding India</Button>{' '}  
    <Button variant="primary" href="https://extrafood.org/join-us/donate-food/">Extra Food</Button>{' '}


     </div>
  );
}

export default App;