using SCHOOLAPP.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SCHOOLAPP.Controllers
{
    public class SchoolApisController : ApiController
    {
        string tokenNumbaer = "AST112233";


        [Route("api/schoolAPI/GetRecords")]
        [HttpGet]
        public IHttpActionResult GetRecords(string Token)
        {
            try
            {
                if (Token == null)
                    return Json(
                        new
                        {
                            Success = false,
                            Reason = "No token supplied"
                        });
                School obj = new School();
                var result = obj.GetRecords();
                    return Json(result);
            }
            catch
            {
                  return Json(
                                    new
                                    {
                                        Success = false,
                                        Reason = "Error Occured"
                                    });
            }
        }
        [Route("api/schoolAPI/GetTimetable")]
        [HttpGet]
        public IHttpActionResult GetTimetable(string Token)
        {
            try
            {
                if (Token == null)
                    return Json(
                        new
                        {
                            Success = false,
                            Reason = "No token supplied"
                        });
                School obj = new School();
                var result = obj.GetTimetable();
                return Json(result);
            }
            catch
            {
                return Json(
                                  new
                                  {
                                      Success = false,
                                      Reason = "Error Occured"
                                  });
            }
        }

        [Route("api/schoolAPI/GetExpenses")]
        [HttpGet]
        public IHttpActionResult GetExpenses(string Token)
        {
            try
            {
                if (Token == null)
                    return Json(
                        new
                        {
                            Success = false,
                            Reason = "No token supplied"
                        });
                School obj = new School();
                var result = obj.GetExpenses();
                return Json(result);
            }
            catch
            {
                return Json(
                                  new
                                  {
                                      Success = false,
                                      Reason = "Error Occured"
                                  });
            }
        }

        [Route("api/schoolAPI/GetAttendance")]
        [HttpGet]
        public IHttpActionResult GetAttendance(string Token)
        {
            try
            {
                if (Token == null)
                    return Json(
                        new
                        {
                            Success = false,
                            Reason = "No token supplied"
                        });
                School obj = new School();
                var result = obj.GetAttendance();
                return Json(result);
            }
            catch
            {
                return Json(
                                  new
                                  {
                                      Success = false,
                                      Reason = "Error Occured"
                                  });
            }
        }


        [Route("api/schoolAPI/GetCourses")]
        [HttpGet]
        public IHttpActionResult GetCourses(string Token)
        {
            try
            {
                if (Token == null)
                    return Json(
                        new
                        {
                            Success = false,
                            Reason = "No token supplied"
                        });
                School obj = new School();
                var result = obj.GetCourses();
                return Json(result);
            }
            catch
            {
                return Json(
                                  new
                                  {
                                      Success = false,
                                      Reason = "Error Occured"
                                  });
            }
        }



        [Route("api/schoolAPI/GetGrade_records")]
        [HttpGet]
        public IHttpActionResult GetGrade_records(string Token)
        {
            try
            {
                if (Token == null)
                    return Json(
                        new
                        {
                            Success = false,
                            Reason = "No token supplied"
                        });
                School obj = new School();
                var result = obj.GetGrade_records();
                return Json(result);
            }
            catch
            {
                return Json(
                                  new
                                  {
                                      Success = false,
                                      Reason = "Error Occured"
                                  });
            }
        }





        // GET api/<controller>
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}