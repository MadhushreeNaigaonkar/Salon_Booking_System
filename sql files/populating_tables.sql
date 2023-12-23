INSERT INTO service (service_name, description, duration_minutes, price)
VALUES
    ('haircut', 'professional haircut by experienced stylists', 60, 300.00),
    ('manicure', 'nail care and grooming for hands and nails', 45, 500.00),
    ('facial', 'skin treatment and cleansing', 75, 400.00),
    ('massage', 'relaxing full-body massage', 90, 500.00),
    ('coloring', 'hair coloring by skilled colorists', 120, 200.00);



INSERT INTO admin (name, contact_no, email, password)
VALUES
    ('Madhushree Naigaonkar', '+91 123456891', 'madhu@example.com', 'Madhu@2000'),
    ('Aayush Tailang', '+91 2345678912', 'aayush@example.com', 'Aayush@2000'),
    ('Akshay Tambe', '+91 3456789123', 'akshay@example.com', 'Akshay@2000'),
    ('Aniket Wardikar', '+91 4567891231', 'aniket@example.com', 'Aniket@2000');



INSERT INTO Employee (employee_name, service_Id, email_Id, availability_status,rating)
VALUES
    ('Rahul Singh', 1, 'rahul.singh@gmail.com', 'Available',5),
    ('Priya Sharma', 2, 'priya.sharma@gmail.com', 'Available',4),
    ('Suresh Patel', 3, 'suresh.patel@gmail.com', 'Available',4),
    ('Neha Verma', 4, 'neha.verma@gmail.com', 'Available',5),
    ('Vikram Yadav', 5, 'vikram.yadav@gmail.com', 'Available',5),
    ('Aishwarya Reddy', 1, 'aishwarya.reddy@gmail.com', 'Not Available',3),
    ('Rajeev Kumar', 2, 'rajeev.kumar@gmail.com', 'Not Available',4),
    ('Kavita Gupta', 3, 'kavita.gupta@gmail.com', 'Available',5),
    ('Aryan Joshi', 4, 'aryan.joshi@gmail.com', 'Available',4),
    ('Bhavana Roy', 5, 'bhavana.roy@gmail.com', 'Available',4);	


INSERT INTO CUSTOMER (customer_name, contact_no, email, address, service_id)
VALUES
    ('Mohan Singh', '9876543210', 'mohan@gmail.com', 'FC Road', 1),
    ('Riya Shukla', '8765432109', 'riya@gmail.com', 'SB Road', 2),
    ('Ankit Patel', '7654321098', 'ankit@gmail.com', 'Wakad', 3),
    ('Surekha Verma', '6543210987', 'surekha@gmail.com', 'Baner', 4),
    ('Ripu Yadav', '9876543211', 'ripu@gmail.com', 'Hinjewadi', 5),
    ('Badal Reddy', '8765432110', 'badal@gmail.com', 'Pashan', 1),
    ('Ashwini Kumar', '7654321099', 'ashwini@gmail.com', 'Bhumkar Chowk', 2),
    ('Mohini Gupta', '6543210986', 'mohini@gmail.com', 'Pimpri', 3),
    ('shivam Joshi', '9876543212', 'shivam@gmail.com', 'Chinchwad', 4);


INSERT INTO Appointment (customer_ID, employee_Id, service_ID, appointment_Date, appointment_Time, status, payment_status)
VALUES
(1, 1, 1, '2023-11-21', '10:00:00', 'Booked', 'Paid'),
(2, 2, 2, '2023-11-22', '14:30:00', 'Booked', 'Paid'),
(3, 3, 3, '2023-11-23', '12:00:00', 'Booked', 'Paid'),
(4, 1, 1, '2023-11-21', '10:00:00', 'Booked', 'Paid'),
(5, 2, 2, '2023-11-22', '14:30:00', 'Booked', 'Not Paid');

INSERT INTO PAYMENT (customer_id, appointment_id,mode_of_payment,amount, date, transaction_id)
VALUES
(1, 1,'cash',50.00, '2023-01-15', 'abc123xyz'),
(2, 2, 'upi',75.50, '2023-02-28', 'def456uvm'),
(3, 3,'upi', 100.00, '2023-03-10', 'ghi789lmn'),
(4, 4,'card', 120.00, '2023-04-05', 'jfd012dfh'),
(1, 5,'cash', 90.00, '2023-05-20', 'bfb345kml'),
(2, 4,'upi', 60.50, '2023-06-15', 'bjp678avc'),
(3, 2, 'card',80.00, '2023-07-08', 'fdg901asd'),
(4, 3,'cash', 110.00, '2023-08-12', 'weq234mmk'),
(1, 1,'cash', 95.00, '2023-09-25', 'sda567fgd'),
(2, 2, 'upi',70.25, '2023-10-30', 'bfg890fdg');