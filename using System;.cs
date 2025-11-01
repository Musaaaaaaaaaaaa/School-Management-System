using System;
using System.Data.SqlClient;
using System.Configuration;

namespace SCHOOLAPP.Models
{
    public class School
    {
        // ✅ Token validation method
        public bool CheckToken(string token)
        {
            using (SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString))
            {
                conn.Open();
                string query = "SELECT COUNT(*) FROM users WHERE token = @token AND status = 1";
                using (SqlCommand cmd = new SqlCommand(query, conn))
                {
                    cmd.Parameters.AddWithValue("@token", token);
                    int count = (int)cmd.ExecuteScalar();
                    return count > 0;
                }
            }
        }

        // 📝 Add other methods later (GetExpenses, GetCourses, etc.)
    }
}