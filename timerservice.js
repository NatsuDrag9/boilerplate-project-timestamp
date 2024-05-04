function validateDate(req, res, next) {
  let date = req.params.date;

  if (date === undefined) {
    req.dateObj = new Date();
    next();
  } else if (date.includes("-")) {
    const dateObj = new Date(date);
    if (isNaN(dateObj.getTime())) {
      res.json({
        error: "Invalid Date",
      });
    } else {
      req.dateObj = dateObj;
      next();
    }
  } else {
    const dateObj = new Date(parseInt(date));
    if (isNaN(dateObj.getTime())) {
      res.json({ error: "Invalid Date" });
    } else {
      req.dateObj = dateObj;
      next();
    }
  }
}

module.exports = validateDate;
