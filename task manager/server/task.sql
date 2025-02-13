USE task_manager;


CREATE TABLE tasks(
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    descript TEXT,
    status ENUM("pending", "completed") DEFAULT "pending",
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

INSERT INTO tasks(title, descript, status, create_at) 
    VALUES('title-from-mysql', "desc-from-mysql", status, "01/10/11");


SELECT * FROM tasks;