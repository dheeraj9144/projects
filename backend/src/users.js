const fs = require('fs'); 
const path = require('path');
const filePath = path.resolve(__dirname, 'models/users.json')


async function fetchDataUsingFs() {
    try {
      var data = fs.readFileSync(filePath, 'utf8');
      data = JSON.parse(data);
      return data;
    } catch (error) {
      console.error('Error fetching data : ', error.message);
    }
  }

app.get('/api/getuser', async (req, res) => {
 try{
    const data = await fetchDataUsingFs();
    const userdata = JSON.parse(data);

    return res.json(userdata);
} catch (error) {
    return error.message;
}

});
