# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

SELECT ProductName, CategoryName FROM Products as P JOIN Categories as C ON P.CategoryID = C.CategoryID;

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

SELECT O.OrderID, ShipperName FROM Orders as O JOIN Shippers as S ON O.ShipperID = S.ShipperID WHERE O.OrderDate < '1999-01-09';

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

SELECT P.ProductName as ProductNames, D.Quantity as Quantities FROM Orders as O JOIN OrderDetails as D ON O.OrderID = D.OrderID JOIN Products as P ON D.ProductID = P.ProductID WHERE O.OrderID = 10251;

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

SELECT OrderID, CustomerName, LastName as EmployeeLastName FROM Orders as O JOIN Customers as C ON C.CustomerID = O.CustomerID JOIN Employees as E ON E.EmployeeID = E.EmployeeID

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 