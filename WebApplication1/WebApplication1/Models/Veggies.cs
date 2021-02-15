using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Veggies
    {
        public long VeggiesID { get; set; }
        public string VeggiesName { get; set; }
        public DateTime? DIS { get; set; }
        public string VeggiesCountry { get; set; }
        public float VeggiesPrice { get; set; }
        
    }
}