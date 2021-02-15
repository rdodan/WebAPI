import React, {Component} from 'react';
import trader from './trader.jpg';
import trader2 from './trader2.jpg';

export class History extends Component {

    render () {

        return (
            <div>
                <div className = "mt-5 d-flex justify-content-md-center">
                    <h2> This is how every thing started ...</h2>
                </div>

                <div>
                    <h3>
                        <b>
                        What is Trader Joe?
                        </b>
                    </h3>
                        <p className = "mt-3" style = {{fontSize: 1.3 + 'rem', textIndent: 40 + 'px'}}>
                        Trader Joe's is an American chain of grocery stores headquartered in Monrovia, 
                        California. By 2015, it was a competitor in "fresh format" grocery stores in the 
                        United States. By November 2019, Trader Joe's had over 503 stores nationwide 
                        in 42 states and Washington, D.C.
                        The first Trader Joe's store was opened in 1967 by founder Joe Coulombe in Pasadena,
                        California. It was owned by German entrepreneur Theo Albrecht from 1979 until his death in 2010,
                        when ownership passed to his heirs.[9] Albrecht's family also owns the German supermarket chain ALDI Nord, to which Trader Joe's belongs.
                        Another Aldi company, Aldi Süd, also operates in the U.S., but uses the Aldi name and logo.
                         The company has offices in Monrovia, and Boston, Massachusetts.
                        </p>  
                </div>

                <div>
                    <img  className = "img-fluid mt-3" src = {trader} logo="Trader Joe"/>
                </div>

                <div className = "mt-4">
                    <h3>
                        <b>History...</b>
                    </h3>
                </div>
                <div>
                    <p className = "mt-3" style = {{fontSize: 1.3 + 'rem', textIndent: 40 + 'px'}}>
                        Trader Joe's is named after its founder, Joe Coulombe. The company began in 1958 as a
                        Greater Los Angeles area chain known as Pronto Market convenience stores. Coulombe
                        felt the original Pronto Markets were too similar to 7-Eleven and the competition would be too much.
                        Coulombe developed the idea of the Trader Joe's South Seas motif while on vacation in the Caribbean. The Tiki culture fad
                        was fresh in the cultural memory and he had noticed that Americans were traveling more and were acquiring tastes they had
                        trouble satisfying in American supermarkets at the time.[citation needed] The Trader Joe's name was a spoof on Trader Vic's,
                        the famous tiki-themed restaurant that had opened its first location in the Beverly Hilton in 1955. Trader Vic's in Beverly 
                        Hills was notoriously expensive to eat at, but Trader Joe's in Pasadena would provide an irreverent and less-expensive offering
                        of food and drink.The first store branded as "Trader Joe's" opened in 1967 in Pasadena, California; it remains in operation as 
                        of 2020. In the first few decades, some of the stores offered fresh meats provided by butchers who leased space in the stores, 
                        along with sandwiches and freshly cut cheese, all in-store.In 1979, Germany's Theo Albrecht (owner and CEO of Aldi Nord) bought
                        the company as a personal investment for his family. Coulombe was succeeded as CEO by John Shields in 1987. Under his leadership
                        the company expanded into Arizona in 1993 and into the Pacific Northwest two years later. In 1996, the company opened its first
                        stores on the East Coast in Brookline and Cambridge, both just outside Boston. In 2001, Shields retired from his position and Dan
                        Bane succeeded him as CEO.     
                    </p>  
                </div>

                <div  className = "mt-4">
                    <h3>
                        <b>Products</b>
                    </h3>
                </div>

                <div>
                    <p className = "mt-3" style = {{fontSize: 1.3 + 'rem', textIndent: 40 + 'px'}}>
                    While a typical grocery store may carry 50,000 items, Trader Joe's stocks about 4,000 items, 80% of which bear one of its own brand names.
                    Trader Joe's describes itself as "your neighborhood grocery store". Products include gourmet foods, organic foods, vegetarian foods, unusual 
                    frozen foods, imported foods, domestic and imported wine and beer (where local law permits), and "alternative" food items.
                    Many of the company's products are environmentally friendly. In October 2007, amid customer concerns, Trader Joe's began to phase out foods imported from 
                    China, and from February to April 2008, Trader Joe's phased out single-ingredient products from China because of customer concerns. Between 2012 and 2013, 
                    Trader Joe's moved from 15th on Greenpeace's CATO (Carting Away the Oceans) scale to third by removing six unsustainable species of fish from its shelves and getting 
                    involved in efforts to protect the Bering Sea Canyons. Trader Joe's discontinues individual products based on customer reactions more often than larger grocery chains 
                    to free up space for new items. Some products are exclusive to certain regions (e.g., midwest, east coast) of the United States depending on availability and popularity. 
                    </p>
                </div>

                <div>
                    <img  className = "img-fluid mt-3" src = {trader2} logo="Trader Joe inside"/>
                </div>

                <div className = "mt-3"></div>
                    
            </div>
                


        )

    }


}