
const createPatient = async (req, res) => {
    try {
      // Create a new patient document
      const patient = new Patient({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dateOfBirth: req.body.dateOfBirth,
        gender: req.body.gender,
        patientNumber: randomNumber, // Assign the generated patient number
      });
  
      // Save the patient document to the database
      const savedPatient = await patient.save();
  
      res.json(savedPatient);
    } catch (error) {
      console.error('Error creating patient:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

