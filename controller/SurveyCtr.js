const SurveyResponse = require("../models/survey.js");

exports.create = async (req, res) => {
  try {
    const { responses } = req.body;
    console.log(req.body);
    if (!responses || !Array.isArray(responses)) {
      return res.status(400).json({ status: false, msg: "Invalid or missing 'responses' field" });
    }

    const newSurveyResponse = new SurveyResponse({
      responses, // directly store the mixed-type data
    });

    await newSurveyResponse.save();
    console.log("Survey response saved successfully");
    return res.json({ status: true, surveyResponse: newSurveyResponse });

  } catch (err) {
    console.error("Error saving survey response:", err);
    return res.status(500).json({ status: false, msg: "An error occurred" });
  }
};

exports.getdata = async (req, res) => {
  try {
    const surveyResponses = await SurveyResponse.find();
   

    const result = {
      male: [0, 0, 0, 0],
      female: [0, 0, 0, 0],
      trans: [0, 0, 0, 0],
      others: [0, 0, 0, 0]
    };

    // Iterate over each survey response
    surveyResponses.forEach(response => {
      const userInfo = response.responses[0]; // Assuming the first index contains user info
      const scores = response.responses[1] || {}; // Assuming the second index contains scores

      const gender = userInfo[2]?.toLowerCase(); // Gender stored in third element
      
      const messageMap = { 'it is unlikely that you are abnormally sleepy.': 0, 'you have an average amount of daytime sleepiness': 1, 'you may be excessively sleepy depending on the situation. you may want to consider seeking medical attention': 2, 'you are excessively sleepy and should consider seeking medical attention': 3 };
      
      // Determine the correct gender category
      let category;
      if (gender === 'male') {
        category = 'male';
      } else if (gender === 'female') {
        category = 'female';
      } else if (gender === 'transgender') {
        category = 'trans';
      } else if (gender === "i don't wish to answer") {
        category = 'others';
      }

      

      // Aggregate counts based on the message
      const message = scores.message?.toLowerCase();

      const index = messageMap[message];
      if (category && index !== undefined) {
        result[category][index]++;
        
      }
    });

    res.status(200).json({ status: true, surveyData: result });
  } catch (err) {
    console.error("Error retrieving survey responses:", err);
    res.status(500).json({ status: false, msg: "An error occurred while processing survey responses" });
  }
};

exports.getdata1 = async (req, res) => {
  try {
    const surveyResponses = await SurveyResponse.find();
   

    const result = {
      male: [0, 0, 0, 0],
      female: [0, 0, 0, 0],
      trans: [0, 0, 0, 0],
      others: [0, 0, 0, 0]
    };

    // Iterate over each survey response
    surveyResponses.forEach(response => {
      const userInfo = response.responses[0]; // Assuming the first index contains user info
      const scores = response.responses[2][18] || {}; // Assuming the second index contains scores
      const gender = userInfo[2]?.toLowerCase(); // Gender stored in third element
      
      const messageMap = { 'very good': 0, 'fairly good': 1, 'fairly bad': 2, 'very bad': 3 };
      
      // Determine the correct gender category
      let category;
      if (gender === 'male') {
        category = 'male';
      } else if (gender === 'female') {
        category = 'female';
      } else if (gender === 'transgender') {
        category = 'trans';
      } else if (gender === "i don't wish to answer") {
        category = 'others';
      }
      // Aggregate counts based on the message
      const message = scores?.toLowerCase();

      //console.log(message);
      const index = messageMap[message];
      //console.log(index)
      if (category && index !== undefined) {
        result[category][index]++;
        
      }
    });


    res.status(200).json({ status: true, surveyData: result });
  } catch (err) {
    console.error("Error retrieving survey responses:", err);
    res.status(500).json({ status: false, msg: "An error occurred while processing survey responses" });
  }
};
    
exports.getdata2 = async (req, res) => {
  try {
    const surveyResponses = await SurveyResponse.find();
   

    const result = {
      male: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      female: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      trans: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      others: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    };

    // Iterate over each survey response
    surveyResponses.forEach(response => {
      const userInfo = response.responses[0]; // Assuming the first index contains user info
      const scores = response.responses[4] || {}; // Assuming the second index contains scores

      const gender = userInfo[2]?.toLowerCase(); // Gender stored in third element
      
      const messageMap = { 'extremely alert': 0, 'very alert': 1, 'alert': 2, 'rather alert': 3, 'neither alert nor sleepy': 4, 'some sign of sleepiness': 5, 'sleepy, but no effort to keep awake': 6, 'sleepy, but some effort to keep awake': 7, 'very sleepy, great effort to keep awake, fighting sleep': 8, 'extremely sleepy, can not keep awake': 9};
      
      // Determine the correct gender category
      let category;
      if (gender === 'male') {
        category = 'male';
      } else if (gender === 'female') {
        category = 'female';
      } else if (gender === 'transgender') {
        category = 'trans';
      } else if (gender === "i don't wish to answer") {
        category = 'others';
      }

      

      // Aggregate counts based on the message
      const message = scores[0]?.toLowerCase();
      const index = messageMap[message];
      if (category && index !== undefined) {
        result[category][index]++;
        
      }
    });

    //console.log(result);

    res.status(200).json({ status: true, surveyData: result });
  } catch (err) {
    console.error("Error retrieving survey responses:", err);
    res.status(500).json({ status: false, msg: "An error occurred while processing survey responses" });
  }
};



exports.getdata3 = async (req, res) => {
  try {
    const surveyResponses = await SurveyResponse.find();
   

    const result = {
      male: [0, 0, 0],
      female: [0, 0, 0],
      trans: [0, 0, 0],
      others: [0, 0, 0]
    };

    // Iterate over each survey response
    surveyResponses.forEach(response => {
      const userInfo = response.responses[0]; // Assuming the first index contains user info
      const scores = response.responses[5] || {}; // Assuming the second index contains scores
      const gender = userInfo[2]?.toLowerCase(); // Gender stored in third element
      
      const messageMap = { 'low stress': 0, 'moderate stress': 1, 'high perceived stress': 2 };
      
      // Determine the correct gender category
      let category;
      if (gender === 'male') {
        category = 'male';
      } else if (gender === 'female') {
        category = 'female';
      } else if (gender === 'transgender') {
        category = 'trans';
      } else if (gender === "i don't wish to answer") {
        category = 'others';
      }
      // Aggregate counts based on the message
      const message = scores.message?.toLowerCase();

      const index = messageMap[message];

      if (category && index !== undefined) {
        result[category][index]++;
        
      }

      //console.log(result);
    });


    res.status(200).json({ status: true, surveyData: result });
  } catch (err) {
    console.error("Error retrieving survey responses:", err);
    res.status(500).json({ status: false, msg: "An error occurred while processing survey responses" });
  }
};


exports.getdata4 = async (req, res) => {
  try {
    const surveyResponses = await SurveyResponse.find();
   

    const result = {
      male: [0, 0, 0],
      female: [0, 0, 0],
      trans: [0, 0, 0],
      others: [0, 0, 0]
    };

    // Iterate over each survey response
    surveyResponses.forEach(response => {
      const userInfo = response.responses[0]; // Assuming the first index contains user info
      const scores = response.responses[7] || {}; // Assuming the second index contains scores
      const gender = userInfo[2]?.toLowerCase(); // Gender stored in third element
      
      const messageMap = { 'row risk for moderate to severe osa': 0, 'intermediate risk for moderate to severe osa': 1, 'high risk for moderate to severe osa': 2 };
      
      // Determine the correct gender category
      let category;
      if (gender === 'male') {
        category = 'male';
      } else if (gender === 'female') {
        category = 'female';
      } else if (gender === 'transgender') {
        category = 'trans';
      } else if (gender === "i don't wish to answer") {
        category = 'others';
      }
      // Aggregate counts based on the message
      const message = scores.message?.toLowerCase();

      const index = messageMap[message];
      
      // console.log(message);

      if (category && index !== undefined) {
        result[category][index]++;
        
      }

      // console.log(result);
    });


    res.status(200).json({ status: true, surveyData: result });
  } catch (err) {
    console.error("Error retrieving survey responses:", err);
    res.status(500).json({ status: false, msg: "An error occurred while processing survey responses" });
  }
};

exports.getdata5 = async (req, res) => {
  try {
    const surveyResponses = await SurveyResponse.find();
   
    const result = {
      male: [0, 0, 0, 0, 0],
      female: [0, 0, 0, 0, 0],
      trans: [0, 0, 0, 0, 0],
      others: [0, 0, 0, 0, 0],
    };

    // Iterate over each survey response
    surveyResponses.forEach(response => {
      const userInfo = response.responses[0]; // Assuming the first index contains user info
      const scores = response.responses[6] || {}; // Assuming the second index contains scores
      const gender = userInfo[2]?.toLowerCase(); // Gender stored in third element
      
      const messageMap = { 'definitely morning type': 0, 'moderately morning type': 1, 'neither type': 2, 'moderately evening type':3, 'definitely evening type': 4 };
      
      // Determine the correct gender category
      let category;
      if (gender === 'male') {
        category = 'male';
      } else if (gender === 'female') {
        category = 'female';
      } else if (gender === 'transgender') {
        category = 'trans';
      } else if (gender === "i don't wish to answer") {
        category = 'others';
      }
      // Aggregate counts based on the message
      const message = scores.message?.toLowerCase();

      const index = messageMap[message];
      
      //console.log(message);

      if (category && index !== undefined) {
        result[category][index]++;
        
      }

     // console.log(result);
    });


    res.status(200).json({ status: true, surveyData: result });
  } catch (err) {
    console.error("Error retrieving survey responses:", err);
    res.status(500).json({ status: false, msg: "An error occurred while processing survey responses" });
  }
};

exports.getdata6 = async (req, res) => {
  try {
    const surveyResponses = await SurveyResponse.find();

    const result = {
      male: [0, 0, 0, 0],
      female: [0, 0, 0, 0],
      trans: [0, 0, 0, 0],
      others: [0, 0, 0, 0],
    };

    surveyResponses.forEach(response => {
      const userInfo = response.responses[0]; // User info
      const gender = userInfo[2]?.toLowerCase();
      const answers = response.responses[8] || {}; // Array with 30 elements

      let category;
      if (gender === 'male') {
        category = 'male';
      } else if (gender === 'female') {
        category = 'female';
      } else if (gender === 'transgender') {
        category = 'trans';
      } else {
        category = 'others';
      }

      if (category) {
        // Count "Yes" answers at specific positions
        const positions = [8, 10, 11, 13]; // Indices to check
        for (let i = 0; i < positions.length; i++) {
          if (answers[positions[i]] === 'Yes') {
            result[category][i]++;
          }
        }
       // console.log(result);
      }
    });

   

    res.json({ surveyData: result });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getdata7 = async (req, res) => {
  try {
    const surveyResponses = await SurveyResponse.find();
    const result = {
      male: 0,
      female: 0,
      trans: 0,
      others: 0,
    };

    surveyResponses.forEach(response => {
      const userInfo = response.responses[0]; 
      const gender = userInfo[2]?.toLowerCase(); 
      const answers = response.responses[8]; 

      let category;
      if (gender === 'male') {
        category = 'male';
      } else if (gender === 'female') {
        category = 'female';
      } else if (gender === 'transgender') {
        category = 'trans';
      } else {
        category = 'others';
      }

      if (category && answers && answers[15] === 'Yes') {
        result[category]++;
      }
    });

    console.log(result);

    res.json({ surveyData: result });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
exports.getdata8 = async (req, res) => {
  try {
    const surveyResponses = await SurveyResponse.find();
    const result = {
      male: 0,
      female: 0,
      trans: 0,
      others: 0,
    };

    surveyResponses.forEach(response => {
      const userInfo = response.responses[0]; 
      const gender = userInfo[2]?.toLowerCase(); 
      const answers = response.responses[8]; 

      let category;
      if (gender === 'male') {
        category = 'male';
      } else if (gender === 'female') {
        category = 'female';
      } else if (gender === 'transgender') {
        category = 'trans';
      } else {
        category = 'others';
      }

      if (category && answers && answers[12] === 'Yes') {
        result[category]++;
      }
    });

    console.log(result);

    res.json({ surveyData: result });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
exports.getdata9 = async (req, res) => {
  try {
    const surveyResponses = await SurveyResponse.find();
    const result = {
      male: 0,
      female: 0,
      trans: 0,
      others: 0,
    };

    surveyResponses.forEach(response => {
      const userInfo = response.responses[0]; 
      const gender = userInfo[2]?.toLowerCase(); 
      const answers = response.responses[8]; 

      let category;
      if (gender === 'male') {
        category = 'male';
      } else if (gender === 'female') {
        category = 'female';
      } else if (gender === 'transgender') {
        category = 'trans';
      } else {
        category = 'others';
      }

      if (category && answers && answers[13] === 'Yes') {
        result[category]++;
      }
    });

    console.log(result);

    res.json({ surveyData: result });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
exports.getdata10 = async (req, res) => {
  try {
    const surveyResponses = await SurveyResponse.find();
    const result = {
      male: 0,
      female: 0,
      trans: 0,
      others: 0,
    };

    surveyResponses.forEach(response => {
      const userInfo = response.responses[0]; 
      const gender = userInfo[2]?.toLowerCase(); 
      const answers = response.responses[8]; 

      let category;
      if (gender === 'male') {
        category = 'male';
      } else if (gender === 'female') {
        category = 'female';
      } else if (gender === 'transgender') {
        category = 'trans';
      } else {
        category = 'others';
      }

      if (category && answers && answers[17] === 'Yes') {
        result[category]++;
      }
    });

    console.log(result);

    res.json({ surveyData: result });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
exports.getdata11 = async (req, res) => {
  try {
    const surveyResponses = await SurveyResponse.find();
    const result = {
      male: 0,
      female: 0,
      trans: 0,
      others: 0,
    };

    surveyResponses.forEach(response => {
      const userInfo = response.responses[0]; 
      const gender = userInfo[2]?.toLowerCase(); 
      const answers = response.responses[8]; 

      let category;
      if (gender === 'male') {
        category = 'male';
      } else if (gender === 'female') {
        category = 'female';
      } else if (gender === 'transgender') {
        category = 'trans';
      } else {
        category = 'others';
      }

      if (category && answers && answers[19] === 'Yes') {
        result[category]++;
      }
    });

    console.log(result);

    res.json({ surveyData: result });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
exports.getdata12 = async (req, res) => {
  try {
    const surveyResponses = await SurveyResponse.find();
    const result = {
      male: 0,
      female: 0,
      trans: 0,
      others: 0,
    };

    surveyResponses.forEach(response => {
      const userInfo = response.responses[0]; 
      const gender = userInfo[2]?.toLowerCase(); 
      const answers = response.responses[8]; 

      let category;
      if (gender === 'male') {
        category = 'male';
      } else if (gender === 'female') {
        category = 'female';
      } else if (gender === 'transgender') {
        category = 'trans';
      } else {
        category = 'others';
      }

      if (category && answers && answers[21] === 'Yes') {
        result[category]++;
      }
    });

    console.log(result);

    res.json({ surveyData: result });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};