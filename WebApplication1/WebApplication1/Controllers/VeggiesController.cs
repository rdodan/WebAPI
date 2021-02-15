using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication1 .Models;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;

namespace WebApplication1.Controllers
{
    public class VeggiesController : ApiController
    {
        public HttpResponseMessage Get() {
            DataTable table = new DataTable();
            string query = @" 
                            select VeggiesID, VeggiesName, convert (varchar(10), DIS, 120) as DIS ,VeggiesCountry,
                            VeggiesPrice from dbo.Veggies"
                            ;

            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["VeggiesAppDB"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }

            return Request.CreateResponse(HttpStatusCode.OK, table);
        }


        public string Post(Veggies vg) {
            try
            {
                DataTable table = new DataTable();
                string query = @" insert into dbo.Veggies 
                              (
                              VeggiesName, DIS, VeggiesCountry, VeggiesPrice) 
                              Values (
                               '" + vg.VeggiesName + @"',
                               '" + vg.DIS + @"',
                               '" + vg.VeggiesCountry + @"',
                               '" + vg.VeggiesPrice + @"'    
                              )
                              ";

                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["VeggiesAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Successfully added!";
            }
            catch (Exception ex) {

                return "Failed to add";
            }
        
        
        }



        public string Put(Veggies vg)
        {
            try
            {
                DataTable table = new DataTable();
                string query = @" update dbo.Veggies set
                                VeggiesName = '" + vg.VeggiesName + @"',
                                DIS = '" + vg.DIS + @"',
                                VeggiesCountry = '" + vg.VeggiesCountry + @"',
                                VeggiesPrice = '" + vg.VeggiesPrice + @"'
                                where
                                VeggiesID = '" + vg.VeggiesID + @"'
                              ";

                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["VeggiesAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Updated add!";
            }
            catch (Exception ex)
            {

                return "Failed to update";
            }


        }


        public string Delete(int id)
        {
            try
            {
                DataTable table = new DataTable();
                string query = @" delete from dbo.Veggies where
                                VeggiesID = " + id;

                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["VeggiesAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                    
                return "Deleted Successfully!";
            }
            catch (Exception ex)
            {

                return "Failed to delete";
            }


        }





    }
}
