using SCHOOLAPP.Models;
using System;
using System.Collections.Generic;
using System.Web.Http;

namespace SCHOOLAPP.Controllers
{
    public class SchoolApisController : ApiController
    {
        // [Optional] Old hardcoded token (not needed anymore)
        // string tokenNumbaer = "AST112233";

        [Route("api/schoolAPI/GetRecords")]
        [HttpGet]
        public IHttpActionResult GetRecords(string Token)
        {
            try
            {
                if (Token == null)
                    return Json(new { Success = false, Reason = "No token supplied" });

                School obj = new School();
                if (!obj.CheckToken(Token))
                    return Json(new { Success = false, Reason = "Invalid token" });

                var result = obj.GetRecords();
                return Json(result);
            }
            catch
            {
                return Json(new { Success = false, Reason = "Error Occurred" });
            }
        }

        [Route("api/schoolAPI/GetTimetable")]
        [HttpGet]
        public IHttpActionResult GetTimetable(string Token)
        {
            try
            {
                if (Token == null)
                    return Json(new { Success = false, Reason = "No token supplied" });

                School obj = new School();
                if (!obj.CheckToken(Token))
                    return Json(new { Success = false, Reason = "Invalid token" });

                var result = obj.GetTimetable();
                return Json(result);
            }
            catch
            {
                return Json(new { Success = false, Reason = "Error Occurred" });
            }
        }

        [Route("api/schoolAPI/GetExpenses")]
        [HttpGet]
        public IHttpActionResult GetExpenses(string Token)
        {
            try
            {
                if (Token == null)
                    return Json(new { Success = false, Reason = "No token supplied" });

                School obj = new School();
                if (!obj.CheckToken(Token))
                    return Json(new { Success = false, Reason = "Invalid token" });

                var result = obj.GetExpenses();
                return Json(result);
            }
            catch
            {
                return Json(new { Success = false, Reason = "Error Occurred" });
            }
        }

        [Route("api/schoolAPI/GetAttendance")]
        [HttpGet]
        public IHttpActionResult GetAttendance(string Token)
        {
            try
            {
                if (Token == null)
                    return Json(new { Success = false, Reason = "No token supplied" });

                School obj = new School();
                if (!obj.CheckToken(Token))
                    return Json(new { Success = false, Reason = "Invalid token" });

                var result = obj.GetAttendance();
                return Json(result);
            }
            catch
            {
                return Json(new { Success = false, Reason = "Error Occurred" });
            }
        }

        [Route("api/schoolAPI/GetCourses")]
        [HttpGet]
        public IHttpActionResult GetCourses(string Token)
        {
            try
            {
                if (Token == null)
                    return Json(new { Success = false, Reason = "No token supplied" });

                School obj = new School();
                if (!obj.CheckToken(Token))
                    return Json(new { Success = false, Reason = "Invalid token" });

                var result = obj.GetCourses();
                return Json(result);
            }
            catch
            {
                return Json(new { Success = false, Reason = "Error Occurred" });
            }
        }

        [Route("api/schoolAPI/GetGrade_records")]
        [HttpGet]
        public IHttpActionResult GetGrade_records(string Token)
        {
            try
            {
                if (Token == null)
                    return Json(new { Success = false, Reason = "No token supplied" });

                School obj = new School();
                if (!obj.CheckToken(Token))
                    return Json(new { Success = false, Reason = "Invalid token" });

                var result = obj.GetGrade_records();
                return Json(result);
            }
            catch
            {
                return Json(new { Success = false, Reason = "Error Occurred" });
            }
        }

        // Default template methods (not in use unless needed)
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        public string Get(int id)
        {
            return "value";
        }

        public void Post([FromBody] string value)
        {
        }

        public void Put(int id, [FromBody] string value)
        {
        }

        public void Delete(int id)
        {
        }
    }
}
