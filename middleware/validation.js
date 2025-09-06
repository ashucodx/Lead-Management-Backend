const validateLead = (req, res, next) => {
    const { name, email, phone, source } = req.body;
    const errors = [];
    
    if (!name || name.trim() === '') {
      errors.push('Name is required');
    }
    
    if (!email || email.trim() === '') {
      errors.push('Email is required');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push('Please provide a valid email');
    }
    
    if (!phone || phone.trim() === '') {
      errors.push('Phone number is required');
    } else if (!/^[0-9]{10}$/.test(phone)) {
      errors.push('Phone number must be 10 digits');
    }
    
    if (!source || source.trim() === '') {
      errors.push('Source is required');
    }
    
    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors
      });
    }
    
    next();
  };
  
  module.exports = { validateLead };