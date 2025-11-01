CREATE DATABASE SchoolAppProjectData;
GO

CREATE TABLE [dbo].[student_record] (
    [id] INT IDENTITY(1,1) PRIMARY KEY,
    [Student_name] NVARCHAR(100),
    [Roll_number] INT ,
    [Father_name] NVARCHAR(100) ,
    [Contact_number] NVARCHAR(15) ,
    [date] DATETIME ,
    [status] INT 
);
GO

CREATE TABLE [dbo].[attendance] (
    [id] INT IDENTITY(1,1) PRIMARY KEY,
    [Student] INT ,
    [date] DATETIME,
    [mon] CHAR(1) ,
    [tue] CHAR(1),
    [wed] CHAR(1),
    [thu] CHAR(1) ,
    [fri] CHAR(1),
    [status] INT ,
    FOREIGN KEY ([Student]) REFERENCES [dbo].[student_record]([id])
);
GO

CREATE TABLE [dbo].[time_table] (
    [id] INT IDENTITY(1,1) PRIMARY KEY,
    [time_duration] NVARCHAR(50),
    [subject] NVARCHAR(50) ,
    [get_date] DATETIME ,
    [status] INT,
    [day] NVARCHAR(20),
    [class] NVARCHAR(50) ,
    [period] NVARCHAR(10)
);
GO

CREATE TABLE [dbo].[courses] (
    [id] INT IDENTITY(1,1) PRIMARY KEY,
    [subject] NVARCHAR(50) ,
    [book] NVARCHAR(100),
    [teacher] NVARCHAR(100) ,
    [date] DATETIME ,
    [status] INT 
);
GO

CREATE TABLE [dbo].[grade_records] (
    [id] INT IDENTITY(1,1) PRIMARY KEY,
    [name] NVARCHAR(100) ,
    [subject] NVARCHAR(50) ,
    [obtained] INT,
    [total] INT,
    [lowest] INT ,
    [highest] INT ,
    [date] DATETIME ,
    [status] INT
);
GO

CREATE TABLE [dbo].[expenses] (
    [id] INT IDENTITY(1,1) PRIMARY KEY,
    [entry] NVARCHAR(100),
    [Jan] NVARCHAR(20),
    [Feb] NVARCHAR(20),
    [Mar] NVARCHAR(20) ,
    [Apr] NVARCHAR(20),
    [May] NVARCHAR(20) ,
    [Jun] NVARCHAR(20),
    [date] DATETIME ,
    [Jul] NVARCHAR(20) ,
    [Aug] NVARCHAR(20) ,
    [Sep] NVARCHAR(20) ,
    [Oct] NVARCHAR(20),
    [Nov] NVARCHAR(20) ,
    [Dec] NVARCHAR(20),
    [status] INT 
);
GO

INSERT INTO [dbo].[student_record] ([Student_name], [Roll_number], [Father_name], [Contact_number], [date], [status])
VALUES 
('Habiba Ashraf', 165, 'Muhammad Ashraf', '030', GETDATE(),1),
('Sawera', 166, 'Muhammad Ashraf', '030', GETDATE(), 1),
('Mahnoor', 167, 'Muhammad Ashiq', '030', GETDATE(), 1),
('Hadia Noor', 208, 'Abdul Waheed', '035', GETDATE(), 1),
('Sadia Riaz', 80, 'Muhammad Riaz', '035', GETDATE(), 1),
('Alesha', 485, 'Ghulam Mustafa', '036', GETDATE(), 1),
('Arooba', 172, 'Muhammad Yousaf', '0309', GETDATE(), 1),
('Abu Bakar', 330, 'Muhammad Ali', '035', GETDATE(), 1), 
('Muhammad Aliyan', 333, 'Mudassar', '035', GETDATE(), 1),
('Muhammad Awais', 332, 'Mudassar', '030', GETDATE(), 1),
('Muhammad Adeel', 334, 'Abdul Waheed', '035', GETDATE(), 1),
('Ali Raza', 349, 'Abid Ali', '035', GETDATE(), 1),
('Muhammad Shuban', 374, 'Abdul Yasin', '035', GETDATE(), 1),
('Muhammad Adeel', 375, 'Muhammad Yaseen', '030', GETDATE(), 1),
('Abu Bakar', 356, 'Muhammad Idrees', '035', GETDATE(), 1),
('Ahmed Khan', 405, 'Muhammad Anwar', '035', GETDATE(), 1),
('Yasir Khan', 409, 'Sadia Khan', '035', GETDATE(), 1),
('Muhammad Kamran', 220, 'Hayat Khan', '035', GETDATE(), 1),
('Muhammad Faisal', 254, 'Bachu Khan', '030', GETDATE(), 1),
('Zaman Khan', 221, 'Sadiq Khan', '035', GETDATE(), 1),
('Muhammad Hadi', 234, 'Samiullah', '030', GETDATE(), 1),
('Ali Hassan', 281, 'Rajab Ali', '035', GETDATE(), 1),
('Muhammad Haq', 271, 'Muhammad Imran', '035', GETDATE(), 1),
('Ali Hamza', 326, 'Shafiq Ali', '035', GETDATE(), 1),
('Muhammad Sufyan', 308, 'Liaqat Ali', '030', GETDATE(), 1),
('Muhammad Bilal', 329, 'Aziz Khan', '030', GETDATE(), 1);
GO

INSERT INTO [dbo].[attendance] ([Student], [date], [mon], [tue], [wed], [thu], [fri], [status])
VALUES 
(1, GETDATE(), 'A', 'P', 'A', 'P', 'P', 1);
GO

INSERT INTO [dbo].[time_table] ([time_duration], [subject], [get_date], [status], [day], [class], [period])
VALUES 
('8:00 am - 8:45 am', 'English', GETDATE(), 1, 'Monday', 'Play Group 1', '1st'),
('9:00 am - 9:45 am', 'Math', GETDATE(), 1, 'Monday', 'Play Group 1', '2nd'),
('9:50 am - 10:15 am', 'Urdu', GETDATE(), 1, 'Monday', 'Play Group 1', '3rd'),
('10:20 am - 10:55 am', 'Islamiyat', GETDATE(), 1, 'Monday', 'Play Group 1', '4th'),
('11:00 am - 11:45 am', 'Science', GETDATE(), 1, 'Monday', 'Play Group 1', '5th'),
('11:45 am - 12:30 pm', 'Break', GETDATE(), 1, 'Monday', 'Play Group 1', '6th'),
('12:30 pm - 1:15 pm', 'Quran', GETDATE(), 1, 'Monday', 'Play Group 1', '7th');
GO

INSERT INTO [dbo].[courses] ([subject], [book], [teacher], [date], [status])
VALUES 
('Math', 'Book of Balochistan 5th Edition', 'Aliyan', GETDATE(), 1);
GO

INSERT INTO [dbo].[grade_records] ([name], [subject], [obtained], [total], [lowest], [highest], [date], [status])
VALUES 
('Ayza', 'Math', 95, 100, 34, 99, GETDATE(), 1);
GO

INSERT INTO [dbo].[expenses] ([entry], [Jan], [Feb], [Mar], [Apr], [May], [Jun], [date], [Jul], [Aug], [Sep], [Oct], [Nov], [Dec], [status])
VALUES 
('salary', 'Rs 456', 'Rs 456', 'Rs 956', 'Rs 426', 'Rs 256', 'Rs 411', GETDATE(), 'Rs 456', 'Rs 456', 'Rs 956', 'Rs 426', 'Rs 256', 'Rs 411', 1),
('furniture', 'Rs 456', 'Rs 456', 'Rs 956', 'Rs 426', 'Rs 256', 'Rs 411', GETDATE(), 'Rs 456', 'Rs 456', 'Rs 956', 'Rs 426', 'Rs 256', 'Rs 411', 1);
GO


select * from student_record
select * from attendance
select * from time_table
select * from courses
select * from grade_records
select * from expenses