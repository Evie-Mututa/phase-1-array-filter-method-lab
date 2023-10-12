// Code your solution here
function findMatching(drivers, searchString) {
    // Convert the search string to lowercase for case insensitivity
    const searchLower = searchString.toLowerCase();
  
    // Use the filter method to find matching driver names
    const matchingDrivers = drivers.filter(driver => driver.toLowerCase() === searchLower);
  
    return matchingDrivers;
  }

  function fuzzyMatch(drivers, searchString) {
    // Use the filter method to find drivers whose names start with searchString
    const matchingDrivers = drivers.filter(driver => driver.startsWith(searchString));
  
    return matchingDrivers;
  }

  function matchName(drivers, searchString) {
    // Use the filter method to find driver objects with matching names
    const matchingDrivers = drivers.filter(driver => driver.name === searchString);
  
    return matchingDrivers;
  }
  