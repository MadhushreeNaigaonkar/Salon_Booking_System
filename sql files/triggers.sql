DELIMITER //

CREATE TRIGGER UpdateEmployeeStatusBusy
AFTER INSERT ON Appointment
FOR EACH ROW
BEGIN
    UPDATE Employee
    SET Availability_status = 'Busy'
    WHERE Employee_ID = NEW.Employee_Id;
END //

DELIMITER ;

DELIMITER //

DELIMITER //

CREATE TRIGGER UpdatePaymentStatus
AFTER UPDATE ON Appointment
FOR EACH ROW
BEGIN
    IF NEW.payment_Status = 'Completed' AND NEW.payment_status = 'Not Paid' THEN
        UPDATE PAYMENT
        SET Payment_status = 'Paid'
        WHERE appointment_id = NEW.Appointment_ID;
    END IF;
END //

DELIMITER ;


DELIMITER //

CREATE TRIGGER BeforeDeleteAppointment
BEFORE DELETE ON Appointment
FOR EACH ROW
BEGIN
    DECLARE empId INT;

    SELECT Employee_Id INTO empId FROM Appointment WHERE Appointment_ID = OLD.Appointment_ID;

    UPDATE Employee SET Availability_status = 'Available' WHERE Employee_id = empId;

    DELETE FROM PAYMENT WHERE appointment_id = OLD.Appointment_ID;
END //

DELIMITER ;

DELIMITER //

CREATE TRIGGER AfterDeleteAppointment
AFTER DELETE ON Appointment
FOR EACH ROW
BEGIN
    DECLARE empId INT;

    SELECT Employee_Id INTO empId FROM Employee WHERE Employee_ID = OLD.Employee_Id;

    UPDATE Employee SET Availability_status = 'Available' WHERE Employee_ID = empId;
END //

DELIMITER ;

