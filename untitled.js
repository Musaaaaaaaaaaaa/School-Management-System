/* const getAPIdata = async () => {
    try {
      const url = "http://172.16.3.120:8091/api/ApiAttendanceLocal/getEmployedata?Token=Ast1122@2211&EmpCode=01030035";
      let result = await fetch(url);
      result = await result.json();

      // Log the entire result to see its structure
      console.log('API Response:', result);

      // Check if the result is an object and has the fields you need
      if (result && typeof result === 'object') {
        const formattedData = [{
          label: result.Name,  // Assuming 'Name' is the field you want to display
          value: result.PFNo   // Assuming 'PFNo' is a unique identifier for the student
        }];
        setData(formattedData);
      } else {
        console.error('API response is not an object:', result);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getAPIdata();