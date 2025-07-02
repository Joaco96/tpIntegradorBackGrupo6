CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    price DECIMAL(10,2) NOT NULL,
    category VARCHAR(255),
    image VARCHAR(255)
);

CREATE TABLE sales (
    id INT AUTO_INCREMENT PRIMARY KEY,
    date DATE NOT NULL,
    buyerName VARCHAR(255),
    total DECIMAL(10,2) NOT NULL
);

CREATE TABLE saleItems (
    id INT AUTO_INCREMENT PRIMARY KEY,
    saleId INT NOT NULL,
    productId INT NOT NULL,
    quantity INT NOT NULL,
    productPrice DECIMAL(10,2) NOT NULL,
    productName VARCHAR(255) NOT NULL,
    
    FOREIGN KEY (saleId) REFERENCES sales(id) ON DELETE CASCADE,
    FOREIGN KEY (productId) REFERENCES products(id)
);
