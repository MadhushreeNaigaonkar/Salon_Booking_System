CREATE TABLE service (
    service_id INT PRIMARY KEY AUTO_INCREMENT,
    service_name VARCHAR(255) NOT NULL,
    description TEXT,
    duration_minutes INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

CREATE TABLE admin (
    admin_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    contact_no VARCHAR(15),
    email VARCHAR(50),
    password VARCHAR(50)
);

CREATE TABLE employee (
    employee_id INT PRIMARY KEY AUTO_INCREMENT,
    employee_name VARCHAR(50),
    service_Id INT,
    email_Id VARCHAR(50),
    availability_status VARCHAR(50),
    rating int,
    FOREIGN KEY (Service_ID) REFERENCES service(service_id)
);

CREATE TABLE customer(
    customer_id INT PRIMARY KEY AUTO_INCREMENT,
    customer_name VARCHAR(50),
    contact_no VARCHAR(15),
    email VARCHAR(50),
    address VARCHAR(40),
    service_id INT,  
    FOREIGN KEY (service_id) REFERENCES service(service_id) ON UPDATE CASCADE
);

CREATE TABLE appointment (
    appointment_ID INT PRIMARY KEY AUTO_INCREMENT,
    customer_ID INT,
    employee_Id INT,
    service_ID INT,
    appointment_Date DATE,
    appointment_Time TIME,
    status VARCHAR(50),
    payment_status VARCHAR(50),
    FOREIGN KEY (Customer_ID) REFERENCES customer(customer_id),
    FOREIGN KEY (Employee_ID) REFERENCES employee(employee_id),
    FOREIGN KEY (Service_ID) REFERENCES service(service_id)
);

CREATE TABLE payment(
    payment_id INT PRIMARY KEY AUTO_INCREMENT,
    customer_id INT,
    appointment_id INT,
    mode_of_payment VARCHAR(50),
    amount DECIMAL(10, 2),
    date DATE,
    transaction_id VARCHAR(255),
    FOREIGN KEY (customer_id) REFERENCES customer(customer_id),
    FOREIGN KEY (appointment_id) REFERENCES appointment(appointment_id)
);
