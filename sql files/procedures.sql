DELIMITER //

CREATE PROCEDURE IF NOT EXISTS AddCustomer(
    IN customerName VARCHAR(50),
    IN contactNo VARCHAR(15),
    IN email VARCHAR(50),
    IN address VARCHAR(40),
    IN serviceId INT
)
BEGIN
    INSERT INTO CUSTOMER (customer_name, contact_no, email, address, service_id)
    VALUES (customerName, contactNo, email, address, serviceId);
END //

DELIMITER ;


DELIMITER //

CREATE PROCEDURE IF NOT EXISTS CreateAppointment(
    IN p_customer_id INT,
    IN p_employee_id INT,
    IN p_service_id INT,
    IN p_appointment_date DATE,
    IN p_appointment_time TIME
)
BEGIN
    DECLARE appointment_status VARCHAR(50);

    SELECT Availability_status INTO appointment_status
    FROM Employee
    WHERE Employee_id = p_employee_id;

    IF appointment_status = 'Available' THEN
        INSERT INTO Appointment (Customer_ID, Employee_Id, Service_ID, Appointment_Date, Appointment_Time, Status, Payment_Status)
        VALUES (p_customer_id, p_employee_id, p_service_id, p_appointment_date, p_appointment_time, 'Booked', 'Not Paid');

        UPDATE Employee
        SET Availability_status = 'Not Available'
        WHERE Employee_id = p_employee_id;
    END IF;
END //

DELIMITER ;


DELIMITER //

CREATE PROCEDURE IF NOT EXISTS DeleteAppointment(
    IN appointmentId INT
)
BEGIN
    DELETE FROM Appointment WHERE appointment_ID = appointmentId;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE IF NOT EXISTS UpdateCustomer(
    IN p_customer_id INT,
    IN p_new_customer_name VARCHAR(50),
    IN p_new_contact_no VARCHAR(15),
    IN p_new_email VARCHAR(50),
    IN p_new_address VARCHAR(40),
    IN p_new_service_id INT
)
BEGIN
    UPDATE CUSTOMER
    SET
        customer_name = p_new_customer_name,
        contact_no = p_new_contact_no,
        email = p_new_email,
        address = p_new_address,
        service_id = p_new_service_id
    WHERE customer_id = p_customer_id;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE IF NOT EXISTS AddPayment(
    IN p_customer_id INT,
    IN p_appointment_id INT,
    IN p_mode_of_payment varchar(50),
    IN p_amount DECIMAL(10, 2),
    IN p_date DATE,
    IN p_transaction_id VARCHAR(255)
)
BEGIN
    INSERT INTO PAYMENT (customer_id, appointment_id,mode_of_payment, amount, date, transaction_id)
    VALUES (p_customer_id, p_appointment_id,p_mode_of_payment, p_amount, p_date, p_transaction_id);
END //

DELIMITER ;

CREATE PROCEDURE IF NOT EXISTS AddRating(
    IN p_appointment_id INT,
    IN p_rating INT
)
BEGIN
    UPDATE employee
    SET rating = p_rating
    WHERE employee_Id IN (SELECT employee_Id FROM appointment WHERE appointment_ID = p_appointment_id);
END //

DELIMITER ;

